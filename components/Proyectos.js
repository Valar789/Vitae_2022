import Link from "next/link";
import Individuales from "./proyectos/Individuales";
import Universidad from "./proyectos/Universidad";

export default function Proyectos() {
  return (
    <section className="  dark:text-gray-800">
      <div className="py-7 bg-white  max-w-5xl px-4 mx-auto">
        <div className="container p-4 mx-auto   space-y-1 text-center">
          <h2 className="pb-4 text-2xl font-bold md:text-4xl">
            Proyectos como Desarrollador Web
          </h2>
          <p>
            Durante mi proceso de aprendizaje he realizado diversos proyectos en
            equipos e individuales, he colaborado con personas de gran capacidad
            resolutiva y diverso conocimiento en las diferentes áreas de las
            cuales he aprendido mucho.
          </p>
        </div>
        <div className="mx-auto grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          <div className="flex flex-col mx-auto">
            <h2 className="mx-auto my-4 text-lg font-bold sm:text-xl title-font dark:text-gray-700">
              Propios
            </h2>

            <Individuales />
          </div>
          <div className="flex flex-col mx-auto">
            <h2 className="mx-auto my-4  text-lg font-bold sm:text-xl title-font dark:text-gray-700">
              Universidad
            </h2>
            <Universidad />
          </div>
        </div>
      </div>
    </section>
  );
}
