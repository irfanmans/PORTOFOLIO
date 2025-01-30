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
        scroll ? "bg-blue-400 shadow-2xl scale-105" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center py-4 px-6">
        <div>
          <IconBrand alt="icon-nav" width={130} src={iconBrand} />
        </div>

        <nav
          className={`absolute top-25 right-5 rounded-lg h-96 w-[90%] backdrop-blur-sm bg-blue-400 transform transition-transform duration-300  ${
            isOpen ? "translate-y-0 " : "hidden"
          }`}
        >
          <div className="p-10">
            <ul className="flex flex-col justify-between gap-15 text-white text-lg">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">Services</li>
              <li className="cursor-pointer">Contact</li>
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
