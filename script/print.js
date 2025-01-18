export function setupPrint() {
  document.getElementById("print").addEventListener("click", async function () {
    const { jsPDF } = window.jspdf;

    // Get the element to convert
    const element = document.getElementById("print-section");

    // Convert element to canvas
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    // Create jsPDF instance
    const pdf = new jsPDF("p", "mm", "a4");

    // Calculate dimensions
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    // Add image to PDF
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

    // Save the PDF
    pdf.save("result.pdf");
  });
}
