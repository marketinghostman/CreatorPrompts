import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, TrendingUp, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CollectionCard } from "@/components/CollectionCard";
import { PromptCard } from "@/components/PromptCard";
import { collections } from "@/data/collections";
import { prompts } from "@/data/prompts";

const stats = [
  { label: "Prompts", value: "500+", icon: Sparkles },
  { label: "Categories", value: "30+", icon: TrendingUp },
  { label: "Creators", value: "10,000+", icon: Users },
];

export function HomePage() {
  const featuredCollections = collections.filter((c) => c.featured);
  const topPrompts = [...prompts].sort((a, b) => b.popularity - a.popularity).slice(0, 6);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-indigo-50 dark:from-violet-950/30 dark:via-slate-950 dark:to-indigo-950/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(124,58,237,0.08),transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 text-sm font-medium text-violet-700 dark:border-violet-800 dark:bg-violet-950 dark:text-violet-300">
              <Zap className="h-4 w-4" />
              Curated for creators
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
              Discover AI Prompts That{" "}
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Actually Work
              </span>
            </h1>
            <p className="mb-10 text-lg text-slate-600 sm:text-xl dark:text-slate-400">
              Curated prompts for YouTube, TikTok, LinkedIn, newsletters and content marketing.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link to="/browse">
                  Explore Prompts
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/collections">Featured Collections</Link>
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-6 sm:gap-8">
            {stats.map(({ label, value, icon: Icon }) => (
              <div key={label} className="text-center">
                <div className="mb-2 flex justify-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm dark:bg-slate-900">
                    <Icon className="h-5 w-5 text-violet-600" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-slate-900 dark:text-white">{value}</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Featured Collections
            </h2>
            <p className="mt-1 text-slate-500 dark:text-slate-400">
              Curated prompt bundles for every creator workflow
            </p>
          </div>
          <Button asChild variant="ghost" className="hidden sm:flex">
            <Link to="/collections">
              View all
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCollections.slice(0, 3).map((collection) => (
            <CollectionCard key={collection.id} collection={collection} />
          ))}
        </div>
      </section>

      {/* Popular Prompts */}
      <section className="border-t border-slate-200 bg-slate-50/50 py-16 dark:border-slate-800 dark:bg-slate-900/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Most Popular Prompts
              </h2>
              <p className="mt-1 text-slate-500 dark:text-slate-400">
                Copy and use instantly — no signup required
              </p>
            </div>
            <Button asChild variant="ghost" className="hidden sm:flex">
              <Link to="/browse">
                Browse all
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {topPrompts.map((prompt) => (
              <PromptCard key={prompt.id} prompt={prompt} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
