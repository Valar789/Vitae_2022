import Photo from "./Photo";
import phone from "../public/icons/phone.png";
import email from "../public/icons/email.png";
import github from "../public/icons/github.png";
import Image from "next/image";
import Link from "next/link";
import nextjs from "../public/icons/nextjs.png";
import reactjs from "../public/icons/reactjs.png";
import nodejs from "../public/icons/nodejs.png";

export default function Header() {
  return (
    <section className="text-white">
      <div className="text-gray-800 bg-white max-w-5xl px-4 py-16 mx-auto shadow-xl">
        <div className="grid gap-4 mx-4 grid-cols-12 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-4">
            <div className="text-center sm:text-left mb-14">
              <Photo />
              <div className="flex pt-5 flex-col sm:relative  ">
                <h3 className="text-xl text-teal-600 mb-2 font-semibold tracking-wide">
                  Contacto
                </h3>

                <p className="inLeft1 flex gap-2 mt-2">
                  <Image className="" src={phone} alt="icon" />
                  305 273 8798
                </p>
                <p className="inLeft2 flex gap-2 mt-2">
                  <Image className="" src={email} alt="icon" />
                  luismzo789@gmail.com
                </p>
                <div className="inLeft3 flex gap-2  mt-2">
                  <Image src={github} alt="icon" />
                  <Link
                    href="https://github.com/Valar789"
                    className="flex gap-2 mt-2"
                  >
                    <a>Github</a>
                  </Link>
                </div>

                <a
                  href="https://drive.google.com/uc?id=1dYcaYIhMJoeMgTJTTD-XMVmhO54a_3pI&export=download&authuser=0"
                  className="inUp p-2  rounded-md text-center text-white bg-gradient-to-r from-teal-600 via-teal-800 to-teal-900 hover:bg-gradient-to-br hover:text-white focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:rin/feed/libraryg-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 mt-5"
                >
                  Descargar Vitae en PDF
                </a>
              </div>
            </div>
          </div>
          <div className="relative col-span-12 px-4 space-y-3 sm:col-span-8">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-zinc-200">
              <div className="flex flex-col sm:relative  ">
                <h1 className="fadeIn2 text-4xl sm:text-6xl text-slate-900 font-semibold uppercase tracking-wide ">
                  Luis Miguel Zuleta Orozco
                </h1>
                <time className="fadeIn5 text-xl pt-5 tracking-wide  font-semibold dark:text-gray-500">
                  Desarrollador Web
                </time>
              </div>
              <div className="fadeIn5 flex flex-col sm:relative  ">
                <h3 className="text-xl text-teal-600 font-semibold tracking-wide">
                  Sobre mi
                </h3>

                <p className="mt-3 mb-3">
                Soy un apasionado y dedicado desarrollador full stack con amplia experiencia en el uso de tecnolog??as como JavaScript, TypeScript, Python, Node.js, Express.js, React.js y Next.js. Con mi amplio conocimiento y habilidades en estas tecnolog??as, soy capaz de trabajar en todos los aspectos de una aplicaci??n o sitio web, desde el dise??o y la estructura hasta la implementaci??n y el mantenimiento. Adem??s, soy una persona altamente colaborativa y siempre estoy dispuesto a ayudar a mis compa??eros de trabajo y a aprender de ellos. Si est??s buscando un desarrollador full stack confiable y comprometido, no dudes en considerarme para tu pr??ximo proyecto.
                </p>
        
              </div>
              <div className="inUp grid sm:grid-cols-3 gap-2">
                  <Image className=" object-contain  " src={nextjs} alt="Nextjs" />
                  <Image className=" object-contain  "  src={reactjs} alt="reactjs" />
                  <Image className=" object-contain  "  src={nodejs} alt="nodejs" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
