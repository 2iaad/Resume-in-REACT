export default function Header() {
  const obj = {
    name: "Ziyad Derfoufi",
    title: "Junior Software Engineer",
    phone: "+212 697914807",
    email: "ziadderfoufi@icloud.com",
    linkedin: "https://www.linkedin.com/in/ziyadderfoufi/"
    // github: "https://github.com/2iaad"
  }
  
  return (
    <div className="flex flex-col items-center gap-2">
      <h1 className="text-3xl font-bold">{obj.name}</h1>
      <p className="text-gray-600">{obj.title}</p>

      <div className="flex gap-2 text-sm text-gray-500">
        <p>{obj.phone}</p>
        <p>{obj.email}</p>
        <a
          href="https://www.linkedin.com/in/ziyadderfoufi/"
          className="text-blue-600"
        >
          {obj.linkedin}
        </a>
      </div>
    </div>
  )
}