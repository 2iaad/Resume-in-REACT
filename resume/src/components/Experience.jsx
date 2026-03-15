import ExperienceField from "./ExperienceField"

export default function Experience({ experience }) {
  if (!experience?.length) return null

  return (
    <section>
      <h2 className="text-xl mb-1">Experience</h2>
      <hr className='mb-3'></hr>

      <ExperienceField experience={experience} />
    </section>
  )
}