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
      className={`fixed top-0 left-0 right-0 w-full h-20 z-50 transition-all duration-500 ${
        scroll ? "bg-white shadow-lg scale-105 py-5" : "py-6"
      }`}
    >
      <div className="flex justify-between items-center px-6">
        <div>
          <IconBrand alt="icon-nav" width={120} src={iconBrand} />
        </div>

        <nav
          className={`absolute top-24 right-5 border border-neutral-200 h-80 w-[90%] bg-white shadow-lg transform transition-transform duration-300 rounded-lg ${
            isOpen ? "translate-y-0" : "hidden"
          }`}
        >
          <div className="px-8 py-7">
            <ul className="flex flex-col justify-between gap-6 text-neutral-600 font-semibold font-poppins text-lg">
              <li className="cursor-pointer pb-4 border-b border-neutral-200">
                Home
              </li>
              <li className="cursor-pointer pb-4 border-b border-neutral-200">
                About
              </li>
              <li className="cursor-pointer pb-4 border-b border-neutral-200">
                Services
              </li>
              <li className="cursor-pointer pb-4 border-b border-neutral-200">
                Contact
              </li>
            </ul>
          </div>
        </nav>

        <div className="md:hidden">
          {isOpen ? (
            <IoClose
              size={35}
              className="text-black/50 transition-all duration-300"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <IoIosMenu
              size={35}
              className="text-black/50 transition-all duration-300"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>
    </header>
  );
}
