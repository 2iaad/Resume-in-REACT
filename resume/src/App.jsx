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
    <div className="flex flex-col items-center bg-gray-100 min-h-screen">

      // TODO: fix this
      <DownloadButton />
      <div id='resume' className="w-[825px] max-h-[1175px] m-6 bg-white shadow-lg overflow-clip">
        <div className="bg-amber-600 flex flex-col gap-4 px-10 py-20 overflow-hidden">
          <Header />
          <Summary />
          <Skills />
          <Experience />
          <Education />
          <Projects />
        </div>
      </div>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)