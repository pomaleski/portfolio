import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { twMerge } from 'tailwind-merge'
import Navbar from '@/components/Navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: '',
	description: '',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="pt-BR">
			<body
				className={twMerge(
					inter.className,
					'min-h-screen text-zinc-300 bg-gradient-to-b from-purple-950 to-black'
				)}
			>
				<Navbar />
				{children}
			</body>
		</html>
	)
}
