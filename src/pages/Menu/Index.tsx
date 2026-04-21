import React from "react";
import bgImage from "../../assets/img/topHeroMenu.jpg";

const Index = () => {
  return (
    <>
      <section
        aria-label="top-hero-menu"
        className="absolute top-0 left-0 w-full h-auto overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/20 z-10"></div>
          <img
            src={bgImage}
            alt=""
            className="w-full object-center object-cover h-auto"
          />
      </section>

      <section
      aria-label="quick-filter"
      className="container mx-auto p-4 sm:p-0"
      >

      </section>
    </>
  );
};

export default Index;
