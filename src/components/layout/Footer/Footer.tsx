import insta from "../../../assets/svg/instagram.svg";
import face from "../../../assets/svg/facebook.svg";
import linkedin from "../../../assets/svg/linkedin.svg";
import logo from "../../../assets/svg/FOOD-TODAY.svg"

const Footer = () => {
  return (
    <footer className="overflow-hidden">
      <div className="flex items-center justify-center gap-5 px-10 py-8">
        <div className="flex-1 h-[2px] bg-primaria" />
        <div className="flex gap-4">
          {[insta, face, linkedin].map((icon, i) => (
            <div
              key={i}
              className="transition-all hover:-translate-y-1 cursor-pointer"
            >
              <img src={icon} />
            </div>
          ))}
        </div>
        <div className="flex-1 h-[2px] bg-primaria" />
      </div>

      <div className="relative w-full flex justify-center">
        <div
          className="relative flex flex-col items-center justify-end pb-8 h-[340px] sm:h-[320px] lg:h-[520px] bg-secundaria w-full"
          style={{
            borderRadius: "50% 50% 0 0 / 100% 100% 0 0",
          }}
        >
          <img src={logo} alt="FOOD TODAY" className="w-[80%] h-auto mb-12"/>

          {/* Créditos */}
          <p
            className="text-white text-lg text-center"
          >
            Murilo Ayabe Severino - RM567479
          </p>

          <p
            className="text-white text-lg text-center"
          >
            Paulo Cavalcante Caroba - RM566667
          </p>

          <p
            className="text-white text-lg text-center"
          >
            Renan da Silva Paulino - RM566610
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;