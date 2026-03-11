import { useState } from "react"

export default function ExperienceField() {
	const [title, setTitle] = useState("Leets")
	const [position, setPosition] = useState("Full Stack Developer")
	const [duration, setDuration] = useState("Novemeber 2025 • February 2026")
	const [technologies, setTechnologies] = useState("TypeScript, Express, React, Next.js, Tailwind, WebSockets")
	const [description, setDescription] = useState("Block-based writing tool with embedded chat combining documentation, collaboration, and blogging in one seamless experience.")

	return (
		<div>

			<div className="flex justify-between items-center">
				<h3 className="text-lg font-semibold">{title}</h3>
				<p className="text-sm text-gray-500"> {duration} </p>
			</div>

			<div className="flex justify-between">
				<p className="text-sm text-gray-500"> {position} </p>
				<p className="italic text-sm text-gray-500 mb-2">{technologies}</p>
			</div>


			<div className="flex">
				<p className="text-gray-700 ml-3"> - </p>
				<p className="text-gray-700 ml-2">{description} </p>
			</div>
		</div>
	)
}