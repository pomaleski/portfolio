'use client'

import Link from 'next/link'

interface NavbarItemProps {
	item: string
}
export default function NavbarItem({ item }: NavbarItemProps) {
	return (
		<li className="hover:text-white">
			<Link href={`/${item.toLowerCase()}`}>{item}</Link>
		</li>
	)
}
