import { Link } from "react-router-dom";
import { Heart, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PromptCard } from "@/components/PromptCard";
import { prompts } from "@/data/prompts";
import { useFavorites } from "@/hooks/useFavorites";

export function FavoritesPage() {
  const { favorites } = useFavorites();
  const favoritePrompts = prompts.filter((p) => favorites.includes(p.id));

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50 dark:bg-violet-950">
          <Heart className="h-6 w-6 fill-violet-600 text-violet-600" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Favorites</h1>
          <p className="mt-1 text-slate-500 dark:text-slate-400">
            Your saved prompts — stored locally in your browser
          </p>
        </div>
      </div>

      {favoritePrompts.length > 0 ? (
        <>
          <p className="mb-6 text-sm text-slate-500 dark:text-slate-400">
            {favoritePrompts.length} saved prompt{favoritePrompts.length !== 1 ? "s" : ""}
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {favoritePrompts.map((prompt) => (
              <PromptCard key={prompt.id} prompt={prompt} />
            ))}
          </div>
        </>
      ) : (
        <div className="rounded-2xl border border-dashed border-slate-200 py-20 text-center dark:border-slate-800">
          <Heart className="mx-auto mb-4 h-12 w-12 text-slate-300 dark:text-slate-700" />
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            No favorites yet
          </h2>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Browse prompts and click the heart icon to save them here
          </p>
          <Button asChild className="mt-6">
            <Link to="/browse">
              <Search className="h-4 w-4" />
              Browse Prompts
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
}
