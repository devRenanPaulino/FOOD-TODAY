import { useRecipes } from "../../../contexts/useRecipes";
import type { CategoriaOpcao } from "../../../domain/types/Recipe";

import mundo from "../../../assets/svg/mundo.svg";
import brasa from "../../../assets/svg/brasa.svg";
import salad from "../../../assets/svg/salad.svg";
import fish from "../../../assets/svg/fish.svg";
import time from "../../../assets/svg/time-fill.svg";
import brasil from "../../../assets/svg/brasil.svg";

const CATEGORIAS_DATA: CategoriaOpcao[] = [
  { label: 'explorar o mundo', icon: mundo, title: 'Explorar o Mundo' },
  { label: 'Churrasco & Brasa', icon: brasa, title: 'Churrasco & Brasa' },
  { label: 'Plant Based', icon: salad, title: 'Plant Based' },
  { label: 'Mar & Rio', icon: fish, title: 'Mar & Rio' },
  { label: 'Express', icon: time, title: 'Rápidas' },
  { label: 'Raízes do Brasil', icon: brasil, title: 'Raízes do Brasil' },
];

export const CategoryCard = () => {
  const { activeFilter, setActiveFilter } = useRecipes();

  return (
    <nav className="container mx-auto px-4 -mt-16 relative z-30">
      <div className="flex flex-nowrap xl:justify-center gap-4 overflow-x-auto no-scrollbar py-4">
        {CATEGORIAS_DATA.map((item) => {
          const isActive = activeFilter === item.label;

          return (
            <button
              key={item.label}
              onClick={() => setActiveFilter(item.label)}
              className={`
                min-w-[100px] md:min-w-[120px] flex-shrink-0 p-6 rounded-2xl shadow-sm lg:shadow-xl transition-all duration-500
                flex flex-col items-center justify-center gap-4 border-2
                ${isActive 
                  ? "bg-primaria border-primaria text-white xl:-translate-y-1 hover:scale-105" 
                  : "bg-white border-transparent text-gray-500 hover:border-primaria/30 hover:shadow-lg"}
              `}
            >
              <div className="w-10 h-10 flex items-center justify-center">
                <img 
                  src={item.icon} 
                  alt={item.title} 
                  className={`w-full h-full object-contain ${isActive ? "brightness-0 invert" : ""}`} 
                />
              </div>
              
              <span className={`text-[10px] font-black ${isActive ? "text-white" : "text-primaria"}  uppercase tracking-widest text-center`}>
                {item.title}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};