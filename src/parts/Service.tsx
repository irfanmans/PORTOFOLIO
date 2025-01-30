import { IoCodeSlashSharp } from "react-icons/io5";
import { GiAchievement } from "react-icons/gi";
import { RiStackLine } from "react-icons/ri";
import Button from "../ui/Button";
import Card from "../ui/Card";
import { useState } from "react";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import Certificate from "../components/Certificate";

export default function Service() {
  const [selectService, setSelectService] = useState<React.ReactNode>(
    <TechStack />
  );

  const handleService = (component: React.ReactNode) => {
    setSelectService(component);
  };

  return (
    <div className="pt-30">
      <div className=" text-white/80 pb-10">
        <h1 className="text-3xl font-bold ">Informasi Saya</h1>
        <p className="mt-5">
          Hal hal penting dalam technologi yang saya gunakan, project yang saya
          kerjakan dan sertifikat yang telah saya dapatkan
        </p>
      </div>
      <div className="flex justify-between text-white/80 backdrop-blur-sm bg-black/20 py-2 px-2 rounded-2xl mb-10">
        <Button
          className={`flex flex-col items-center gap-2 hover:bg-purple-400 py-2 px-3 rounded-xl`}
          onClick={() => handleService(<TechStack />)}
        >
          <RiStackLine size={20} />
          <span className="text-md">Tech Stack</span>
        </Button>
        <Button
          className="flex flex-col items-center gap-2 hover:bg-purple-400 py-2 px-3 rounded-xl"
          onClick={() => handleService(<Projects />)}
        >
          <IoCodeSlashSharp size={20} />
          <span className="text-md">Projects</span>
        </Button>
        <Button
          className="flex flex-col items-center gap-2 hover:bg-purple-400 py-2 px-3 rounded-xl"
          onClick={() => handleService(<Certificate />)}
        >
          <GiAchievement size={20} />
          <span className="text-md">Certificates</span>
        </Button>
      </div>
      <Card>{selectService}</Card>
    </div>
  );
}
