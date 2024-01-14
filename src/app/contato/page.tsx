import Button from '@/components/Button'
import { FaWhatsapp } from 'react-icons/fa'
import { TbMail } from 'react-icons/tb'
import { FaLinkedin } from 'react-icons/fa6'
import Link from 'next/link'

interface ContatoProps {}

export default function Contato(props: ContatoProps) {
	return (
		<div className="flex flex-col items-center p-6 pt-10 text-center h-[calc(100vh-60px-36px)]">
			<h1 className="text-4xl text-white font-bold">Contato</h1>
			<div className="mt-4 flex flex-col text-base md:text-lg">
				<span>E-mail: gabrielpomaleski@gmail.com</span>
				<span>Telefone: (41) 9 8888-4657</span>
			</div>
			<div className="flex flex-col justify-center items-center gap-6 mt-10">
				<Link
					target="_blank"
					href="https://wa.me/5541988884657"
					className="w-full"
				>
					<Button
						text="Whatsapp"
						icon={FaWhatsapp}
						className="bg-green-600 w-full"
					/>
				</Link>
				<Link href="mailto:gabrielpomaleski@gmail.com" className="w-full">
					<Button
						text="E-Mail"
						icon={TbMail}
						className="bg-white text-black w-full"
					/>
				</Link>
				<Link
					target="_blank"
					href="https://www.linkedin.com/in/gabriel-scoroboatei-pomaleski/"
					className="w-full"
				>
					<Button
						text="Linkedin"
						icon={FaLinkedin}
						className="bg-blue-700 w-full"
					/>
				</Link>
			</div>
		</div>
	)
}
