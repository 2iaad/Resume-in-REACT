export default function EducationField({ education }) {
	const toRender = education.map((item, index) => {
		return (
			<div key={`education-${index}`}>
				<div className="flex justify-between">
					<h3 className="font-semibold"> {item.school} </h3>
					<p className="text-gray-600 text-sm"> {item.duration} </p>
				</div>
				<p className="text-gray-600 text-m"> {item.degree} </p>
			</div>
		)
	})

	return (
		<div className="space-y-1 px-5">
			{toRender}
		</div>
	)
}