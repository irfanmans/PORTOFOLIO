import LandingPage from "./pages/LandingPage";
import SplashScreen from "./parts/SplashScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<SplashScreen />} />
          <Route path="main-home" element={<LandingPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
