import Card from '@/components/Card'

interface repoProps {
	name: string
	description: string
	html_url: string
	updated_at: string
}

interface ProjetosProps {}
export default async function Projetos(props: ProjetosProps) {
	const repos = await fetch('https://api.github.com/users/pomaleski/repos', {
		next: {
			revalidate: 60 * 60 * 24, // 1 day
		},
	}).then((data) => data.json())

	const pinnedRepos = ['petshop', 'spotify-tailwind-clone']

	const sortedRepos = repos.sort((a: repoProps, b: repoProps) => {
		const dateA = new Date(a.updated_at)
		const dateB = new Date(b.updated_at)

		return dateB.getTime() - dateA.getTime()
	})

	return (
		<div className="flex flex-col justify-center m-6 mt-10">
			<h1 className="ms-4 text-4xl text-white font-bold text-center md:text-start">
				Projetos
			</h1>
			<h2 className="ms-4 mt-10 text-2xl text-white text-center md:text-start">
				Principais
			</h2>
			<div className="mt-3 flex flex-col items-center md:grid grid-cols-auto-fill gap-6">
				{pinnedRepos.map((repoName: string) => {
					const { name, description, html_url } = repos.find(
						({ name }: repoProps) => name === repoName
					)
					return (
						<Card
							key={`pinned-${name}`}
							title={name}
							description={description}
							link={html_url}
						/>
					)
				})}
			</div>
			<h2 className="ms-4 mt-10 text-2xl text-white text-center md:text-start">
				Todos
			</h2>
			<div className="mt-3 flex flex-col items-center md:grid grid-cols-auto-fill gap-6">
				{sortedRepos.map(({ name, description, html_url }: repoProps) => {
					return (
						<Card
							key={name}
							title={name}
							description={description}
							link={html_url}
						/>
					)
				})}
			</div>
		</div>
	)
}
