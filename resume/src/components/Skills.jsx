export default function Skills() {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-1">Skills</h2>
      <hr className='mb-2'></hr>

      <div className="flex flex-col gap-1 text-gray-700">

        <div>
          <span className="font-semibold">Languages: </span>
          Bash, C/C++, HTML/CSS, JavaScript, TypeScript
        </div>

        <div>
          <span className="font-semibold">Libraries & Frameworks: </span>
          Next.js, Express, React, Tailwind, Mongoose
        </div>

        <div>
          <span className="font-semibold">Tools & Technologies: </span>
          Git, Docker, RESTful APIs, WebSockets, Figma, MongoDB, Postman
        </div>

      </div>
    </section>
  )
}