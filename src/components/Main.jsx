import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import About from "./About";
import Pendidikan from "./Pendidikan";
import Skill from "./Skill";
import Footer from "./Footer";

export default function Main() {
  return (
    <>
      <div className="container mx-auto">
        <Navbar />
        <section id="home" className="grid justify-items-center">
          <Jumbotron></Jumbotron>
        </section>
        <section id="about" className="center py-24">
          <About></About>
        </section>
        <section id="pendidikan" className="mb-10">
          <Pendidikan></Pendidikan>
        </section>
        <section id="kemampuan">
          <Skill></Skill>
        </section>
      </div>
      <Footer></Footer>
    </>
  );
}
