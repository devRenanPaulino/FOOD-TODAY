import React, { useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useRecipes } from "../../contexts/useRecipes";

const tagColors: Record<string, string> = {
  "Raízes do Brasil": "bg-yellow-100 text-yellow-800",
  "explorar o mundo": "bg-blue-100 text-blue-800",
  Express: "bg-green-100 text-green-800",
  "Plant Based": "bg-emerald-100 text-emerald-800",
  "Mar & Rio": "bg-cyan-100 text-cyan-800",
  "Churrasco & Brasa": "bg-orange-100 text-orange-800",
};

const dificuldadeCor: Record<string, string> = {
  Fácil: "bg-green-100 text-green-700",
  Médio: "bg-yellow-100 text-yellow-700",
  Dificíl: "bg-red-100 text-red-700",
};

const RecipeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { getRecipeById, isLoading } = useRecipes();
  const navigate = useNavigate();

  const recipe = useMemo(() => 
  getRecipeById(Number(id)), 
  [getRecipeById, id]
);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen" aria-live="polite">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primaria" />
        <p className="ml-4 text-primaria font-medium">Carregando receita...</p>
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-primaria mb-2">Receita não encontrada</h1>
        <p className="text-gray-500 mb-8">Não encontramos essa receita no nosso cardápio.</p>
        <button
          onClick={() => navigate("/menu")}
          className="px-8 py-3 bg-primaria text-white font-bold rounded-2xl hover:brightness-110 active:scale-95 transition-all"
        >
          Voltar ao Menu
        </button>
      </div>
    );
  }

  return (
    <article className="container mx-auto px-4 py-10 max-w-5xl">
      {/* Voltar */}
      <nav aria-label="Navegação de retorno" className="mb-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-primaria font-semibold hover:opacity-70 transition-opacity"
        >
          ← Voltar
        </button>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-12">
        <div className="relative rounded-3xl overflow-hidden shadow-xl">
          <img
            src={recipe.imagem}
            alt={recipe.titulo}
            className="w-full h-72 lg:h-[420px] object-cover"
          />
          <span className="absolute top-4 left-4 px-3 py-1 bg-primaria text-white text-xs font-bold rounded-full">
            {recipe.caracteristica}
          </span>
        </div>

        <div className="flex flex-col gap-5">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">
              {recipe.categoria}
            </p>
            <h1 className="text-3xl lg:text-4xl font-bold text-escuro leading-tight">
              {recipe.titulo}
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              por <span className="font-semibold text-primaria">{recipe.autor}</span>
            </p>
          </div>

          <div className="flex flex-wrap gap-2" aria-label="Categorias da receita">
            {recipe.tags.map((tag) => (
              <span
                key={tag}
                className={`px-3 py-1 rounded-full text-xs font-bold ${tagColors[tag] ?? "bg-gray-100 text-gray-700"}`}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-4 gap-3 py-4 border-y border-dashed border-gray-200 text-center">
            <div>
              <p className="text-[10px] text-gray-400 uppercase tracking-wide mb-1">Culinária</p>
              <p className="font-bold text-escuro text-sm">{recipe.culinaria}</p>
            </div>
            <div>
              <p className="text-[10px] text-gray-400 uppercase tracking-wide mb-1">Tempo</p>
              <p className="font-bold text-escuro text-sm">⏱ {recipe.tempo_preparo}min</p>
            </div>
            <div>
              <p className="text-[10px] text-gray-400 uppercase tracking-wide mb-1">Porções</p>
              <p className="font-bold text-escuro text-sm">{recipe.porcoes}</p>
            </div>
            <div>
              <p className="text-[10px] text-gray-400 uppercase tracking-wide mb-1">Dificuldade</p>
              <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-bold ${dificuldadeCor[recipe.dificuldade] ?? "bg-gray-100 text-gray-600"}`}>
                {recipe.dificuldade}
              </span>
            </div>
          </div>

          {/* Dica do Chef */}
          <div className="bg-primaria/5 border-l-4 border-primaria rounded-xl p-5">
            <p className="text-xs text-primaria font-black uppercase tracking-widest mb-2">
              Dica do Chef
            </p>
            <p className="text-gray-700 italic text-sm leading-relaxed">
              "{recipe.dica_chefe}"
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <section aria-labelledby="ingredientes-titulo">
          <h2
            id="ingredientes-titulo"
            className="text-2xl font-bold text-primaria mb-4 flex items-center gap-2"
          >
            Ingredientes
            <span className="text-sm font-normal text-gray-400">
              ({recipe.porcoes} {recipe.porcoes === 1 ? "porção" : "porções"})
            </span>
          </h2>
          <ul className="flex flex-col gap-2" role="list">
            {recipe.ingredientes.map((ingrediente, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 py-2 border-b border-dashed border-gray-100 last:border-0"
              >
                <span className="mt-1 w-2 h-2 rounded-full bg-primaria flex-shrink-0" aria-hidden="true" />
                <span className="text-gray-700 text-sm">{ingrediente}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Modo de preparo */}
        <section aria-labelledby="preparo-titulo">
          <h2 id="preparo-titulo" className="text-2xl font-bold text-primaria mb-4">
            Modo de Preparo
          </h2>
          <ol className="flex flex-col gap-4" role="list">
            {recipe.passos.map((passo, idx) => (
              <li key={idx} className="flex gap-4 items-start">
                <span
                  className="flex-shrink-0 w-8 h-8 rounded-full bg-primaria text-white text-sm font-black flex items-center justify-center"
                  aria-label={`Passo ${idx + 1}`}
                >
                  {idx + 1}
                </span>
                <p className="text-gray-700 text-sm leading-relaxed pt-1">{passo}</p>
              </li>
            ))}
          </ol>
        </section>
      </div>

      <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button
          onClick={() => navigate("/menu")}
          className="px-8 py-3 bg-primaria text-white font-bold rounded-2xl hover:brightness-110 active:scale-95 transition-all w-full sm:w-auto"
        >
          Ver outras receitas
        </button>
      </div>
    </article>
  );
};

export default RecipeDetail;