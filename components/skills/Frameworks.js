/* It returns a list of frameworks  */

import { style } from "./OtrasTecnologias";

export default function Frameworks() {
  const frameworks =[
    {
      name: "Nextjs" ,
      css: `${style} h-4 w-6/6`
    },
    {
      name: "Reactjs" ,
      css: `${style} h-4 w-5/6`
    },
    {
      name: "Django" ,
      css: `${style} h-4 w-3/6`
    },

  ]
  return (
    <>
      <p className="text-sm mt-7 mb-4 dark:text-gray-700 text-left">
        Frameworks y librerias
      </p>
     {
      frameworks.map((e, index)=>
      <div className="flex mt-3 mr-2 items-center space-x-1" key={index}>
      <span className="flex-shrink-0 w-12 text-sm mr-9 text-left">{e.name}</span>
      <div className="flex-1 h-4 overflow-hidden rounded-sm dark:bg-gray-300">
        <div className={e.css}></div>
      </div>
    </div>

      )
     }

    </>
  );
}
