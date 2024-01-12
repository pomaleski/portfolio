interface EducationProps {
	name: string
	status: string
	startDate: string
	conclusionDate: string
	category: string
	institution: string
}

function Pipe() {
	return <span className="hidden md:inline"> | </span>
}

export default function Education({
	name,
	status,
	startDate,
	conclusionDate,
	category,
	institution,
}: EducationProps) {
	return (
		<li className="flex flex-col gap-1 text-xs md:text-sm">
			<div className="flex flex-col gap-1 md:block">
				<span className="text-base md:text-lg font-bold">{name}</span>
				<span>
					<span className="hidden md:inline"> - </span>
					{status}
				</span>
			</div>
			<div className="flex flex-col gap-1 md:block">
				<span>{category}</span>
				<Pipe />
				<span>
					{startDate} - {conclusionDate}
				</span>
				<Pipe />
				<span>{institution}</span>
			</div>
		</li>
	)
}
