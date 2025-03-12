import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import About from "../parts/About";
import Education from "../parts/Education";
import Hero from "../parts/Hero";
import Service from "../parts/Service";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main className="px-6 font-poppins">
        <section>
          <Hero />
        </section>
        <section>
          <About />
        </section>
        <section>
          <Education />
        </section>
        <section>
          <Service />
        </section>
      </main>
      <Footer />
    </>
  );
}
