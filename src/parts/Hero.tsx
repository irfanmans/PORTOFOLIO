import { useTypewriter } from "react-simple-typewriter";
import StackGroup from "../ui/StackGroup";
import IconBrand from "../ui/IconBrand";
import imageBrand from "../assets/svg/hero-icon.svg";

export default function Hero() {
  const [typeEffect] = useTypewriter({
    words: ["Universitas Mikroskil", "Teknik Informatika"],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 80,
  });

  return (
    <>
      <div className="pt-40">
        <div>
          <span className="py-1 px-4 ring-1 ring-black/30 rounded-lg text-white/75">
            Hi, There
          </span>
          <h1 className="text-5xl font-bold mt-3 text-white">
            Front End <br />{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Developer
            </span>
          </h1>
          <p className="mt-3 text-md text-white/75">Present {typeEffect}</p>
          <p className="text-white/75 text-md mt-3">
            Menciptakan Website Yang Inovatif, Fungsional, dan User-Friendly
            Untuk Solusi Digital
          </p>

          <div className="flex flex-wrap justify-between gap-3 mt-4">
            <StackGroup>Javascript</StackGroup>
            <StackGroup>React Js</StackGroup>
            <StackGroup>Next Js</StackGroup>
            <StackGroup>Typescript</StackGroup>
            <StackGroup>Redux</StackGroup>
            <StackGroup>Tailwind</StackGroup>
          </div>
        </div>

        <div className="mt-10 flex justify-center items-center">
          <IconBrand width={290} src={imageBrand} alt="hero-image" />
        </div>
      </div>
    </>
  );
}
