import React from "react";
import { Link } from "react-router-dom";
import Button from "../../ui/Button/Button";

import Logo from "../../../assets/svg/FOOD-TODAY.svg";
import Login from "../../../assets/svg/login.svg";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="container relative mx-auto flex h-[90px] lg:h-[110px] items-center justify-around bg-transparent z-50">
      <Link to="/">
        <img
          src={Logo}
          alt="Logo escrito FOOD TODAY"
          className="w-[140px] h-auto sm:w-2xs "
        />
      </Link>

      <nav className="hidden lg:flex py-4 px-6 bg-creme rounded-2xl border-2 border-primaria gap-16 text-primaria text-lg font-medium">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/contact">Contato</Link>
      </nav>

      <div className="hidden lg:block w-44">
        <Button variant="primary" icon={<img src={Login} />}>
          Login
        </Button>
      </div>

      {/* Mobile */}
      <button
        className="lg:hidden flex flex-col gap-1.5 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`h-1 w-8 bg-primaria rounded-full transition-all ${isOpen ? "rotate-45 translate-y-2.5" : ""}`}
        ></span>
        <span
          className={`h-1 w-8 bg-primaria rounded-full transition-all ${isOpen ? "opacity-0" : ""}`}
        ></span>
        <span
          className={`h-1 w-8 bg-primaria rounded-full transition-all ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`}
        ></span>
      </button>

      {/* Menu Mobile */}
      <nav
        className={`
    fixed inset-0 z-40 flex flex-col items-center justify-center gap-8
    text-primaria text-2xl font-bold
    transition-transform duration-300
    bg-escuro/5 backdrop-blur-md border-l border-white/20
    overflow-hidden overscroll-none touch-none
    ${isOpen ? "translate-x-0" : "translate-x-full"} lg:hidden
  `}
      >
        <Link to="/" onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <Link to="/menu" onClick={() => setIsOpen(false)}>
          Menu
        </Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>
          Contato
        </Link>
        <div className="w-44 mt-4">
          <Button variant="primary" icon={<img src={Login} alt="" />}>
            Login
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
