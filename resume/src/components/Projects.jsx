import ProjectsField from "./ProjectsField"

export default function Projects() {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-1">Projects</h2>
      <hr className='mb-2'></hr>

      <div className="space-y-2">
        <ProjectsField />
      </div>
    </section>
  )
}