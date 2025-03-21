import { projects } from "../data/projects";
import Button from "../ui/Button";
import IconBrand from "../ui/IconBrand";

export default function Projects() {
  return (
    <ul className="flex justify-between flex-wrap items-center gap-5">
      {projects.map((element, index) => {
        return (
          <li className="bg-black/25 rounded-lg">
            <IconBrand
              key={index}
              src={element.logo}
              width={400}
              alt={element.name}
              className="hover:scale-114 cursor-pointer rounded-lg transform transition-all duration-500"
            />
            <div className="px-2 pb-3">
              <p className="text-white/80 pt-5 text-lg"> {element.name}</p>
              <p className="text-white/80 pt-3 text-sm font-light">
                {element.tanggal}
              </p>
              <Button className="py-2 px-4 mt-5 ring-1 ring-amber-300 text-white hover:bg-yellow-300 transition-all duration-200 w-full font-semibold rounded-lg">
                Detail
              </Button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
