import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { twMerge } from 'tailwind-merge'
import Navbar from '@/components/Navbar/Navbar'
import SnowAnimation from '@/components/SnowAnimation'

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
					'min-h-auto sm:min-h-screen overflow-x-hidden text-zinc-300 bg-gradient-to-tl from-purple-950 to-black'
				)}
			>
				<SnowAnimation>
					<Navbar />
					<div className="min-h-[calc(100vh-60px-36px)]">{children}</div>
				</SnowAnimation>
			</body>
		</html>
	)
}
