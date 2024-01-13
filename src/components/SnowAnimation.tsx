'use client'

import { ReactNode, useState } from 'react'
import ToggleButton from './ToggleButton'

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
			<div className="sticky left-0 bottom-0 w-44 bg-black rounded p-2 flex items-center justify-center gap-2 text-xs">
				<ToggleButton text="Desativar Animação" onClickHandle={handleClick} />
			</div>
		</div>
	)
}
