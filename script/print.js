export function setupPrint() {
  document.getElementById("print").addEventListener("click", function () {
    // Make the print section visible if it's hidden
    const printSection = document.getElementById("print-section");
    printSection.classList.remove("hidden");

    const printContent = printSection.innerHTML;
    const originalContent = document.body.innerHTML;

    // Open a new window and load the content to print
    const printWindow = window.open("", "_blank");
    printWindow.document.write(`
      <html>
        <head><title>Print</title>
          <style>
            /* Print-specific styles */
            body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 20px;
            }
            table {
              width: 100%;
              border-collapse: collapse;
            }
            th, td {
              border: 1px solid #ddd;
              padding: 8px;
              text-align: left;
            }
            caption {
              font-size: 20px;
              color: #152D58;
              padding: 10px 0;
            }
            /* Optional: Adjust page size and scaling */
            @media print {
              body {
                width: 100%;
                margin: 0;
                padding: 20px;
              }
              .hidden {
                display: none !important;
              }
            }
          </style>
        </head>
        <body>
          ${printContent}
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();

    // Close the window after printing
    printWindow.onafterprint = () => printWindow.close();

    // Restore the original content after printing
    document.body.innerHTML = originalContent;
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
