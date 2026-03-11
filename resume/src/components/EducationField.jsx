export default function EducationField() {
	const obj = [
		{degree: "Computer Science",
		duration: "11/2023 – 02/2026",
		school: "1337 Coding School – Khouribga"},
		{degree: "Baccalaureate in Physical Sciences",
		duration: "09/2020 – 06/2021",
		school: "High School – Sharif El Idrissi Benslimane"}]
	
	return (
		<div className="space-y-2">

			<div>
				<h3 className="font-semibold">1337 Coding School – Khouribga</h3>
				<p className="text-gray-600 text-sm"> {degree} </p>
				<p className="text-gray-600 text-sm"> {duration} </p>
			</div>

			<div>
				<h3 className="font-semibold">
					High School – Sharif El Idrissi Benslimane
				</h3>
				<p className="text-gray-600 text-sm">
					Baccalaureate in Physical Sciences • 09/2020 – 06/2021
				</p>
			</div>

		</div>
	)
}