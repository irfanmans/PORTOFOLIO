import PartOfEducation from "../components/PartOfEducation";
import Button from "../ui/Button";
import Dot from "../ui/Dot";
import { IoSchool } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";

export default function Education() {
  const [active, setActive] = useState(1);
  return (
    <>
      <div className="pt-20">
        <div className="flex gap-4 justify-center">
          <Button
            className={`border border-neutral-200 font-medium rounded-md px-3 py-2 ${
              active === 1 ? "bg-sky-500 text-white" : ""
            }`}
            onClick={() => setActive(1)}
          >
            Pendidikan
          </Button>
          <Button
            className={`border border-neutral-200 font-medium rounded-md px-3 py-2 ${
              active === 2 ? "bg-sky-500 text-white" : ""
            }`}
            onClick={() => setActive(2)}
          >
            Pekerjaan
          </Button>
        </div>

        {active === 1 && (
          <div className="border-l-[6px] border-red-500 relative py-7 mt-10">
            <PartOfEducation>
              <div className="absolute left-[-15px]">
                <Dot />
              </div>
              <div className="ml-5 border flex flex-col border-neutral-300 px-3 py-5 rounded-lg">
                <h1 className="font-bold text-[16px] text-black/80 flex items-center gap-2">
                  <IoSchool className="text-blue-500" size={18} />
                  SD Negeri 064037
                </h1>
                <p className="text-gray-400 text-[13px] flex gap-2 mb-3">
                  <FaLocationDot className="text-orange-500" size={18} />
                  Medan, Sumatera Utara
                </p>
                <p className="text-gray-400 text-[14px] flex items-start gap-2 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                  delectus.
                </p>
              </div>
            </PartOfEducation>

            <PartOfEducation>
              <div className="absolute left-[-16px]">
                <Dot />
              </div>
              <div className="ml-5 border border-neutral-300 px-3 py-5 rounded-lg">
                <h1 className="font-bold text-[15px] text-black/80 flex items-center gap-2">
                  <IoSchool className="text-blue-500" size={18} />
                  SMP Negeri 17
                </h1>
                <p className="text-gray-400 text-[13px] flex items-center gap-2 mb-3">
                  <FaLocationDot className="text-orange-500" size={18} />
                  Medan, Sumatera Utara
                </p>
                <p className="text-gray-400 text-[14px] flex items-start gap-2 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                  delectus.
                </p>
              </div>
            </PartOfEducation>

            <PartOfEducation>
              <div className="absolute left-[-16px]">
                <Dot />
              </div>
              <div className="ml-5 border border-neutral-300 px-3 py-5 rounded-lg">
                <h1 className="font-bold text-[15px] text-black/80 flex items-center gap-2">
                  <IoSchool className="text-blue-500" size={18} />
                  SMK Tritech Informatika
                </h1>
                <p className="text-gray-400 text-[13px] flex items-center gap-2 mb-3">
                  <FaLocationDot className="text-orange-500" size={18} />
                  Medan, Sumatera Utara
                </p>
                <p className="text-gray-400 text-[14px] flex items-start gap-2 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                  delectus.
                </p>
              </div>
            </PartOfEducation>

            <PartOfEducation>
              <div className="absolute left-[-16px]">
                <Dot />
              </div>
              <div className="ml-5 border border-neutral-300 px-3 py-5 rounded-lg">
                <h1 className="font-bold text-[15px] text-black/80 flex items-center gap-2">
                  <IoSchool className="text-blue-500" size={18} />
                  Universitas Mikroskil
                </h1>
                <p className="text-gray-400 text-[13px] flex items-center gap-2 mb-3">
                  <FaLocationDot className="text-orange-500" size={18} />
                  Medan, Sumatera Utara
                </p>
                <p className="text-gray-400 text-[14px] flex items-start gap-2 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                  delectus.
                </p>
              </div>
            </PartOfEducation>
          </div>
        )}

        {active === 2 && (
          <div className="border-l-[6px] border-red-500 relative py-7 mt-10">
            <PartOfEducation>
              <div className="absolute left-[-15px]">
                <Dot />
              </div>
              <div className="ml-5 border flex flex-col border-neutral-300 px-3 py-5 rounded-lg">
                <h1 className="font-bold text-[16px] text-black/80 flex items-center gap-2">
                  <IoSchool className="text-blue-500" size={18} />
                  WebMaxindo
                </h1>
                <p className="text-gray-400 text-[13px] flex gap-2 mb-3">
                  <FaLocationDot className="text-orange-500" size={18} />
                  Sunggal, Sumatera Utara
                </p>
                <p className="text-gray-400 text-[14px] flex items-start gap-2">
                  {/* <MdSpeakerNotes className="text-purple-500" size={150} /> */}
                  Webmaxindo adalah sebuah perusahaan teknologi informasi yang
                  berfokus pada pengembangan aplikasi web, mobile dan konsultan
                  IT. Hanya berfokus pada pengembangan website, layanan web
                  hosting, registrasi domain, dan layanan terkait lainnya. namun
                  seiring berjalannya waktu, perusahaan ini mulai berekspansi ke
                  pengembangan aplikasi web, mobile dan konsultan IT
                </p>
              </div>
            </PartOfEducation>
          </div>
        )}
      </div>
    </>
  );
}
