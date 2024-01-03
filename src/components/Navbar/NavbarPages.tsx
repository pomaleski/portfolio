'use client'

import NavbarItem from './NavbarItem'
import { RxHamburgerMenu } from 'react-icons/rx'
import { useState } from 'react'

interface NavbarPagesProps {}
export default function NavbarPages(props: NavbarPagesProps) {
	const [openButton, setOpenButton] = useState(false)

	return (
		<>
			<div className="relative">
				<button
					className="flex justify-center items-center md:hidden"
					onClick={() => {
						setOpenButton((current) => !current)
					}}
				>
					<RxHamburgerMenu size={25} />
				</button>
				<ul
					className={`md:flex flex-col md:flex-row gap-2 md:gap-10 text-base shadow transition-all ${
						openButton
							? 'flex absolute right-0 top-10 p-4 h-44 rounded-lg bg-black bg-opacity-25'
							: 'hidden'
					}`}
				>
					<NavbarItem item={'Sobre'} />
					<NavbarItem item={'Projetos'} />
					<NavbarItem item={'Contato'} />
				</ul>
			</div>
		</>
	)
}
