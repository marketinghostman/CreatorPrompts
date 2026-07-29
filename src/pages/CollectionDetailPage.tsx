import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PromptCard } from "@/components/PromptCard";
import { collections } from "@/data/collections";
import { getPromptsByIds } from "@/data/prompts";

export function CollectionDetailPage() {
  const { id } = useParams<{ id: string }>();
  const collection = collections.find((c) => c.id === id);

  if (!collection) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Collection not found</h1>
        <Button asChild className="mt-6">
          <Link to="/collections">View collections</Link>
        </Button>
      </div>
    );
  }

  const collectionPrompts = getPromptsByIds(collection.promptIds);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Button asChild variant="ghost" className="mb-6 -ml-2">
        <Link to="/collections">
          <ArrowLeft className="h-4 w-4" />
          All collections
        </Link>
      </Button>

      <div className="mb-10 flex items-start gap-4">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-violet-50 text-3xl dark:bg-violet-950">
          {collection.icon}
        </div>
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">{collection.title}</h1>
          <p className="mt-2 max-w-2xl text-slate-500 dark:text-slate-400">
            {collection.description}
          </p>
          <p className="mt-3 text-sm text-slate-400">
            {collectionPrompts.length} prompts in this collection
          </p>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {collectionPrompts.map((prompt) => (
          <PromptCard key={prompt.id} prompt={prompt} />
        ))}
      </div>
    </div>
  );
}
