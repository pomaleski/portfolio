import { ElementType } from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
	text?: string
	onClickHandle?: () => void
	icon?: ElementType
	iconSize?: number
	className?: string
}

export default function Button({
	text,
	onClickHandle,
	icon: Icon,
	iconSize,
	className,
}: ButtonProps) {
	return (
		<button
			className={twMerge(
				'flex justify-center items-center gap-1 p-2 bg-black rounded-lg text-white hover:scale-110',
				className
			)}
			onClick={onClickHandle}
		>
			{Icon && <Icon size={iconSize ?? 24} />}
			{text}
		</button>
	)
}
