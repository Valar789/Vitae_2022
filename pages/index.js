import Skills_EstudioSeccion from "../components/Skills_EstudioSeccion";
import Header from "../components/Header";
import Proyectos from "../components/Proyectos";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <Skills_EstudioSeccion />
      <Proyectos />
    </div>
  );
}
