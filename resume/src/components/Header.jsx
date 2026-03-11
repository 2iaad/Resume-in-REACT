import { useState } from 'react'

export default function Header() {
  const [name, setName] = useState("Ziyad Derfoufi")
  const [title, setTitle] = useState("Junior Software Engineer")

  const [phone, setPhone] = useState("+212 697914807")
  const [email, setEmail] = useState("ziadderfoufi@icloud.com")
  const [linkedin, setLinkedin] = useState("https://www.linkedin.com/in/ziyadderfoufi/")

  return (
    <div className="flex flex-col items-center gap-2">
      <h1 className="text-3xl font-bold">{name}</h1>
      <p className="text-gray-600">{title}</p>

      <div className="flex gap-2 text-sm text-gray-500">
        <p>{phone}</p>
        |
        <p>{email}</p>
        |
        <a
          href="https://www.linkedin.com/in/ziyadderfoufi/"
          className="text-blue-600"
        >
          {linkedin}
        </a>
      </div>
    </div>
  )
}