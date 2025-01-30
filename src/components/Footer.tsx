import IconBrand from "../ui/IconBrand";
import footerImage from "../assets/images/iconbrand.png";
import { FaGithub, FaLinkedinIn, FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import IconSosialMedia from "../ui/IconSosialMedia";

export default function Footer() {
  return (
    <footer className="mt-30 px-6 py-10 bg-[#152C5B]">
      <div>
        <IconBrand src={footerImage} alt="footer-image" width={170} />
        <p className="text-white/80 text-md mt-3 mb-8">
          Personal Website cara untuk memperkenalkan diri, khususnya pengetahuan
          dan achievement yang telah didapatkan
        </p>
        <span className="flex items-center gap-3 text-lg text-white/80">
          <FaLocationDot size={23} /> Medan, Sumatera Utara
        </span>
        <span className="flex items-center gap-3 text-lg text-white/80 mt-3">
          <BsFillTelephoneFill size={23} /> +62 813-9662-0900
        </span>
      </div>
      <div className="flex mt-7 gap-3">
        <IconSosialMedia className="py-3 px-2 w-10 rounded-lg text-[#295378] bg-yellow-400">
          <FaLinkedinIn className="mx-auto" />
        </IconSosialMedia>
        <IconSosialMedia className="py-3 px-2 w-10 rounded-lg text-[#295378] bg-yellow-400">
          <FaGithub className="mx-auto" />
        </IconSosialMedia>
      </div>
      <hr className="border-t-2 border-gray-300 my-10" />
      <div>
        <p className="text-white/80">
          &copy; 2025 Personal Website | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
