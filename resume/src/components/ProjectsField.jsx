export default function ProjectsField({ projects }) {
	const toRender = projects.map((project, idx) => (
		<div key={`project-${idx}`} className="px-5">
			<div className="flex justify-between items-center">
				<h3 className="text-lg font-semibold">{project.title}</h3>
				<p className="italic text-gray-500 text-sm"> {project.tech} </p>
			</div>
			<p className="text-gray-500 text-sm">{project.description} </p>
			{project.tasks.map((task, taskIndex) => (
				<div className="flex" key={`task-${idx}-${taskIndex}`}>
					<p className="text-gray-700 ml-4 mt-1.5 text-[9px]">&#9679;</p>
					<p className="text-gray-700 ml-2">{task}</p>
				</div>
			))}
		</div>
	))

	return (
		<>
			{toRender}
		</>
	);
}