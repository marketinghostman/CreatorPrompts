import { useCallback, useEffect, useState } from "react";
import { getFavorites, saveFavorites } from "@/utils/storage";

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>(() => getFavorites());

  useEffect(() => {
    saveFavorites(favorites);
  }, [favorites]);

  const toggleFavorite = useCallback((id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  }, []);

  const isFavorite = useCallback(
    (id: string) => favorites.includes(id),
    [favorites]
  );

  return { favorites, toggleFavorite, isFavorite, count: favorites.length };
}
