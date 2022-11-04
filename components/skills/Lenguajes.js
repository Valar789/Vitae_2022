export default function Lenguajes() {
  return (
    <>
      <p className="text-sm mt-7 dark:text-gray-700 mb-4 text-left">
        Lenguajes
      </p>
      <div className="flex mt-3 mr-2 items-center space-x-1">
        <span className="flex-shrink-0 w-12 text-sm mr-9 text-left">Javascript</span>
        <div className="flex-1 h-4 overflow-hidden rounded-sm dark:bg-gray-300">
          <div className="dark:bg-yellow-300 h-4 w-5/6"></div>
        </div>
      </div>
      <div className="flex mt-3 mr-2  items-center space-x-1">
        <span className="flex-shrink-0 w-12 text-sm mr-9 text-left">Python</span>
        <div className="flex-1 h-4 overflow-hidden rounded-sm dark:bg-gray-300">
          <div className="dark:bg-red-700 h-4 w-3/6"></div>
        </div>
      </div>
      <div className="flex mt-3 mr-2  items-center space-x-1">
        <span className="flex-shrink-0 w-12 text-sm mr-9 text-left">Java</span>
        <div className="flex-1 h-4 overflow-hidden rounded-sm dark:bg-gray-300">
          <div className="dark:bg-green-700 h-4 w-1/6"></div>
        </div>
      </div>
    </>
  );
}
