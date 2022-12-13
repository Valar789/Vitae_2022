/* It returns a list of otrasTecnologias  */
export const style = "bg-gradient-to-r from-teal-600 via-teal-800 to-teal-900 hover:bg-gradient-to-br hover:text-white focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:rin/feed/libraryg-teal-800" 
  
export default function OtrasTecnologias() {


  const OtrasTecnologias = [
    {
      name: "HTML",
      css: `${style} h-4 w-5/6`,
    },
    {
      name: "CSS",
      css: `${style} h-4 w-5/6`,
    },
    {
      name: "Tailwind CSS",
      css: `${style} h-4 w-5/6`,
    },
    {
      name: "BOOTSTRAP",
      css: `${style} h-4 w-4/6`,
    },
    {
      name: "SQL",
      css: `${style} h-4 w-3/6`,
    },
    {
      name: "GIT",
      css: `${style} h-4 w-4/6`,
    },
    {
      name: "MONGODB",
      css: `${style} h-4 w-3/6`,
    },
    {
      name: "FIREBASE",
      css: `${style} h-4 w-3/6`,
    },
    {
      name: "SUPABASE",
      css: `${style} h-4 w-3/6`,
    },
    {
      name: "BITBUCKET",
      css: `${style} h-4 w-4/6`,
    },
    {
      name: "JIRA",
      css: `${style} h-4 w-5/6`,
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
