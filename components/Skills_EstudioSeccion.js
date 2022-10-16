import Estudios from "./Estudios";
import Skills from "./Skills";
import OtrasTecnologias from "./skills/OtrasTecnologias";

export default function Skills_EstudioSeccion() {
  return (
    <section className="   dark:text-gray-800">
      <div className="container py-10 bg-white max-w-5xl px-4 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="col-span-12 pb-7 sm:col-span-3">
            <div className="text-center sm:text-left ">
              <h3 className="text-3xl font-semibold">Skills</h3>
              <Skills />
              <OtrasTecnologias />
            </div>
          </div>
          <Estudios />
        </div>
      </div>
    </section>
  );
}
