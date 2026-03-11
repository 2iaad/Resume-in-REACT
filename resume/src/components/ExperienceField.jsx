export default function ExperienceField() {
	const obj = {
		title: "Leets",
		position: "Full Stack Developer",
		duration: "Novemeber 2025 • February 2026",
		technologies: "TypeScript, Express, React, Next.js, Tailwind, WebSockets",
		description: "Block-based writing tool with embedded chat combining documentation, collaboration, and blogging in one seamless experience."
	}

	return (
		<div>
			<h3 className="font-semibold">{obj.title}</h3>

			<div className="flex justify-between">
				<p className="text-sm text-gray-500"> {obj.position} </p>
				<p className="text-sm text-gray-500"> {obj.duration} </p>
			</div>

			<p className="text-sm text-gray-500 mb-2">
				{obj.technologies}
			</p>

			<p className="text-gray-700"> {obj.description} </p>
		</div>
	)
}