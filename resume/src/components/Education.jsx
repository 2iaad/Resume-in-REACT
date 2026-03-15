import EducationField from "./EducationField"

export default function Education({ education }) {
  if (!education?.length) return null

  return (
    <section>
      <h2 className="text-xl mb-1">Education</h2>
      <hr className='mb-3'></hr>

      <EducationField education={education} />
    </section>
  )
}