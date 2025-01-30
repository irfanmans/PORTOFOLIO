import { techStack } from "../data/techStack";
import IconBrand from "../ui/IconBrand";

export default function TechStack() {
  return (
    <ul className="grid grid-cols-2 gap-3">
      {techStack.map((element, index) => {
        return (
          <li
            key={index}
            className="w-38 h-38 flex flex-col justify-center pt-5 items-center bg-black/30 rounded-2xl"
          >
            <IconBrand
              src={element.logo}
              width={80}
              height={80}
              alt={element.name}
            />
            <p className="pt-3 text-center text-white">{element.name}</p>
          </li>
        );
      })}
    </ul>
  );
}
