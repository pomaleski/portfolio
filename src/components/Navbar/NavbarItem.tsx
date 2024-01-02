'use client'

import Link from 'next/link'

interface NavbarItemProps {
	item: string
	active?: boolean
}
export default function NavbarItem({ item, active = false }: NavbarItemProps) {
	return (
		<li
			className={`border-white hover:text-white hover:border-b-2 ${
				active && 'text-white border-b-2'
			}`}
		>
			<Link href={`/${item.toLowerCase()}`}>{item}</Link>
		</li>
	)
}
