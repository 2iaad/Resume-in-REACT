export default function DownloadButton() {

  const downloadPDF = () => {
    // console.log(window.innerHeight)
    // console.log(window.innerWidth)

    // window.close()

    window.print()
  }

  return (
    <button
      onClick={downloadPDF}
      className="bg-gray-900 text-white px-4 py-2 mt-6 rounded print:hidden"
    >
      Download PDF
    </button>
  )
}