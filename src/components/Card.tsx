import Link from 'next/link'

interface CardProps {
	title: string
	description?: string
	link?: string
}

export default function Card({
	title,
	description = '',
	link = '',
}: CardProps) {
	return (
		<div className="flex flex-col gap-3 p-5 bg-black bg-opacity-50 w-80 h-60 rounded-lg">
			<div className="text-center text-white cursor-pointer hover:underline">
				<Link href={link} target="_blank">
					{title}
				</Link>
			</div>
			<div className="text-sm">
				{description.length > 250
					? description.substring(0, 250).concat('...')
					: description}
			</div>
		</div>
	)
}
