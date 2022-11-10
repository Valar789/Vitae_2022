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
      github: "https://github.com/Valar789/soluciones_informaticas",

    },
    {
      nameProject: "Kota Arq",
      url: "https://kota-ten.vercel.app",
      github: "https://github.com/Valar789/kota_arquitectura",

    },
    {
      nameProject: "MirandaPC",
      url: "https://mirandapc.vercel.app",
      github: "https://github.com/Valar789/miranda_pc",

    },
    {
      nameProject: "E-commerce",
      url: "https://e-commerce-nextjs-tailwind-mongo.vercel.app",
      github: "https://github.com/Valar789/e_commerce_nextjs_tailwind_mongo",

    },
    {
      nameProject: "Crud Task",
      url: "https://github.com/Valar789/crud_typescript_postgres",
      github: "https://github.com/Valar789/crud_typescript_postgres",

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
              <Link href={project.github}>
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
