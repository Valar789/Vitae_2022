import Link from "next/link";

export default function About() {
  return (
    <section className="  dark:text-gray-800">
      <div className="container py-7 bg-white  max-w-5xl px-4 mx-auto">
        <div className="container p-4 mx-auto   space-y-1 text-center">
          <h2 className="pb-3 text-2xl font-bold md:text-4xl">
            Proyectos como Desarrollador Web
          </h2>
          <p>
            Durante mi proceso de aprendizaje he realizado diversos proyectos en
            equipos e indiviuales, he colaborado con personas de gran capacidad
            resolutiva y diversos conocimiento en las diferentes areas de las
            cuales he aprendido mucho.
          </p>
        </div>
        <div className="container justify-center gap-4 mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          <div className="flex flex-col px-6 py-6">
            <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font dark:text-gray-700">
              Individuales
            </h2>

            <li>
              <Link href="https://kota-ten.vercel.app">
                <a target="_blank">Kota Arquitectura</a>
              </Link>
            </li>
            <li>
              <Link href="https://mirandapc.vercel.app">
                <a target="_blank">MirandaPC</a>
              </Link>
            </li>
            <li>Butifarra</li>
            <li>Blog Django</li>
            <li>Butifarra</li>
            <li>Frontend React</li>
            <li>Frontend Nextjs</li>
          </div>
          <div className="flex flex-col px-6 py-6">
            <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font dark:text-gray-700">
              UNAL
            </h2>

            <li>Rest API Django</li>
            <li>Rest API Django Rest</li>
            <li>Backend Flask</li>
            <li>Backend Java</li>
            <li>Api Gateway</li>
            <li>Frontend React</li>
            <li>Frontend Nextjs</li>
            <p>Proyecto Microservicios</p>
          </div>
          <div className="flex flex-col px-6 py-6 lg:border-none xl:border-solid">
            <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font dark:text-gray-700">
              GitHub
            </h2>
            <li>
              <Link href="https://kota-ten.vercel.app">
                <a target="_blank">Kota Arquitectura</a>
              </Link>
            </li>
            <li>
              <Link href="https://mirandapc.vercel.app">
                <a target="_blank">MirandaPC</a>
              </Link>
            </li>
            <li>Blog Django</li>
            <li>Backend Java</li>
            <li>Frontend React</li>
            <li>Frontend Nextjs</li>
            <li>Historias Clinicas Unal</li>
            <li>Registraduria Microservicios</li>
          </div>
        </div>
      </div>
    </section>
  );
}
