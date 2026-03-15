export default function ExperienceField({ experience }) {
	return (
		<div className="space-y-3">
			{experience.map((item, index) => (
				<div key={`experience-${index}`}>
					<div className="flex justify-between items-center">
						<h3 className="text-lg font-semibold">{item.title}</h3>
						<p className="text-sm text-gray-500"> {item.duration} </p>
					</div>

					<div className="flex justify-between">
						<p className="text-sm text-gray-500"> {item.position} </p>
						<p className="italic text-sm text-gray-500 mb-2">
							{item.technologies}
						</p>
					</div>

					<div className="flex">
						<p className="text-gray-700 ml-3"> - </p>
						<p className="text-gray-700 ml-2">{item.description} </p>
					</div>
				</div>
			))}
		</div>
	)
}