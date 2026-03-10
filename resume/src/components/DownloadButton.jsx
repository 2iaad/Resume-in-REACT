import html2pdf from "html2pdf.js"

export default function DownloadButton() {

  const downloadPDF = () => {
    const element = document.getElementById("resume")

    html2pdf().set({
      margin: 0,
      filename: "Ziyad-Derfoufi-CV.pdf",
      html2canvas: { scale: 2 },
      jsPDF: { format: "a4", orientation: "portrait" }
    })
      .from(element)
      .save()
  }

  return (
    <button
      onClick={downloadPDF}
      className="bg-gray-900 text-white px-4 py-2 rounded"
    >
      Download PDF
    </button>
  )
}