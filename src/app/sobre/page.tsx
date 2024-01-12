import Education from '@/components/Education'

interface SobreProps {}
export default function Sobre(props: SobreProps) {
	return (
		<div className="flex flex-col items-center m-6 mt-10">
			<h1 className="text-4xl text-white font-bold text-center">Sobre</h1>
			<div className="mt-10 mx-10 md:mx-32 lg:mx-56 xl:mx-96 text-lg">
				<div className="text-center">
					<h2 className="text-2xl text-white">Educação</h2>
					<ul className="mt-4 flex flex-col gap-4">
						<Education
							name="Ciência da Computação"
							status="em Andamento"
							startDate="jul/2023"
							conclusionDate="jun/2028"
							category="Graduação"
							institution="Cruzeiro do Sul Virtual"
						/>
						<Education
							name="Desenvolvedor de Sistemas"
							status="Concluído"
							startDate="jan/2022"
							conclusionDate="dez/2022"
							category="Profissionalizante"
							institution="TecPuc"
						/>
					</ul>
				</div>
			</div>
		</div>
	)
}
