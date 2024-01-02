import Card from '@/components/Card'

interface ProjetosProps {}
export default function Projetos(props: ProjetosProps) {
	return (
		<div className="flex flex-col justify-center m-6 mt-10">
			<h1 className="ms-4 text-4xl text-white font-bold">Projetos</h1>
			<h2 className="ms-4 mt-10 text-2xl text-white">Principais</h2>
			<div className="mt-3 grid grid-cols-auto-fill gap-6">
				<Card
					title="spotify-tailwind-clone"
					description="Spotify clone com Tailwind CSS, React e TypecScript"
					link="https://github.com/pomaleski/spotify-tailwind-clone"
				/>
				<Card
					title="teste"
					description="
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam praesentium,
					labore quo vitae saepe ab laboriosam quod veniam sapiente, eius voluptas alias porro ut minus
					possimus perferendis? Ea, beatae perferendis!
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam praesentium,
					labore quo vitae saepe ab laboriosam quod veniam sapiente, eius voluptas alias porro ut minus
					possimus perferendis? Ea, beatae perferendis!"
				/>
				<Card
					title="teste"
					description="
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam praesentium,
					labore quo vitae saepe ab laboriosam quod veniam sapiente, eius voluptas alias porro ut minus
					possimus perferendis? Ea, beatae perferendis!"
				/>
			</div>
			<h2 className="ms-4 mt-10 text-2xl text-white">Todos</h2>
			<div className="mt-3 grid grid-cols-auto-fill gap-6">
				<Card
					title="spotify-tailwind-clone"
					description="Spotify clone com Tailwind CSS, React e TypecScript"
					link="https://github.com/pomaleski/spotify-tailwind-clone"
				/>
				<Card
					title="teste"
					description="
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam praesentium,
					labore quo vitae saepe ab laboriosam quod veniam sapiente, eius voluptas alias porro ut minus
					possimus perferendis? Ea, beatae perferendis!
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam praesentium,
					labore quo vitae saepe ab laboriosam quod veniam sapiente, eius voluptas alias porro ut minus
					possimus perferendis? Ea, beatae perferendis!"
				/>
				<Card
					title="teste"
					description="
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam praesentium,
					labore quo vitae saepe ab laboriosam quod veniam sapiente, eius voluptas alias porro ut minus
					possimus perferendis? Ea, beatae perferendis!"
				/>
				<Card
					title="spotify-tailwind-clone"
					description="Spotify clone com Tailwind CSS, React e TypecScript"
					link="https://github.com/pomaleski/spotify-tailwind-clone"
				/>
				<Card
					title="teste"
					description="
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam praesentium,
					labore quo vitae saepe ab laboriosam quod veniam sapiente, eius voluptas alias porro ut minus
					possimus perferendis? Ea, beatae perferendis!
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam praesentium,
					labore quo vitae saepe ab laboriosam quod veniam sapiente, eius voluptas alias porro ut minus
					possimus perferendis? Ea, beatae perferendis!"
				/>
				<Card
					title="teste"
					description="
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam praesentium,
					labore quo vitae saepe ab laboriosam quod veniam sapiente, eius voluptas alias porro ut minus
					possimus perferendis? Ea, beatae perferendis!"
				/>
			</div>
		</div>
	)
}
