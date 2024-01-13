import Education from '@/components/Education'

interface SobreProps {}

export default function Sobre(props: SobreProps) {
	return (
		<div className="flex flex-col items-center px-6 pt-10 text-center">
			<h1 className="text-4xl text-white font-bold">Sobre</h1>
			<div className="mt-10 mx-10 md:mx-32 lg:mx-56 xl:mx-96 text-lg flex flex-col gap-8">
				<div>
					<h2 className="text-2xl text-white">Resumo</h2>
					<div className="mt-4 text-base md:text-lg">
						Estou em busca do primeiro emprego. Comecei a estudar programação em
						2022, fazendo um curso profisionalizante, e gostei muito, atualmente
						estou cursando Ciência da Computação e aprimorando meu conhecimento
						em React e TypeScript. Prentendo também estudar Rust ou Java.
					</div>
				</div>
				<div>
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
