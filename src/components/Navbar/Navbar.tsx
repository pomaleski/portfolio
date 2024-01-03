import { twMerge } from 'tailwind-merge'
import { Ubuntu_Mono } from 'next/font/google'
import Link from 'next/link'
import NavbarPages from './NavbarPages'

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
			<NavbarPages />
		</nav>
	)
}
