import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Copy, Heart, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getPromptById } from "@/data/prompts";
import { CATEGORY_COLORS, MODEL_COLORS } from "@/data/categories";
import { useFavorites } from "@/hooks/useFavorites";
import { toast } from "@/hooks/useToast";
import { copyToClipboard } from "@/utils/copyToClipboard";
import { cn } from "@/utils/cn";

export function PromptDetailPage() {
  const { id } = useParams<{ id: string }>();
  const prompt = id ? getPromptById(id) : undefined;
  const { isFavorite, toggleFavorite } = useFavorites();

  if (!prompt) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Prompt not found</h1>
        <Button asChild className="mt-6">
          <Link to="/browse">Browse prompts</Link>
        </Button>
      </div>
    );
  }

  const favorited = isFavorite(prompt.id);

  const handleCopy = async () => {
    const success = await copyToClipboard(prompt.promptText);
    if (success) {
      toast({ title: "Copied!", description: "Prompt copied to clipboard." });
    }
  };

  const handleFavorite = () => {
    toggleFavorite(prompt.id);
    toast({
      title: favorited ? "Removed from favorites" : "Added to favorites",
      description: prompt.title,
    });
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <Button asChild variant="ghost" className="mb-6 -ml-2">
        <Link to="/browse">
          <ArrowLeft className="h-4 w-4" />
          Back to browse
        </Link>
      </Button>

      <div className="mb-6 flex flex-wrap gap-2">
        <Badge className={cn("border-0", CATEGORY_COLORS[prompt.category])}>
          {prompt.category}
        </Badge>
        <Badge className={cn("border-0", MODEL_COLORS[prompt.aiModel])}>
          {prompt.aiModel}
        </Badge>
        <Badge variant="secondary" className="gap-1">
          <TrendingUp className="h-3 w-3" />
          {prompt.popularity} uses
        </Badge>
      </div>

      <h1 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
        {prompt.title}
      </h1>
      <p className="mb-8 text-lg text-slate-600 dark:text-slate-400">{prompt.description}</p>

      <div className="mb-8 flex flex-wrap gap-3">
        <Button size="lg" onClick={handleCopy}>
          <Copy className="h-4 w-4" />
          Copy Prompt
        </Button>
        <Button size="lg" variant={favorited ? "default" : "outline"} onClick={handleFavorite}>
          <Heart className={cn("h-4 w-4", favorited && "fill-current")} />
          {favorited ? "Saved" : "Add to Favorites"}
        </Button>
      </div>

      <div className="mb-8 grid gap-6 sm:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Use Case</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600 dark:text-slate-400">{prompt.useCase}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Expected Output</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600 dark:text-slate-400">{prompt.expectedOutput}</p>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Full Prompt</CardTitle>
        </CardHeader>
        <CardContent>
          <pre className="whitespace-pre-wrap rounded-xl bg-slate-50 p-4 text-sm leading-relaxed text-slate-800 dark:bg-slate-900 dark:text-slate-200">
            {prompt.promptText}
          </pre>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Example Output</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
            <p className="whitespace-pre-wrap text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {prompt.exampleOutput}
            </p>
          </div>
        </CardContent>
      </Card>

      {prompt.tags.length > 0 && (
        <div className="mt-8 flex flex-wrap gap-2">
          {prompt.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              #{tag}
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
}
