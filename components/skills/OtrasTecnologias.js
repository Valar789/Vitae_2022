/* It returns a list of otrasTecnologias  */

import {styleGradient } from "../../styles/primaryColor";

export default function OtrasTecnologias() {


  const OtrasTecnologias = [
    {
      name: "HTML",
      css: `${styleGradient} h-4 w-6/6`,
    },
    {
      name: "CSS",
      css: `${styleGradient} h-4 w-6/6`,
    },
    {
      name: "Tailwind CSS",
      css: `${styleGradient} h-4 w-6/6`,
    },
    {
      name: "BOOTSTRAP",
      css: `${styleGradient} h-4 w-5/6`,
    },
    {
      name: "SQL",
      css: `${styleGradient} h-4 w-3/6`,
    },
    {
      name: "GIT",
      css: `${styleGradient} h-4 w-4/6`,
    },
    {
      name: "MONGODB",
      css: `${styleGradient} h-4 w-3/6`,
    },
    {
      name: "FIREBASE",
      css: `${styleGradient} h-4 w-3/6`,
    },
    {
      name: "SUPABASE",
      css: `${styleGradient} h-4 w-3/6`,
    },
    {
      name: "BITBUCKET",
      css: `${styleGradient} h-4 w-4/6`,
    },
    {
      name: "JIRA",
      css: `${styleGradient} h-4 w-5/6`,
    },
  ];
  return (
    <>
      <p className="text-sm mt-7 dark:text-gray-700 text-left">
        Otras tecnologias
      </p>
      {OtrasTecnologias.map((e, index) => (
        <div className="flex mt-3 mr-2 items-center space-x-1" key={index}>
          <span className="flex-shrink-0 w-12 text-sm mr-9 text-left">
            {e.name}
          </span>
          <div className="flex-1 h-4 overflow-hidden rounded-sm dark:bg-gray-300">
            <div className={e.css}></div>
          </div>
        </div>
      ))}
    </>
  );
}
