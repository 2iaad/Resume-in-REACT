import Header from "./components/Header"
import Summary from "./components/Summary"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Education from "./components/Education"
import Projects from "./components/Projects"
import DownloadButton from "./components/DownloadButton"

import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import './index.css'

export default function App() {
  return (
    <div className="flex flex-col gap-4 items-center p-5 bg-gray-100 min-h-screen">

      <DownloadButton />
      <div id='resume' className="flex flex-col gap-4 w-[652px] min-h-264 p-10 bg-white shadow-lg rounded-xl">
        <Header />
        <Summary />
        <Skills />
        <Experience />
        <Education />
        <Projects />
      </div>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)