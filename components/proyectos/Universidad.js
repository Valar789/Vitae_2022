import Image from "next/image";
import Link from "next/link";
import React from "react";
import rightArrow from "../../public/icons/right-arrow.png";

const Universidad = () => {
  const proyectosIndividuales = [
    //lista proyectos
    {
      nameProject: "Rest API Django",
      url: "https://bitbucket.org/yohangr4/historiasclinicas/src/master/",
      category: "ejercicio",
    },
    {
      nameProject: "Rest API Django Rest",
      url: "https://bitbucket.org/yohangr4/historiasclinicas/src/master/",
      category: "ejercicio",
    },

    {
      nameProject: "Backend Registraduria",
      url: "https://github.com/MisionTicCiclo4a/API-flask-registraduria",
      category: "ejercicio",
    },

    {
      nameProject: "Backend Seguridad",
      url: "https://github.com/MisionTicCiclo4a/backend-springboot-registraduria",
      category: "ejercicio",
    },

    {
      nameProject: "Api Gateway",
      url: "https://github.com/MisionTicCiclo4a/apigateway_registraduria",
      category: "ejercicio",
    },

    {
      nameProject: "Frontend H-Clinicas ",
      url: "https://bitbucket.org/yohangr4/historiasclinicasfe/src/master/",
      category: "ejercicio",
    },

    {
      nameProject: "Frontend Registraduria",
      url: "https://github.com/MisionTicCiclo4a/frontend_registraduria_nextjs",
      category: "ejercicio",
    },
    {
      nameProject: "Proyecto Microservicios",
      url: "#!",
      category: "ejercicio",
    },
  ];

  return (
    <div className="my-4">
      {proyectosIndividuales.map((project, index) => (
        <div key={index}>
          <div className="flex justify-between justify-items-center font-semibold gap-2">
          <Link href={project.url}>
              <a className="text-teal-600 font-bold" target="_blank">
                {project.nameProject}
              </a>
            </Link>

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

export default Universidad;
