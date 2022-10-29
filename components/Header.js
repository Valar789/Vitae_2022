import Photo from "./Photo";
import phone from "../public/icons/phone.png"
import email from "../public/icons/email.png"
import location from "../public/icons/location.png"
import Image from "next/image";

export default function Header() {
    return (
<section className="  text-white">
	<div className="container bg-stone-900 max-w-5xl px-4 py-16 mx-auto shadow-lg">
		<div className="grid gap-4 mx-4  sm:grid-cols-12">
			<div className="col-span-12 sm:col-span-4">
				<div className="text-center sm:text-left mb-14">
					<Photo/>
                    <div className="flex pt-5 flex-col sm:relative  ">
						<h3 className="text-xl mb-2 font-semibold tracking-wide">Contacto</h3>

						<p className="flex gap-2 mt-2"><Image className="" src={phone} alt='icon'/>305 273 8798</p>
						<p className="flex gap-2 mt-2"><Image className="" src={email} alt='icon'/>luismzo789@gmail.com</p>


						<a href="https://drive.google.com/uc?id=1vUfc9usytOzEiXxH4OHsOtkmQvyAsZRO&export=download&authuser=0" className="btn p-2 text-center mt-4 bg-green-900 hover:text-white rounded-md">Descargar en PDF</a>
					</div>
				</div>
			</div>
			<div className="relative col-span-12 px-4 space-y-6 sm:col-span-8">
				<div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-white">
					<div className="flex flex-col sm:relative  ">
						<h1 className="text-5xl font-semibold uppercase tracking-wide">Luis Miguel Zuleta Orozco</h1>
						<time className="text-xl pt-5 tracking-wide   dark:text-gray-400">Desarrollador Web</time>

					</div>
					<div className="flex flex-col sm:relative  ">
						<h3 className="text-xl font-semibold tracking-wide">Sobre mi</h3>

						<p className="mt-3">Soy una persona resolutiva, con gran capacidad para adaptación, me apasiona todo lo relacionado con la tecnología. Durante mi trayectoria he podido aprender y perfeccionar conocimientos que me han ayudado a construir un perfil específico. En la actualidad estoy buscando un empleo en la que pueda seguir ampliando mi experiencia y que me permita asumir nuevas responsabilidades como desarrollador.</p>
					</div>

				</div>
			</div>
		</div>
	</div>
</section>
    );
}