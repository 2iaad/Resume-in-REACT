const groupLabels = {
  languages: "Languages",
  frameworks: "Libraries & Frameworks",
  tools: "Tools & Technologies"
}

export default function Skills({ skills, groupOrder }) {
  const order = groupOrder?.length
    ? groupOrder
    : ["languages", "frameworks", "tools"]
  const hasSkills = order.some((groupKey) =>
    skills[groupKey].some((value) => value?.trim())
  )

  if (!hasSkills) return null

  return (
    <section>
      <h2 className="text-xl mb-1">Skills</h2>
      <hr className='mb-3'></hr>

      <div className="flex flex-col gap-1 px-5 text-gray-700">
        {order.map((groupKey) => (
          <div key={groupKey}>
            <span className="font-semibold">{groupLabels[groupKey]}: </span>
            {skills[groupKey].filter(Boolean).join(", ")}
          </div>
        ))}
      </div>
    </section>
  )
}