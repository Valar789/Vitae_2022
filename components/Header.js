import Photo from "./Photo";

export default function Header() {
    return (
<section className="  text-white">
	<div className="container bg-stone-700 max-w-5xl px-4 pt-16 mx-auto">
		<div className="grid gap-4 mx-4  sm:grid-cols-12">
			<div className="col-span-12 sm:col-span-3">
				<div className="text-center sm:text-left mb-14">
					<Photo/>
                    <div className="flex pt-5 flex-col sm:relative  ">
						<h3 className="text-xl mb-2 font-semibold tracking-wide">Contacto</h3>

						<p className="">305 273 8798</p>
						<p className="">luismzo789@gmail.com</p>
						<p className="">Cra 7b 13-65 Miranda-Cauca</p>
					</div>
				</div>
			</div>
			<div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
				<div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-white">
					<div className="flex flex-col sm:relative  ">
						<h1 className="text-5xl font-semibold tracking-wide">Luis Miguel Zuleta Orozco</h1>
						<time className="text-xl pt-5 tracking-wide   dark:text-gray-400">Aspirante a Desarrollador Web</time>
						<p className="mt-3">En busqueda de mi primer empleo como Desarrollador Web</p>
					</div>
					<div className="flex flex-col sm:relative  ">
						<h3 className="text-xl font-semibold tracking-wide">Sobre mi</h3>

						<p className="mt-3">Soy una persona resolutiva, con gran capacidad para adaptacion, me apasiona todo lo relacionado con la tecnologia. Durante mi trayectoria he podido aprender y perfeccionar conocimientos que me han ayudado a construir un perfil específico. En la actualidad estoy buscando un empleo en la que pueda  seguir ampliando mi experiencia y que me permita asumir nuevas responsabilidades como desarrollador.</p>
					</div>

				</div>
			</div>
		</div>
	</div>
</section>
    );
}