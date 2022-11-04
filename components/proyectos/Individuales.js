import Link from "next/link";
import React from "react";
import Image from "next/image";
import rightArrow from "../../public/icons/right-arrow.png";

const Individuales = () => {
  const proyectosIndividuales = [
    //lista proyectos
    {
      nameProject: "LocalHost",
      url: "https://localhostweb.vercel.app",
      category: "demo",
    },
    {
      nameProject: "Kota Arquitectura",
      url: "https://kota-ten.vercel.app",
      category: "demo",
    },
    {
      nameProject: "MirandaPC",
      url: "https://mirandapc.vercel.app",
      category: "demo",
    },
    {
      nameProject: "E-commerce",
      url: "https://e-commerce-nextjs-tailwind-mongo.vercel.app",
      category: "demmo",
      exercise: true,
    },
  ];

  return (
    <div className="my-4">
      {proyectosIndividuales.map((project, index) => (
        <div key={index}>
          <div className="flex justify-between justify-items-center font-semibold gap-2">

            {project.nameProject}
            {project.exercise === true && <div className="text-red-700">(ejercicio)</div>}

            <div className="gap-2 flex ">
              <Image src={rightArrow} alt="" />
              <Link href={project.url}>
                <a className="text-blue-900 font-bold" target="_blank">
                  Demo {"-"}
                </a>
              </Link>
              <Link href={project.url}>
                <a className="text-slate-900 font-bold " target="_blank">
                  Codigo
                </a>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Individuales;
