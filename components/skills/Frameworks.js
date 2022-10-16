export default function Frameworks() {
  return (
    <>
      <p className="text-sm mt-7 mb-4 dark:text-gray-400 text-left">
        Frameworks y librerias
      </p>
      <div className="flex mt-3 mr-2 items-center space-x-1">
        <span className="flex-shrink-0 w-12 text-sm mr-4">Nextjs</span>
        <div className="flex-1 h-4 overflow-hidden rounded-sm dark:bg-gray-700">
          <div className="dark:bg-orange-300 h-4 w-5/6"></div>
        </div>
      </div>
      <div className="flex mt-3 mr-2  items-center space-x-1">
        <span className="flex-shrink-0 w-12 text-sm mr-4">Reactjs</span>
        <div className="flex-1 h-4 overflow-hidden rounded-sm dark:bg-gray-700">
          <div className="dark:bg-orange-300 h-4 w-4/6"></div>
        </div>
      </div>
      <div className="flex mt-3 mr-2  items-center space-x-1">
        <span className="flex-shrink-0 w-12 text-sm mr-4">Django</span>
        <div className="flex-1 h-4 overflow-hidden rounded-sm dark:bg-gray-700">
          <div className="dark:bg-orange-300 h-4 w-4/6"></div>
        </div>
      </div>
      <div className="flex mt-3 mr-2  items-center space-x-1">
        <span className="flex-shrink-0 w-12 text-sm mr-4">Dj Rest</span>
        <div className="flex-1 h-4 overflow-hidden rounded-sm dark:bg-gray-700">
          <div className="dark:bg-orange-300 h-4 w-3/6"></div>
        </div>
      </div>
    </>
  );
}
