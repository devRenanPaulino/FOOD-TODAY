import type { Recipe } from "../../../domain/types/Recipe";

interface CardProps {
  recipe: Recipe;
}

const RecipeCard = ({ recipe }: CardProps) => {
  const { imagem, caracteristica, titulo, dificuldade, culinaria, tempo_preparo, dica_chefe } = recipe;

  return (
    <div className="group flex flex-col sm:flex-col bg-gray-50 border border-primaria/10 rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 w-full max-w-[365px] sm:max-h-none">
      <div className="relative h-44 sm:h-64 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={imagem}
          alt={titulo}
        />
        <span className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-md text-primaria text-[10px] font-bold rounded-full z-10">
          {caracteristica}
        </span>
      </div>

      <div className="p-4 sm:p-6 flex flex-col gap-2 sm:gap-4">
        
        <h2 className="font-bold text-lg sm:text-2xl text-escuro leading-tight line-clamp-1 sm:line-clamp-2">
          {titulo}
        </h2>

        <div className="flex items-center justify-between sm:justify-start sm:gap-3">
          <div className="flex gap-2">
            <span className="px-4 py-2 bg-primaria/10 text-primaria text-xs font-bold rounded-md">
              {culinaria}
            </span>
            <span className="px-4 py-2 bg-gray-100 text-gray-600 text-xs font-bold rounded-md">
              {dificuldade}
            </span>
          </div>
          <span className="text-[10px] text-gray-500 font-medium">⏱ {tempo_preparo}min</span>
        </div>

        <div className="pt-3 border-t border-dashed border-gray-200">
          <p className="hidden sm:block text-[10px] text-gray-400 font-semibold uppercase mb-1">Dica do Chef</p>
          <p className="text-[11px] sm:text-sm text-gray-600 italic leading-snug line-clamp-2 sm:line-clamp-3">
             <span className="sm:hidden font-bold not-italic text-gray-400">Dica: </span>
             "{dica_chefe}"
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;