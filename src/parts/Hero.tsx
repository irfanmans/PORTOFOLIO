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
        <p className="text-gray-700 text-center border border-neutral-200 rounded-lg w-1/2 mx-auto">
          Hi, There
        </p>
        <h1 className="text-5xl font-bold text-center mt-4 text-gray-700">
          Front End <br />{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            Developer
          </span>
        </h1>
        <p className="mt-3 text-xl font-bold text-center text-gray-700">
          Present {typeEffect}
        </p>
        <p className="text-gray-700 text-lg text-center font-medium mt-2">
          Menciptakan Website Yang Inovatif, Fungsional, dan User-Friendly Untuk
          Solusi Digital
        </p>

        <div className="grid grid-cols-2 gap-3 mt-4">
          <StackGroup>Javascript</StackGroup>
          <StackGroup>React Js</StackGroup>
          <StackGroup>Next Js</StackGroup>
          <StackGroup>Typescript</StackGroup>
          <StackGroup>Redux</StackGroup>
          <StackGroup>Tailwind</StackGroup>
        </div>

        <div className="mt-10 flex justify-center items-center">
          <IconBrand width={290} src={imageBrand} alt="hero-image" />
        </div>
      </div>
    </>
  );
}
