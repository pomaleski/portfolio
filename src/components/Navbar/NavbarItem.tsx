'use client'

import Link from 'next/link'

interface NavbarItemProps {
	item: string
	active?: boolean
}
export default function NavbarItem({ item, active = false }: NavbarItemProps) {
	return (
		<li
			className={`p-2 md:p-0 border-white hover:text-white md:hover:border-b-2 cursor-pointer ${
				active && 'text-white border-b-2'
			}`}
		>
			<Link href={`/${item.toLowerCase()}`}>{item}</Link>
		</li>
	)
}
