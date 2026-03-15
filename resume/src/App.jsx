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
    // <div className="flex flex-row bg-amber-800">
    //   <aside className="border-2 w-250">

    //   </aside>

      <div className="flex flex-col items-center w-full min-h-screen text-[15px]">
        <DownloadButton />
        <div id='resume' className="flex w-[825px] min-h-[1175px] max-h-[1175px] m-6 bg-white shadow-lg overflow-clip">
          <div className="flex flex-col self-start gap-3 mx-10 my-8 max-h-[1105px] overflow-clip">
            <Header />
            <Summary />
            <Skills />
            {/* <Experience /> */}
            <Education />
            <Projects />
          </div>
        </div>
      </div>
    // </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)