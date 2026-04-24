import React from 'react';
import type { Recipe, Tags } from "../domain/types/Recipe";

export interface RecipeContextData {
  recipes: Recipe[];
  filteredRecipes: Recipe[];
  activeFilter: Tags | 'explorar o mundo';
  escolhasChef: Recipe[];
  setActiveFilter: (filter: Tags | 'explorar o mundo') => void;
  isLoading: boolean;
  error: string | null;
  getRecipeById: (id: number) => Recipe;
}

export const RecipeContext = React.createContext<RecipeContextData | undefined>(undefined);