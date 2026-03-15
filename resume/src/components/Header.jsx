import { FaLinkedin, FaGithub } from "react-icons/fa"

export default function Header({ data }) {
  const { name, title, phone, email, linkedin, github } = data

  const emailLink = email ? `mailto:${email}` : undefined
  const linkedinLink = linkedin
    ? `https://www.linkedin.com/in/${linkedin}/`
    : undefined
  const githubLink = github ? `https://www.github.com/${github}` : undefined

  return (
    <div className="flex flex-col items-center gap-2">
      <h1 className="text-3xl font-bold">{name}</h1>
      <p className="text-gray-600">{title}</p>

      <div className="flex gap-2 text-sm text-gray-500">
        <a
          href={emailLink}
          className="underline"
          target="_blank"
          rel="noreferrer"
        >
          <p>{email}</p>
        </a>
        |
        <p>{phone}</p>
        |
        <a
          href={linkedinLink}
          className="flex justify-center underline items-center gap-1"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className='text-blue-600' /> {linkedin}
        </a>
        |
        <a
          href={githubLink}
          className="flex justify-center underline items-center gap-1 "
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className='text-gray-600' /> {github}
        </a>
      </div>
    </div>
  )
}