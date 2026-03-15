import { useState } from "react"
import Header from "./components/Header"
import Summary from "./components/Summary"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Education from "./components/Education"
import Projects from "./components/Projects"
import DownloadButton from "./components/DownloadButton"
import FormPanel from "./components/FormPanel"

import { createRoot } from "react-dom/client"
import { StrictMode } from "react"
import "./index.css"

const defaultResume = {
  sectionOrder: [
    "header",
    "summary",
    "skills",
    "experience",
    "education",
    "projects"
  ],
  header: {
    name: "Ziyad Derfoufi",
    title: "Junior Software Engineer",
    phone: "+212 697 91 48 07",
    email: "ziyad@zderfoufi.dev",
    linkedin: "ziyadderfoufi",
    github: "2iaad"
  },
  summary:
    "Full-Stack Engineer and 1337 Coding School graduate. Experienced in building full-stack web applications and systems-level projects. Known for strong debugging skills, clean code, and building maintainable architectures.",
  skills: {
    groupOrder: ["languages", "frameworks", "tools"],
    languages: ["Bash", "C/C++", "HTML/CSS", "JavaScript", "TypeScript"],
    frameworks: ["Next.js", "Express", "React", "Tailwind", "Mongoose"],
    tools: [
      "Git",
      "Docker",
      "RESTful APIs",
      "WebSockets",
      "Figma",
      "MongoDB",
      "Postman"
    ]
  },
  experience: [
    {
      title: "Leets",
      position: "Full Stack Developer",
      duration: "Novemeber 2025 • February 2026",
      technologies: "TypeScript, Express, React, Next.js, Tailwind, WebSockets",
      description:
        "Block-based writing tool with embedded chat combining documentation, collaboration, and blogging in one seamless experience."
    }
  ],
  education: [
    {
      degree: "Computer Science",
      duration: "Novemeber 2023 – February 2026",
      school: "1337 Coding School – Khouribga"
    },
    {
      degree: "English Studies",
      duration: "October 2021 – May 2023",
      school: "American Language Center - Mohammedia"
    },
    {
      degree: "Baccalaureate in Physical Sciences",
      duration: "September 2020 – June 2021",
      school: "Sharif El Idrissi High School - Benslimane"
    }
  ],
  projects: [
    {
      title: "Leets",
      tech: "TypeScript, Express, React, Next.js, Tailwind, MongoDB, WebSockets",
      description: "Full-Stack Developer & Project Manager",
      tasks: [
        "Engineered a secure authentication system using JWT, session management and password hashing in a microservices architecture, strengthening platform security and login reliability.",
        "Delivered a real-time chat system using Socket.IO, implementing an event-driven architecture with persistent storage that resulted in a responsive social messaging."
      ]
    },
    {
      title: "InfraOrbit",
      tech: "Docker, Docker Compose",
      description: "Backend Infrastructure Developer",
      tasks: [
        "Deployed a multi-service web app with Docker, Nginx, MySQL, and WordPress, managing containers, service communication, and secure access with SSL."
      ]
    },
    {
      title: "Http Server",
      tech: "C++, Sockets",
      description: "Software Engineer",
      tasks: [
        "Developed an HTTP/1.1 web server in C++ from scratch that mimics NGINX behavior handling multiple client requests and serving static and dynamic content."
      ]
    },
    {
      title: "Unix CLI",
      tech: "C, Bash",
      description: "Software Engineer",
      tasks: [
        "Implemented a custom Unix shell supporting command execution, pipes, redirections, and built-in commands with reliable parsing and error handling."
      ]
    }
  ]
}

export default function App() {
  const [resume, setResume] = useState(defaultResume)

  const updateHeader = (field, value) => {
    setResume((prev) => ({
      ...prev,
      header: { ...prev.header, [field]: value }
    }))
  }

  const updateSummary = (value) => {
    setResume((prev) => ({ ...prev, summary: value }))
  }

  const updateSkillsGroup = (group, value) => {
    setResume((prev) => ({
      ...prev,
      skills: { ...prev.skills, [group]: value }
    }))
  }

  const moveItem = (list, fromIndex, toIndex) => {
    if (toIndex < 0 || toIndex >= list.length) return list
    const next = [...list]
    const [moved] = next.splice(fromIndex, 1)
    next.splice(toIndex, 0, moved)
    return next
  }

  const moveSection = (fromIndex, toIndex) => {
    setResume((prev) => ({
      ...prev,
      sectionOrder: moveItem(prev.sectionOrder, fromIndex, toIndex)
    }))
  }

  const moveSkillsGroup = (fromIndex, toIndex) => {
    setResume((prev) => ({
      ...prev,
      skills: {
        ...prev.skills,
        groupOrder: moveItem(prev.skills.groupOrder, fromIndex, toIndex)
      }
    }))
  }

  const moveSkillItem = (group, fromIndex, toIndex) => {
    setResume((prev) => ({
      ...prev,
      skills: {
        ...prev.skills,
        [group]: moveItem(prev.skills[group], fromIndex, toIndex)
      }
    }))
  }

  const updateArrayItem = (key, index, field, value) => {
    setResume((prev) => ({
      ...prev,
      [key]: prev[key].map((item, idx) =>
        idx === index ? { ...item, [field]: value } : item
      )
    }))
  }

  const addArrayItem = (key, item) => {
    setResume((prev) => ({
      ...prev,
      [key]: [...prev[key], item]
    }))
  }

  const removeArrayItem = (key, index) => {
    setResume((prev) => ({
      ...prev,
      [key]: prev[key].filter((_, idx) => idx !== index)
    }))
  }

  const updateProjectTask = (projectIndex, taskIndex, value) => {
    setResume((prev) => ({
      ...prev,
      projects: prev.projects.map((project, idx) => {
        if (idx !== projectIndex) return project
        return {
          ...project,
          tasks: project.tasks.map((task, tIdx) =>
            tIdx === taskIndex ? value : task
          )
        }
      })
    }))
  }

  const addProjectTask = (projectIndex) => {
    setResume((prev) => ({
      ...prev,
      projects: prev.projects.map((project, idx) => {
        if (idx !== projectIndex) return project
        return { ...project, tasks: [...project.tasks, ""] }
      })
    }))
  }

  const removeProjectTask = (projectIndex, taskIndex) => {
    setResume((prev) => ({
      ...prev,
      projects: prev.projects.map((project, idx) => {
        if (idx !== projectIndex) return project
        return {
          ...project,
          tasks: project.tasks.filter((_, tIdx) => tIdx !== taskIndex)
        }
      })
    }))
  }

  return (
    <div className="flex min-h-screen bg-gray-100 text-[15px]">
      <aside className="sticky top-0 h-screen w-full max-w-[420px] border-r border-gray-200 bg-white p-6 overflow-y-auto print:hidden">
        <FormPanel
          resume={resume}
          updateHeader={updateHeader}
          updateSummary={updateSummary}
          updateSkillsGroup={updateSkillsGroup}
          moveSection={moveSection}
          moveSkillsGroup={moveSkillsGroup}
          moveSkillItem={moveSkillItem}
          updateArrayItem={updateArrayItem}
          addArrayItem={addArrayItem}
          removeArrayItem={removeArrayItem}
          updateProjectTask={updateProjectTask}
          addProjectTask={addProjectTask}
          removeProjectTask={removeProjectTask}
        />
      </aside>

      <main className="flex flex-1 flex-col items-center">
        <DownloadButton />
        <div
          id="resume"
          className="flex w-[825px] min-h-[1175px] max-h-[1175px] m-6 bg-white shadow-lg overflow-clip"
        >
          <div className="flex flex-col self-start gap-4 mx-10 my-8 max-h-[1105px] overflow-clip font-calibri">
            {resume.sectionOrder.map((section) => {
              if (section === "header") {
                return <Header key={section} data={resume.header} />
              }
              if (section === "summary") {
                return <Summary key={section} summary={resume.summary} />
              }
              if (section === "skills") {
                return (
                  <Skills
                    key={section}
                    skills={resume.skills}
                    groupOrder={resume.skills.groupOrder}
                  />
                )
              }
              if (section === "experience") {
                return (
                  <Experience key={section} experience={resume.experience} />
                )
              }
              if (section === "education") {
                return (
                  <Education key={section} education={resume.education} />
                )
              }
              if (section === "projects") {
                return <Projects key={section} projects={resume.projects} />
              }
              return null
            })}
          </div>
        </div>
      </main>
    </div>
  )
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
)