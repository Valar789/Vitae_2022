export default function Lenguajes() {
  return (
    <>
      <p className="text-sm mt-7 dark:text-gray-400 mb-4 text-left">
        Lenguajes
      </p>
      <div className="flex mt-3 mr-2 items-center space-x-1">
        <span className="flex-shrink-0 w-12 text-sm mr-4">Javascript</span>
        <div className="flex-1 h-4 overflow-hidden rounded-sm dark:bg-gray-700">
          <div className="dark:bg-orange-300 h-4 w-5/6"></div>
        </div>
      </div>
      <div className="flex mt-3 mr-2  items-center space-x-1">
        <span className="flex-shrink-0 w-12 text-sm mr-4">Python</span>
        <div className="flex-1 h-4 overflow-hidden rounded-sm dark:bg-gray-700">
          <div className="dark:bg-orange-300 h-4 w-3/6"></div>
        </div>
      </div>
      <div className="flex mt-3 mr-2  items-center space-x-1">
        <span className="flex-shrink-0 w-12 text-sm mr-4">Java</span>
        <div className="flex-1 h-4 overflow-hidden rounded-sm dark:bg-gray-700">
          <div className="dark:bg-orange-300 h-4 w-1/6"></div>
        </div>
      </div>
    </>
  );
}
