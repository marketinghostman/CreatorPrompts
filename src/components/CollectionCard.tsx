import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Collection } from "@/types";

interface CollectionCardProps {
  collection: Collection;
}

export function CollectionCard({ collection }: CollectionCardProps) {
  return (
    <Link to={`/collections/${collection.id}`}>
      <Card className="group h-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
        <CardHeader>
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50 text-2xl dark:bg-violet-950">
            {collection.icon}
          </div>
          <CardTitle className="text-lg group-hover:text-violet-600 dark:group-hover:text-violet-400">
            {collection.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 line-clamp-2 text-sm text-slate-500 dark:text-slate-400">
            {collection.description}
          </p>
          <div className="flex items-center gap-1 text-sm font-medium text-violet-600 dark:text-violet-400">
            {collection.promptIds.length} prompts
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
