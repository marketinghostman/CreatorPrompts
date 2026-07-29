import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PromptCard } from "@/components/PromptCard";
import { prompts } from "@/data/prompts";
import { CATEGORIES, AI_MODELS } from "@/data/categories";
import { useFavorites } from "@/hooks/useFavorites";
import type { SortOption, Category, AIModel } from "@/types";
import { cn } from "@/utils/cn";

export function BrowsePage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category | "all">("all");
  const [model, setModel] = useState<AIModel | "all">("all");
  const [sort, setSort] = useState<SortOption>("popularity");
  const [showFilters, setShowFilters] = useState(false);
  const { favorites } = useFavorites();

  const filtered = useMemo(() => {
    let result = [...prompts];

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q)) ||
          p.category.toLowerCase().includes(q)
      );
    }

    if (category !== "all") {
      result = result.filter((p) => p.category === category);
    }

    if (model !== "all") {
      result = result.filter((p) => p.aiModel === model);
    }

    switch (sort) {
      case "popularity":
        result.sort((a, b) => b.popularity - a.popularity);
        break;
      case "newest":
        result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      case "favorites":
        result.sort((a, b) => {
          const aFav = favorites.includes(a.id) ? 1 : 0;
          const bFav = favorites.includes(b.id) ? 1 : 0;
          return bFav - aFav || b.popularity - a.popularity;
        });
        break;
    }

    return result;
  }, [search, category, model, sort, favorites]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Browse Prompts</h1>
        <p className="mt-2 text-slate-500 dark:text-slate-400">
          Search and filter {prompts.length}+ curated prompts for content creators
        </p>
      </div>

      {/* Search & Filters */}
      <div className="mb-8 space-y-4">
        <div className="flex gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input
              placeholder="Search prompts, tags, categories..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button
            variant="outline"
            className="shrink-0 md:hidden"
            onClick={() => setShowFilters(!showFilters)}
          >
            <SlidersHorizontal className="h-4 w-4" />
          </Button>
        </div>

        <div className={cn("flex flex-wrap gap-3", !showFilters && "hidden md:flex")}>
          <Select value={category} onValueChange={(v) => setCategory(v as Category | "all")}>
            <SelectTrigger className="w-full sm:w-[200px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {CATEGORIES.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={model} onValueChange={(v) => setModel(v as AIModel | "all")}>
            <SelectTrigger className="w-full sm:w-[160px]">
              <SelectValue placeholder="AI Model" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Models</SelectItem>
              {AI_MODELS.map((m) => (
                <SelectItem key={m} value={m}>
                  {m}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={sort} onValueChange={(v) => setSort(v as SortOption)}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popularity">Most Popular</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="favorites">Favorites First</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Active filters */}
        {(category !== "all" || model !== "all" || search) && (
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-slate-500">Active filters:</span>
            {search && (
              <Badge variant="secondary" className="cursor-pointer" onClick={() => setSearch("")}>
                Search: {search} ×
              </Badge>
            )}
            {category !== "all" && (
              <Badge variant="secondary" className="cursor-pointer" onClick={() => setCategory("all")}>
                {category} ×
              </Badge>
            )}
            {model !== "all" && (
              <Badge variant="secondary" className="cursor-pointer" onClick={() => setModel("all")}>
                {model} ×
              </Badge>
            )}
          </div>
        )}
      </div>

      {/* Results */}
      <div className="mb-4 text-sm text-slate-500 dark:text-slate-400">
        {filtered.length} prompt{filtered.length !== 1 ? "s" : ""} found
      </div>

      {filtered.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((prompt) => (
            <PromptCard key={prompt.id} prompt={prompt} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-slate-200 py-16 text-center dark:border-slate-800">
          <p className="text-lg font-medium text-slate-900 dark:text-white">No prompts found</p>
          <p className="mt-1 text-slate-500">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
}
