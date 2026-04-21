import type { Recipe, Tags } from "../../domain/types/Recipe";

interface RecipeDTO extends Omit<Recipe, "tempo_preparo" | "tags"> {
  tempo_preparo: string | number;
  tags?: string[];
}

export const recipeService = {
  transform(data: RecipeDTO[]): Recipe[] {
    return data.map((item) => ({
      ...item,
      tempo_preparo:
        typeof item.tempo_preparo === "string"
          ? parseInt(item.tempo_preparo.replace(/\D/g, ""), 10)
          : item.tempo_preparo,
      tags: (item.tags || []) as Tags[],
    }));
  },

  filterByTag(recipes: Recipe[], tag: Tags): Recipe[] {
    return recipes.filter(r => r.tags.includes(tag));
  },

  filterExpress(recipes: Recipe[], tempoMax: number = 30) : Recipe[] {
    return recipes.filter(r => r.tempo_preparo <= tempoMax)
  }
};
