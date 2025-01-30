import { useEffect, useState } from "react";
import IconBrand from "../ui/IconBrand";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import iconBrand from "../assets/images/iconbrand.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scroll, setScroll] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ${
        scroll
          ? "bg-blue-400 drop-shadow-lg scale-105 py-3"
          : "bg-blue-400 py-3"
      }`}
    >
      <div className="flex justify-between items-center px-6">
        <div>
          <IconBrand alt="icon-nav" width={120} src={iconBrand} />
        </div>

        <nav
          className={`absolute top-17 right-0 h-96 w-full bg-blue-400 transform transition-transform duration-300 rounded-b-2xl ${
            isOpen ? "translate-y-0" : "hidden"
          }`}
        >
          <div className="px-8 pt-5">
            <ul className="flex flex-col justify-between gap-6 pb-5 text-white text-lg">
              <li className="cursor-pointer border-b-1 border-[#152C5B] pb-5">
                Home
              </li>
              <li className="cursor-pointer border-b-1 border-[#152C5B] pb-5">
                About
              </li>
              <li className="cursor-pointer border-b-1 border-[#152C5B] pb-5">
                Services
              </li>
              <li className="cursor-pointer border-b-1 border-[#152C5B] pb-5">
                Contact
              </li>
            </ul>
          </div>
        </nav>

        <div className="md:hidden">
          {isOpen ? (
            <IoClose
              size={35}
              className="text-white transition-all duration-300"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <IoIosMenu
              size={35}
              className="text-white transition-all duration-300"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>
    </header>
  );
}
