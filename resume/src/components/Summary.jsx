export default function Summary({ summary }) {
  if (!summary?.trim()) return null

  return (
    <section>
      <h2 className="text-xl mb-1">Summary</h2>
      <hr className='mb-3'></hr>

      <p className="text-gray-700">
        {summary}
      </p>
    </section>
  )
}

