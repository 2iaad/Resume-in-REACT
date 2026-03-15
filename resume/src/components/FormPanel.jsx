export default function FormPanel({
	resume,
	updateHeader,
	updateSummary,
	updateSkillsGroup,
	moveSection,
	moveSkillsGroup,
	moveSkillItem,
	updateArrayItem,
	addArrayItem,
	removeArrayItem,
	updateProjectTask,
	addProjectTask,
	removeProjectTask
}) {
	const { header, summary, skills, education, experience, projects } = resume

	const sectionLabels = {
		header: "Header",
		summary: "Summary",
		skills: "Skills",
		experience: "Experience",
		education: "Education",
		projects: "Projects"
	}

	const updateSkillItem = (group, index, value) => {
		const next = [...skills[group]]
		next[index] = value
		updateSkillsGroup(group, next)
	}

	const addSkillItem = (group) => {
		updateSkillsGroup(group, [...skills[group], ""])
	}

	const removeSkillItem = (group, index) => {
		updateSkillsGroup(
			group,
			skills[group].filter((_, idx) => idx !== index)
		)
	}

	return (
		<div className="flex flex-col gap-4 text-sm">
			<div>
				<h2 className="text-lg font-semibold">Resume Editor</h2>
				<p className="text-gray-500">Changes appear instantly in the preview.</p>
			</div>

			<details className="border border-gray-200 rounded-md p-3">
				<summary className="cursor-pointer font-semibold">Order</summary>
				<div className="mt-3 flex flex-col gap-4">
					<div className="flex flex-col gap-2">
						<h3 className="font-semibold text-gray-700">Sections</h3>
						{resume.sectionOrder.map((section, index) => (
							<div key={section} className="flex items-center gap-2">
								<span className="flex-1">{sectionLabels[section]}</span>
								<button
									type="button"
									className="text-xs text-gray-500"
									onClick={() => moveSection(index, index - 1)}
								>
									Up
								</button>
								<button
									type="button"
									className="text-xs text-gray-500"
									onClick={() => moveSection(index, index + 1)}
								>
									Down
								</button>
							</div>
						))}
					</div>
					<div className="flex flex-col gap-2">
						<h3 className="font-semibold text-gray-700">Skills groups</h3>
						{skills.groupOrder.map((group, index) => (
							<div key={group} className="flex items-center gap-2">
								<span className="flex-1">{group}</span>
								<button
									type="button"
									className="text-xs text-gray-500"
									onClick={() => moveSkillsGroup(index, index - 1)}
								>
									Up
								</button>
								<button
									type="button"
									className="text-xs text-gray-500"
									onClick={() => moveSkillsGroup(index, index + 1)}
								>
									Down
								</button>
							</div>
						))}
					</div>
				</div>
			</details>

			<details className="border border-gray-200 rounded-md p-3" open>
				<summary className="cursor-pointer font-semibold">Header</summary>
				<div className="mt-3 grid gap-3">
					<label className="flex flex-col gap-1">
						Name
						<input
							className="border border-gray-300 rounded px-2 py-1"
							value={header.name}
							onChange={(event) => updateHeader("name", event.target.value)}
						/>
					</label>
					<label className="flex flex-col gap-1">
						Title
						<input
							className="border border-gray-300 rounded px-2 py-1"
							value={header.title}
							onChange={(event) => updateHeader("title", event.target.value)}
						/>
					</label>
					<label className="flex flex-col gap-1">
						Phone
						<input
							className="border border-gray-300 rounded px-2 py-1"
							value={header.phone}
							onChange={(event) => updateHeader("phone", event.target.value)}
						/>
					</label>
					<label className="flex flex-col gap-1">
						Email
						<input
							className="border border-gray-300 rounded px-2 py-1"
							value={header.email}
							onChange={(event) => updateHeader("email", event.target.value)}
						/>
					</label>
					<label className="flex flex-col gap-1">
						LinkedIn handle
						<input
							className="border border-gray-300 rounded px-2 py-1"
							value={header.linkedin}
							onChange={(event) => updateHeader("linkedin", event.target.value)}
						/>
					</label>
					<label className="flex flex-col gap-1">
						GitHub handle
						<input
							className="border border-gray-300 rounded px-2 py-1"
							value={header.github}
							onChange={(event) => updateHeader("github", event.target.value)}
						/>
					</label>
				</div>
			</details>

			<details className="border border-gray-200 rounded-md p-3">
				<summary className="cursor-pointer font-semibold">Summary</summary>
				<div className="mt-3">
					<label className="flex flex-col gap-1">
						Summary
						<textarea
							className="border border-gray-300 rounded px-2 py-1 min-h-[100px]"
							value={summary}
							onChange={(event) => updateSummary(event.target.value)}
						/>
					</label>
				</div>
			</details>

			<details className="border border-gray-200 rounded-md p-3">
				<summary className="cursor-pointer font-semibold">Skills</summary>
				<div className="mt-3 flex flex-col gap-4">
					{[
						{ key: "languages", label: "Languages" },
						{ key: "frameworks", label: "Libraries & Frameworks" },
						{ key: "tools", label: "Tools & Technologies" }
					].map((group) => (
						<div key={group.key} className="flex flex-col gap-2">
							<div className="flex items-center justify-between">
								<h3 className="font-semibold text-gray-700">{group.label}</h3>
								<button
									type="button"
									className="text-xs text-blue-600"
									onClick={() => addSkillItem(group.key)}
								>
									+ Add
								</button>
							</div>
							<div className="flex flex-col gap-2">
								{skills[group.key].map((skill, index) => (
									<div key={`${group.key}-${index}`} className="flex gap-2">
										<input
											className="flex-1 border border-gray-300 rounded px-2 py-1"
											value={skill}
											onChange={(event) =>
												updateSkillItem(group.key, index, event.target.value)
											}
										/>
										<button
											type="button"
											className="text-xs text-gray-500"
											onClick={() =>
												moveSkillItem(group.key, index, index - 1)
											}
										>
											Up
										</button>
										<button
											type="button"
											className="text-xs text-gray-500"
											onClick={() =>
												moveSkillItem(group.key, index, index + 1)
											}
										>
											Down
										</button>
										<button
											type="button"
											className="text-xs text-gray-500"
											onClick={() => removeSkillItem(group.key, index)}
										>
											Remove
										</button>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</details>

			<details className="border border-gray-200 rounded-md p-3">
				<summary className="cursor-pointer font-semibold">Experience</summary>
				<div className="mt-3 flex flex-col gap-4">
					<button
						type="button"
						className="self-start text-xs text-blue-600"
						onClick={() =>
							addArrayItem("experience", {
								title: "",
								position: "",
								duration: "",
								technologies: "",
								description: ""
							})
						}
					>
						+ Add experience
					</button>
					{experience.map((item, index) => (
						<div
							key={`experience-${index}`}
							className="border border-gray-200 rounded-md p-3"
						>
							<div className="flex items-center justify-between">
								<h3 className="font-semibold">Entry {index + 1}</h3>
								<button
									type="button"
									className="text-xs text-gray-500"
									onClick={() => removeArrayItem("experience", index)}
								>
									Remove
								</button>
							</div>
							<div className="mt-3 grid gap-2">
								<label className="flex flex-col gap-1">
									Company / Project
									<input
										className="border border-gray-300 rounded px-2 py-1"
										value={item.title}
										onChange={(event) =>
											updateArrayItem(
												"experience",
												index,
												"title",
												event.target.value
											)
										}
									/>
								</label>
								<label className="flex flex-col gap-1">
									Position
									<input
										className="border border-gray-300 rounded px-2 py-1"
										value={item.position}
										onChange={(event) =>
											updateArrayItem(
												"experience",
												index,
												"position",
												event.target.value
											)
										}
									/>
								</label>
								<label className="flex flex-col gap-1">
									Duration
									<input
										className="border border-gray-300 rounded px-2 py-1"
										value={item.duration}
										onChange={(event) =>
											updateArrayItem(
												"experience",
												index,
												"duration",
												event.target.value
											)
										}
									/>
								</label>
								<label className="flex flex-col gap-1">
									Technologies
									<input
										className="border border-gray-300 rounded px-2 py-1"
										value={item.technologies}
										onChange={(event) =>
											updateArrayItem(
												"experience",
												index,
												"technologies",
												event.target.value
											)
										}
									/>
								</label>
								<label className="flex flex-col gap-1">
									Description
									<textarea
										className="border border-gray-300 rounded px-2 py-1 min-h-[80px]"
										value={item.description}
										onChange={(event) =>
											updateArrayItem(
												"experience",
												index,
												"description",
												event.target.value
											)
										}
									/>
								</label>
							</div>
						</div>
					))}
				</div>
			</details>

			<details className="border border-gray-200 rounded-md p-3">
				<summary className="cursor-pointer font-semibold">Education</summary>
				<div className="mt-3 flex flex-col gap-4">
					<button
						type="button"
						className="self-start text-xs text-blue-600"
						onClick={() =>
							addArrayItem("education", {
								degree: "",
								duration: "",
								school: ""
							})
						}
					>
						+ Add education
					</button>
					{education.map((item, index) => (
						<div
							key={`education-${index}`}
							className="border border-gray-200 rounded-md p-3"
						>
							<div className="flex items-center justify-between">
								<h3 className="font-semibold">Entry {index + 1}</h3>
								<button
									type="button"
									className="text-xs text-gray-500"
									onClick={() => removeArrayItem("education", index)}
								>
									Remove
								</button>
							</div>
							<div className="mt-3 grid gap-2">
								<label className="flex flex-col gap-1">
									School
									<input
										className="border border-gray-300 rounded px-2 py-1"
										value={item.school}
										onChange={(event) =>
											updateArrayItem(
												"education",
												index,
												"school",
												event.target.value
											)
										}
									/>
								</label>
								<label className="flex flex-col gap-1">
									Degree
									<input
										className="border border-gray-300 rounded px-2 py-1"
										value={item.degree}
										onChange={(event) =>
											updateArrayItem(
												"education",
												index,
												"degree",
												event.target.value
											)
										}
									/>
								</label>
								<label className="flex flex-col gap-1">
									Duration
									<input
										className="border border-gray-300 rounded px-2 py-1"
										value={item.duration}
										onChange={(event) =>
											updateArrayItem(
												"education",
												index,
												"duration",
												event.target.value
											)
										}
									/>
								</label>
							</div>
						</div>
					))}
				</div>
			</details>

			<details className="border border-gray-200 rounded-md p-3">
				<summary className="cursor-pointer font-semibold">Projects</summary>
				<div className="mt-3 flex flex-col gap-4">
					<button
						type="button"
						className="self-start text-xs text-blue-600"
						onClick={() =>
							addArrayItem("projects", {
								title: "",
								tech: "",
								description: "",
								tasks: [""]
							})
						}
					>
						+ Add project
					</button>
					{projects.map((project, index) => (
						<div
							key={`project-${index}`}
							className="border border-gray-200 rounded-md p-3"
						>
							<div className="flex items-center justify-between">
								<h3 className="font-semibold">Project {index + 1}</h3>
								<button
									type="button"
									className="text-xs text-gray-500"
									onClick={() => removeArrayItem("projects", index)}
								>
									Remove
								</button>
							</div>
							<div className="mt-3 grid gap-2">
								<label className="flex flex-col gap-1">
									Title
									<input
										className="border border-gray-300 rounded px-2 py-1"
										value={project.title}
										onChange={(event) =>
											updateArrayItem(
												"projects",
												index,
												"title",
												event.target.value
											)
										}
									/>
								</label>
								<label className="flex flex-col gap-1">
									Tech
									<input
										className="border border-gray-300 rounded px-2 py-1"
										value={project.tech}
										onChange={(event) =>
											updateArrayItem(
												"projects",
												index,
												"tech",
												event.target.value
											)
										}
									/>
								</label>
								<label className="flex flex-col gap-1">
									Description
									<input
										className="border border-gray-300 rounded px-2 py-1"
										value={project.description}
										onChange={(event) =>
											updateArrayItem(
												"projects",
												index,
												"description",
												event.target.value
											)
										}
									/>
								</label>
							</div>
							<div className="mt-3 flex flex-col gap-2">
								<div className="flex items-center justify-between">
									<h4 className="font-semibold text-gray-700">Tasks</h4>
									<button
										type="button"
										className="text-xs text-blue-600"
										onClick={() => addProjectTask(index)}
									>
										+ Add task
									</button>
								</div>
								{project.tasks.map((task, taskIndex) => (
									<div key={`task-${index}-${taskIndex}`} className="flex gap-2">
										<input
											className="flex-1 border border-gray-300 rounded px-2 py-1"
											value={task}
											onChange={(event) =>
												updateProjectTask(
													index,
													taskIndex,
													event.target.value
												)
											}
										/>
										<button
											type="button"
											className="text-xs text-gray-500"
											onClick={() => removeProjectTask(index, taskIndex)}
										>
											Remove
										</button>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</details>
		</div>
	)
}
