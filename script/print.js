export function setupPrint() {
  document.getElementById("print").addEventListener("click", function () {
    printJS({
      printable: "print-section", // The ID of the section to print
      type: "html", // Type of content
      style: `
          body { font-family: Arial, sans-serif; margin: 20px; }
          table { width: 100%; border-collapse: collapse; }
          th, td { border: 1px solid #ddd; padding: 8px; }
        `,
    });
  });
}
