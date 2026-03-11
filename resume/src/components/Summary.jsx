import { useState } from 'react'

export default function Summary() {

  const defaultSummary = "Graduate of 1337 Coding School with strong software engineering and full-stack development skills. Experienced building collaborative web applications using Git and modern technologies to deliver reliable solutions."
  const [summary, setSummary] = useState(defaultSummary) // "I am a passionate software engineer with a strong foundation in full-stack development. I have successfully completed the intensive 1337 Coding School program, where I honed my skills in software engineering and web development. My experience includes building collaborative web applications using modern technologies and Git for version control, ensuring the delivery of reliable and efficient solutions.";

  const editSummary = () => {

  }

  return (
    <section>
      <h2 className="text-xl font-semibold mb-1">Summary</h2>
      <hr className='mb-2'></hr>

      <p className="text-gray-700">
        {summary}
      </p>
    </section>
  )
}