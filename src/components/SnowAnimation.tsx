'use client'

import { ReactNode, useState } from 'react'

interface SnowAnimationProps {
	children: ReactNode
}

export default function SnowAnimation({ children }: SnowAnimationProps) {
	const [isActive, setIsActive] = useState(true)

	const handleClick = () => {
		setIsActive((current) => !current)
	}

	return (
		<div className={`${isActive && 'bg-snow animate-snowy'} z-0 min-h-dvh`}>
			{children}
			<div className="absolute left-0 bottom-0 bg-black rounded p-2 flex items-center justify-center gap-2 text-xs">
				<input
					type="checkbox"
					name="animation"
					id="animation"
					onClick={handleClick}
					className="cursor-pointer h-4 w-4"
				/>
				<label htmlFor="animation" className="flex cursor-pointer">
					Desativar Animação
				</label>
			</div>
		</div>
	)
}
