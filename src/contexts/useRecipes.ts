import React from "react";
import { RecipeContext } from "./RecipeContext";

export function useRecipes() {
  const context = React.useContext(RecipeContext);
  if (!context) {
    throw new Error('useRecipes deve ser usado dentro de um RecipeProvider');
  }
  return context;
}