export function setupPrint() {
  document.getElementById("print").addEventListener("click", function () {
    const printContent = document.getElementById("print-section").innerHTML;
    const originalContent = document.body.innerHTML;

    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent;
    location.reload();
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
