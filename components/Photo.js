import Image from "next/image";
import Link from "next/link";
import photo from "../public/photoeje.jpg";

export default function Photo() {
  return (
    <div>
      <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
        <Image
          className="object-cover w-full h-56 md:h-64 xl:h-80"
          src={photo}
          alt="Person"
        />
        <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
          <p className="mb-1 text-lg font-bold text-gray-100">Edad: 30 años</p>
          <p className=" text-xs text-gray-100">Hobbies</p>
          <p className="mb-4 text-xs tracking-wide text-gray-200">
            Tocar guitarra, caminar y estudiar.
          </p>
          <div className="flex items-center justify-center space-x-3">
            <Link href="https://www.linkedin.com/in/luismiguelzuetaorozco/">
              <a className="text-white transition-colors duration-300 hover:text-teal-accent-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="24"
                  height="24"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#0288d1"
                    d="M8.421 14h.052 0C11.263 14 13 12 13 9.5 12.948 6.945 11.263 5 8.526 5 5.789 5 4 6.945 4 9.5 4 12 5.736 14 8.421 14zM4 17H13V43H4zM44 26.5c0-5.247-4.253-9.5-9.5-9.5-3.053 0-5.762 1.446-7.5 3.684V17h-9v26h9V28h0c0-2.209 1.791-4 4-4s4 1.791 4 4v15h9C44 43 44 27.955 44 26.5z"
                  ></path>
                </svg>
              </a>
            </Link>
            <Link href="https://www.facebook.com/zuletaorozcoluismiguel">
              <a className="text-white transition-colors duration-300 hover:text-teal-accent-400">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="23" height="24"
viewBox="0 0 48 48"
 ><path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path></svg>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
