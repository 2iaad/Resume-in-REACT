export default function EducationField() {
	const obj = [
		{
			degree: "Computer Science",
			duration: "11/2023 – 02/2026",
			school: "1337 Coding School – Khouribga"
		},
		{
			degree: "Baccalaureate in Physical Sciences",
			duration: "09/2020 – 06/2021",
			school: "High School – Sharif El Idrissi Benslimane"
		}]

	const toRender = obj.map((item) => {
		return (
			<div>
				<div className="flex justify-between">
					<h3 className="font-semibold"> {item.school} </h3>
					<p className="text-gray-600 text-sm"> {item.duration} </p>
				</div>
				<p className="text-gray-600 text-sm"> {item.degree} </p>
			</div>
		)
	})

	return (
		<div className="space-y-2">
			{toRender}
		</div>
	)
}