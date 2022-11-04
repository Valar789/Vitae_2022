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
      type: "Nextjs",
    },
    {
      nameProject: "Kota Arquitectura",
      url: "https://kota-ten.vercel.app",
      github: "",
      type: "Nextjs",
    },
    {
      nameProject: "MirandaPC",
      url: "https://mirandapc.vercel.app",
      github: "",
      type: "Nextjs",
    },
    {
      nameProject: "E-commerce",
      url: "https://e-commerce-nextjs-tailwind-mongo.vercel.app",
      github: "",
      type: "Nextjs",
    },
  ];

  return (
    <div className="my-4">
      {proyectosIndividuales.map((project, index) => (
        <div key={index}>
          <div className="flex justify-between justify-items-center font-semibold gap-3">
            <div className="flex gap-1">
              <Link href={project.url}>
              <a className="text-teal-600 font-bold" target="_blank">
                {project.nameProject}
              </a>
            </Link>
            {project.type && <div>({project.type})</div>}
            </div>


            <div className="gap-2 flex flex-wrap">
              <Image src={rightArrow} alt="" />

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
