import topHero from "../../assets/img/imageHero.jpg";
import Button from "../../components/ui/Button/Button";

import cook from "../../assets/svg/cook.svg";
import login from "../../assets/svg/login.svg";
import time from "../../assets/svg/time-fill.svg";
import recipe from "../../assets/svg/food-menu.svg";
import favorite from "../../assets/svg/favorite.svg";

const index = () => {
  return (
    <>
      <div className="container mx-auto">
        <section
          aria-label="receitas de pratos"
          className="w-full max-w-7xl mx-auto py-12"
        >
          <h1 className="text-primaria font-bold text-2xl sm:text-3xl lg:text-4xl text-start sm:text-center mb-12 lg:mb-16 px-4">
            Pratos práticos, estéticos e deliciosos para a sua próxima refeição.
          </h1>
          <img
            src={topHero}
            alt="Variedade de pratos da culinária indiana"
            className="w-[90%] sm:w-full h-auto max-h-[600px] aspect-video lg:aspect-auto object-cover object-center rounded-3xl mx-auto mb-12 shadow-sm"
          />
        
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12 px-6 lg:px-16 xl:-mt-20">
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center sm:justify-around items-center gap-8 lg:gap-12 flex-1 order-1 lg:order-2">
              {[
                { img: recipe, label: "Receitas Diversas" },
                { img: time, label: "Praticidade e Tempo" },
                { img: favorite, label: "Salve suas receitas" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center gap-3 transition-transform hover:scale-105"
                >
                  <img src={item.img} alt="" className="w-10 h-10" />
                  <span className="text-sm font-medium text-gray-700 ">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <article className="flex gap-6 p-8 lg:p-10 bg-primaria w-full lg:max-w-[450px] rounded-3xl shadow-lg order-2 lg:order-1">
              <img src={cook} alt="" className="w-12 h-12 object-contain" />
              <div className="flex flex-col items-start text-white">
                <strong className="text-xl lg:text-2xl leading-tight mt-3">
                  Sua cozinha, seu ritmo.
                </strong>
                <p className="text-sm my-6 opacity-90">
                  Salve favoritos e organize seu cardápio semanal.
                </p>
                <div className="w-full sm:w-auto">
                  <Button variant="secundary" icon={<img src={login} alt="" />}>
                    Login
                  </Button>
                </div>
              </div>
            </article>
          </div>
        </section>
      </div>
    </>
  );
};

export default index;
