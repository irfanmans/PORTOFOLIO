import PartOfEducation from "../components/PartOfEducation";
import Button from "../ui/Button";
import Dot from "../ui/Dot";
import { IoSchool } from "react-icons/io5";

export default function Education() {
  return (
    <>
      <div className="pt-20">
        <div className="flex gap-4 justify-center">
          <Button className="border border-neutral-200 font-medium rounded-md px-3 py-2">
            Pendidikan
          </Button>
          <Button className="border border-neutral-200 font-medium rounded-md px-3 py-2">
            Pekerjaan
          </Button>
        </div>

        <div className="border-l-[6px] border-red-500 relative py-7 mt-10">
          <PartOfEducation>
            <div className="absolute left-[-15px]">
              <Dot />
            </div>
            <div
              className="ml-5 border border-neutral-300 p-5 rounded-lg"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <h1 className="font-bold text-md text-black/80 flex items-center gap-2">
                <IoSchool />
                SD Negeri 064037 Medan
              </h1>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                convallis.
              </p>
            </div>
          </PartOfEducation>

          <PartOfEducation>
            <div className="absolute left-[-15px]">
              <Dot />
            </div>
            <div className="ml-5 border border-neutral-300 p-5 rounded-lg">
              <h1 className="font-bold text-md text-black/80 flex items-center gap-2">
                <IoSchool />
                SMP Negeri 17 Medan
              </h1>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                convallis.
              </p>
            </div>
          </PartOfEducation>

          <PartOfEducation>
            <div className="absolute left-[-15px]">
              <Dot />
            </div>
            <div className="ml-5 border border-neutral-300 p-5 rounded-lg">
              <h1 className="font-bold text-md text-black/80 flex items-center gap-2">
                <IoSchool />
                SMK Tritech Informatika Medan
              </h1>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                convallis.
              </p>
            </div>
          </PartOfEducation>

          <PartOfEducation>
            <div className="absolute left-[-15px]">
              <Dot />
            </div>
            <div className="ml-5 border border-neutral-300 p-5 rounded-lg">
              <h1 className="font-bold text-md text-black/80 flex items-center gap-2">
                <IoSchool />
                Universitas Mikroskil Medan
              </h1>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                convallis.
              </p>
            </div>
          </PartOfEducation>
        </div>
      </div>
    </>
  );
}
