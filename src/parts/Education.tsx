import PartOfEducation from "../components/PartOfEducation";
import Button from "../ui/Button";
import Dot from "../ui/Dot";

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
            <div className="ml-5 border border-neutral-300 p-2 rounded-lg">
              <h1 className="font-bold text-lg text-black/80">
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
            <div className="ml-5 border border-neutral-300 p-2 rounded-lg">
              <h1 className="font-bold text-lg text-black/80">
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
            <div className="ml-5 border border-neutral-300 p-2 rounded-lg">
              <h1 className="font-bold text-lg text-black/80">
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
            <div className="ml-5 border border-neutral-300 p-2 rounded-lg">
              <h1 className="font-bold text-lg text-black/80">
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
