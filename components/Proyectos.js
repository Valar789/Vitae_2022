
import Individuales from "./proyectos/Individuales";
import Universidad from "./proyectos/Universidad";

export default function Proyectos() {
  return (
    <section className="  dark:text-gray-800">
      <div className="py-7 bg-white  max-w-5xl mx-auto">
        <div className="container p-4 mx-auto  lg:px-16 space-y-1 text-center">
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
        <div className=" m-auto grid sm:grid-cols-12">
          <div className="w-full h-full m-auto p-4 mx-auto sm:col-span-6">

            <h2 className=" my-4 text-lg text-center font-bold sm:text-xl title-font dark:text-gray-700">
              Practicas
            </h2>
            <div className="flex justify-center">
            <Individuales />
            </div>
          </div>
          <div className="w-full h-full   mx-auto sm:col-span-6">
            <h2 className="mx-auto my-4 text-center text-lg font-bold sm:text-xl title-font dark:text-gray-700">
              Universidad
            </h2>
            <div className="flex justify-center">
            <Universidad />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
