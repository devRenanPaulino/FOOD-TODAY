import type { Recipe } from "../../../domain/types/Recipe";

interface CardProps {
  recipe: Recipe;
}

const RecipeCard = ({recipe} : CardProps) => {

  const { img, caracteristica, titulo, dificuldade, culinaria, tempo_preparo, dica } = recipe;

  return (
    <div className="flex flex-col gap-3 bg-primaria/6 rounded-3xl p-8 max-w-[365px] shadow-2xl transition-all hover:-translate-y-1.5 hover:shadow-primaria/25">
      <div className="relative">
        <img
          className="object-fit rounded-[8px]"
          src={img}
          alt={titulo}
        />
        <span className="px-4 py-2 bg-primaria text-white text-xs font-semibold rounded-2xl absolute top-2 left-2 z-10">
          {caracteristica}
        </span>
      </div>

      <h2 className="font-semibold text-xl">{titulo}</h2>

      <div className="flex flex-wrap justify-around items-center">
        <span className="px-10 py-2 bg-primaria text-white text-xs font-semibold rounded-2xl">
          {culinaria}
        </span>

        <span className="px-10 py-2 bg-primaria text-xs text-white font-semibold rounded-2xl">
          {dificuldade}
        </span>
      </div>

      <p className="text-xs">Tempo de Preparo: {tempo_preparo}</p>
      <p className="text-xs break-all">Dica do Chef: {dica}</p>
    </div>
  );
};

export default RecipeCard;
