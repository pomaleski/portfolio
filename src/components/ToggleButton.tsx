interface ToggleButtonProps {
	text: string
	onClickHandle?: () => void
}

export default function ToggleButton({
	text,
	onClickHandle,
}: ToggleButtonProps) {
	return (
		<label className="relative flex items-center gap-1 cursor-pointer">
			<input type="checkbox" onClick={onClickHandle} className="sr-only peer" />
			<div className="w-9 h-5 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:h-4 after:w-4 after:bg-black after:rounded-full after:border-black peer-checked:bg-white after:transition-all"></div>
			<span>{text}</span>
		</label>
	)
}
