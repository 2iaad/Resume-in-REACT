import ProjectsField from "./ProjectsField"

export default function Projects({ projects }) {
  if (!projects?.length) return null

  return (
    <section>
      <h2 className="text-xl mb-1">Projects</h2>
      <hr className='mb-3'></hr>

      <div className="space-y-2">
        <ProjectsField projects={projects} />
      </div>
    </section>
  )
}