import type { MouseEvent } from "react";
import { Link } from "react-router-dom";
import { Copy, Heart } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CATEGORY_COLORS, MODEL_COLORS } from "@/data/categories";
import { useFavorites } from "@/hooks/useFavorites";
import { toast } from "@/hooks/useToast";
import { copyToClipboard } from "@/utils/copyToClipboard";
import { cn } from "@/utils/cn";
import type { Prompt } from "@/types";

interface PromptCardProps {
  prompt: Prompt;
}

export function PromptCard({ prompt }: PromptCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorited = isFavorite(prompt.id);

  const handleCopy = async (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const success = await copyToClipboard(prompt.promptText);
    if (success) {
      toast({ title: "Copied!", description: "Prompt copied to clipboard." });
    }
  };

  const handleFavorite = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(prompt.id);
    toast({
      title: favorited ? "Removed from favorites" : "Added to favorites",
      description: prompt.title,
    });
  };

  return (
    <Link to={`/prompt/${prompt.id}`} className="group block">
      <Card className="h-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
        <CardHeader className="pb-3">
          <div className="mb-2 flex flex-wrap gap-2">
            <Badge className={cn("border-0", CATEGORY_COLORS[prompt.category])}>
              {prompt.category}
            </Badge>
            <Badge className={cn("border-0", MODEL_COLORS[prompt.aiModel])}>
              {prompt.aiModel}
            </Badge>
          </div>
          <CardTitle className="line-clamp-2 text-base group-hover:text-violet-600 dark:group-hover:text-violet-400">
            {prompt.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="pb-3">
          <p className="line-clamp-2 text-sm text-slate-500 dark:text-slate-400">
            {prompt.description}
          </p>
        </CardContent>
        <CardFooter className="gap-2 pt-0">
          <Button variant="outline" size="sm" className="flex-1" onClick={handleCopy}>
            <Copy className="h-3.5 w-3.5" />
            Copy
          </Button>
          <Button
            variant={favorited ? "default" : "outline"}
            size="icon"
            className="h-9 w-9 shrink-0"
            onClick={handleFavorite}
            aria-label={favorited ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart className={cn("h-4 w-4", favorited && "fill-current")} />
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
