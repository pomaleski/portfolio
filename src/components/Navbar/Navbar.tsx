import { twMerge } from 'tailwind-merge'
import { Ubuntu_Mono } from 'next/font/google'
import NavbarItem from './NavbarItem'
import Link from 'next/link'

const ubuntoMonoFont = Ubuntu_Mono({ subsets: ['latin'], weight: ['400'] })

interface NavbarProps {}
export default function Navbar(props: NavbarProps) {
	return (
		<nav className="flex justify-between p-4 bg-black bg-opacity-5">
			<header
				className={twMerge(
					ubuntoMonoFont.className,
					'text-xl text-white cursor-pointer'
				)}
			>
				<Link href="/">Pomaleski</Link>
			</header>
			<ul className="flex gap-10 text-base cursor-pointer">
				<NavbarItem item={'Sobre'} />
				<NavbarItem item={'Projetos'} />
				<NavbarItem item={'Contato'} />
			</ul>
		</nav>
	)
}
