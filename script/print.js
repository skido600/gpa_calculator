export function setupPrint() {
  document.getElementById("print").addEventListener("click", function () {
    const printContent = document.getElementById("print-section").innerHTML;
    const originalContent = document.body.innerHTML;

    // Open a new window and load the content to print
    const printWindow = window.open("", "_blank");
    printWindow.document.write(`
      <html>
        <head><title>Print</title></head>
        <body>
          ${printContent}
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();

    // Close the window after printing
    printWindow.onafterprint = () => printWindow.close();
  });

  let download_btn = document.getElementById("print");
  download_btn.addEventListener("click", function () {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const elementHTML = document.getElementById("print-section");

    doc.html(elementHTML, {
      callback: function (doc) {
        doc.save("result.pdf");
      },
      x: 10,
      y: 10,
    });
  });
}
