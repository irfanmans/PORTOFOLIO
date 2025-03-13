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
  const [active, setActive] = useState<string>("TechStack");

  const handleService = (component: React.ReactNode, serviceName: string) => {
    setSelectService(component);
    setActive(serviceName);
  };

  return (
    <div className="mt-20">
      <div className="text-gray-700 text-start mb-10">
        <h1 className="text-2xl font-bold ">Informasi Saya</h1>
        <p className="mt-5 tracking-wide">
          Hal-hal penting dalam teknologi yang saya gunakan, proyek yang saya
          kerjakan, dan sertifikat yang telah saya dapatkan.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-2 text-white backdrop-blur-sm bg-black/20 py-2 px-2 rounded-2xl mb-10">
        <Button
          className={`flex flex-col items-center gap-2 py-2 px-3 rounded-xl transition-all ${
            active === "TechStack" ? "bg-purple-600" : "hover:bg-purple-600"
          }`}
          onClick={() => handleService(<TechStack />, "TechStack")}
        >
          <RiStackLine size={20} />
          <span className="text-md">Tech Stack</span>
        </Button>

        <Button
          className={`flex flex-col items-center gap-2 py-2 px-3 rounded-xl transition-all ${
            active === "Projects" ? "bg-purple-600" : "hover:bg-purple-600"
          }`}
          onClick={() => handleService(<Projects />, "Projects")}
        >
          <IoCodeSlashSharp size={20} />
          <span className="text-md">Projects</span>
        </Button>

        <Button
          className={`flex flex-col items-center gap-2 py-2 px-3 rounded-xl transition-all ${
            active === "Certificates" ? "bg-purple-600" : "hover:bg-purple-600"
          }`}
          onClick={() => handleService(<Certificate />, "Certificates")}
        >
          <GiAchievement size={20} />
          <span className="text-md">Certificates</span>
        </Button>
      </div>

      <Card>{selectService}</Card>
    </div>
  );
}
