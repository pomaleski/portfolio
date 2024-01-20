import Image from 'next/image'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'

export default function Home() {
	return (
		<>
			<div className="h-auto sm:h-[calc(100vh-60px-36px)] flex flex-col lg:flex-row justify-center lg:justify-around items-center px-10 xl:p-0 gap-20">
				<div className="flex flex-col gap-2 text-white text-center lg:text-start w-96 xl:w-auto">
					<span className="text-lg w-auto">Olá pessoas, eu sou o</span>
					<h1 className="text-7xl font-bold">Gabriel Pomaleski</h1>
					<h2 className="text-lg">Desenvolvedor Web</h2>
				</div>
				<div className="w-96 h-96 rounded-3xl border-2 border-black shadow-2xl overflow-hidden flex items-center">
					<Image
						src="/img/profile-pic.png"
						alt="Foto de perfil"
						width={384}
						height={384}
						className="object-contain"
					></Image>
				</div>
			</div>
			<Link
				className="flex gap-1 items-center fixed right-2 bottom-2 w-36 text-sm p-2 rounded-lg bg-black bg-opacity-25 hover:underline hover:text-white"
				href="https://github.com/pomaleski/portfolio"
				target="_blank"
			>
				View on GitHub
				<FaGithub />
			</Link>
		</>
	)
}
