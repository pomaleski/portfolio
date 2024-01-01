import { twMerge } from 'tailwind-merge'
import { Ubuntu_Mono } from 'next/font/google'
import NavbarItem from './NavbarItem'

const ubuntoMonoFont = Ubuntu_Mono({ subsets: ['latin'], weight: ['400'] })

interface NavbarProps {}
export default function Navbar(props: NavbarProps) {
	const tabs = ['Sobre', 'Projetos', 'Contato']

	return (
		<nav className="flex justify-between p-4 bg-black bg-opacity-5">
			<header
				className={twMerge(
					ubuntoMonoFont.className,
					'text-xl text-white cursor-pointer'
				)}
			>
				Pomaleski
			</header>
			<ul className="flex gap-10 text-base cursor-pointer">
				{tabs.map((name) => (
					<NavbarItem key={name} item={name} />
				))}
			</ul>
		</nav>
	)
}
