import { collections } from "@/data/collections";
import { CollectionCard } from "@/components/CollectionCard";

export function CollectionsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Collections</h1>
        <p className="mt-2 text-slate-500 dark:text-slate-400">
          Curated prompt bundles for specific creator workflows
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {collections.map((collection) => (
          <CollectionCard key={collection.id} collection={collection} />
        ))}
      </div>
    </div>
  );
}
