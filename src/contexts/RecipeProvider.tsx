import React, { type ReactNode } from "react";
import type { Recipe, Tags } from "../domain/types/Recipe";
import useFetch from "../hooks/useFetch";
import { recipeService } from "../data/services/recipeService";
import { RecipeContext } from "./RecipeContext";

export function RecipeProvider({children}: {children: ReactNode}) {
  const {data, isLoading, error} = useFetch<Recipe[]>("../../public/data/recipe.json")
  const [activeFilter, setActiveFilter] = React.useState<Tags | 'explorar o mundo'>('explorar o mundo');

  const allRecipes = React.useMemo(() => {
    return data ? recipeService.transform(data) : [];
  }, [data])

  const filteredRecipes = React.useMemo(() => {
    // Se o filtro for o padrão, retorna tudo
    if (activeFilter === 'explorar o mundo') return allRecipes;

    // Regra especial para o filtro Express (que é baseado em número, não tag)
    if (activeFilter === 'Express') {
      return recipeService.filterExpress(allRecipes);
    }

    // Filtro padrão por tags do Service
    return recipeService.filterByTag(allRecipes, activeFilter as Tags);
  }, [allRecipes, activeFilter]);

  // Escolhas do chef
  const escolhasChef = React.useMemo(() => {
    return recipeService.getChefChoices(allRecipes)
  }, [allRecipes])

  return (
    <RecipeContext.Provider value={{
      recipes: allRecipes,
      filteredRecipes,
      escolhasChef,
      activeFilter,
      setActiveFilter,
      isLoading,
      error
    }}>
      {children}
    </RecipeContext.Provider>
  );
}