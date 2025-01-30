import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";

export default function SplashScreen() {
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate("/main-home");
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-white text-3xl tracking-tight font-extrabold">
          Welcome To My
        </h1>
        <h1 className="text-3xl mb-5 font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
          Portfolio Website
        </h1>
        <Button
          type="button"
          onClick={handleNavigateHome}
          className="px-9 py-2 backdrop-blur-2xl ring-1 ring-purple-700 bg-white/30 rounded-md cursor-pointer text-white tracking-wide hover:scale-125 hover:transition-transform hover:duration-500"
        >
          Visit Now
        </Button>
      </div>
    </div>
  );
}
