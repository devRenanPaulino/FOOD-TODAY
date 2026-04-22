import bgImage from "../../assets/img/topHeroMenu.jpg";
import { useRecipes } from "../../contexts/useRecipes";
import RecipeCard from "../../components/ui/Recipe/RecipeCard";
import { CategoryCard } from "../../components/ui/Category/CategoryCard";

const Index = () => {
  const { filteredRecipes, isLoading, error, activeFilter } = useRecipes();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primaria"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500 py-20">{error}</div>;
  }
  return (
    <>
      <div className="relative w-full">
        <section
          aria-label="top-hero-menu"
          className="relative w-full overflow-hidden"
        >
          {/* Camada escura */}
          <div className="absolute inset-0 bg-black/30 z-10"></div>

          <img
            src={bgImage}
            alt=""
            className="w-full block object-cover h-auto min-h-[400px]"
          />
        </section>

        <section className="mt-32">
          <CategoryCard />
        </section>

        <section
          aria-label="lista-de-receitas"
          className="container my-16 p-4 sm:p-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center mx-auto gap-8"
        >
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}

          {filteredRecipes.length === 0 && (
            <p className="text-center py-10 text-gray-500">
              Nenhuma receita encontrada para o filtro: {activeFilter}
            </p>
          )}
        </section>
      </div>
    </>
  );
};

export default Index;
