export default function Home() {
	return (
		<div className="h-[calc(100vh-60px)] flex justify-between items-center px-52">
			<div className="flex flex-col gap-2 text-white">
				<span className="text-lg">Olá pessoas, eu sou</span>
				<h1 className="text-7xl font-bold">Gabriel Pomaleski</h1>
				<h2 className="text-lg">Desenvolvedor Web</h2>
			</div>
			<div className="w-96 h-96 bg-black rounded-3xl border-2 border-white overflow-hidden"></div>
		</div>
	)
}
