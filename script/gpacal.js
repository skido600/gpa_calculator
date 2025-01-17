export function calculateGPA() {
  const btn = document.getElementById("btn");
  const courseRows = document.getElementById("course-rows");
  const calculateBtn = document.querySelector("#calculate-btn");
  const calculatedTable = document.querySelector(".calculated");
  const errorMessage = document.querySelector(".error-message");

  console.log(courseRows);
  let courseCount = 0;

  function addRow() {
    courseCount++;
    const newRow = document.createElement("tr");
    newRow.classList.add("border-b", "border-[#F5F5F5]");
    newRow.innerHTML = `
      <td class="text-center text-[#152D58] font-semibold">${courseCount}</td>
      <td><input type="text" class="px-2 py-1  rounded-[4px] w-full focus:outline-none  border border-[#848484]"  /></td>
      <td><input type="number" class="px-2 py-1 ml-[1px]  rounded-[4px] w-full focus:outline-none  border border-[#848484]" /></td>
      <td><select class=" w-full focus:outline-none border py-1 ml-[1px]  rounded-[4px] border-[#848484]">
         <option value="none">-</option>
          <option value="5">A</option>
          <option value="4">B</option>
          <option value="3">C</option>
          <option value="2">D</option>
          <option value="1">E</option>
          <option value="0">F</option>
      </select></td>
      <td><button class="remove-btn text-red-500"><i class="fa-solid fa-xmark" style="color: #152d58;"></i></button></td>
    `;
    courseRows.appendChild(newRow);

    newRow.querySelector(".remove-btn").addEventListener("click", () => {
      courseRows.removeChild(newRow);
      courseCount--;
      updateRowNumbers();
    });

    updateRowNumbers();
  }

  function updateRowNumbers() {
    const rows = document.querySelectorAll("#course-rows tr");
    rows.forEach((row, index) => {
      row.querySelector("td:first-child").textContent = index + 1;
    });
  }

  calculateBtn.addEventListener("click", () => {
    const courseData = [];
    const gradeMap = { 5: "A", 4: "B", 3: "C", 2: "D", 1: "E", 0: "F" };
    const courseRows = document.querySelectorAll("#course-rows tr");
    let isValid = true;
    let totalCredits = 0;
    let totalGradePoints = 0;

    errorMessage.textContent = "";

    courseRows.forEach((row) => {
      const courseTitle = row
        .querySelector("td:nth-child(2) input")
        .value.trim();
      const credits = parseFloat(
        row.querySelector("td:nth-child(3) input").value
      );
      const gradeValue = parseInt(
        row.querySelector("td:nth-child(4) select").value
      );

      const gradeSelect = row.querySelector("td:nth-child(4) select");
      if (
        !courseTitle ||
        isNaN(credits) ||
        credits <= 0 ||
        gradeSelect.value === "none"
      ) {
        isValid = false;
      }

      if (
        courseTitle &&
        !isNaN(credits) &&
        credits > 0 &&
        gradeValue != null &&
        gradeSelect.value !== "none"
      ) {
        const grade = gradeMap[gradeValue];
        const gradePoint = (credits * gradeValue).toFixed(2);

        courseData.push({
          title: courseTitle,
          credits,
          grade,
          gradeValue,
          gradePoint,
        });

        totalCredits += credits;
        totalGradePoints += credits * gradeValue;
      }
    });

    if (!isValid) {
      errorMessage.textContent =
        "Please ensure all fields are filled in correctly (Course Title, Credits, and Grade).";
      return;
    }

    const tbody = calculatedTable.querySelector("tbody");
    tbody.innerHTML = "";

    courseData.forEach((course) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td class="border border-gray-300 px-4 py-2">${course.title}</td>
        <td class="border border-gray-300 px-4 py-2">${course.credits}</td>
        <td class="border border-gray-300 px-4 py-2">${course.grade}</td>
        <td class="border border-gray-300 px-4 py-2">
          ${course.credits} * ${course.gradeValue} = ${course.gradePoint}
        </td>
      `;
      tbody.appendChild(row);
    });

    const totalRow = document.createElement("tr");
    totalRow.innerHTML = `
      <td colspan="3" class="border border-gray-300 px-4 py-2 text-left font-bold text-[#152D58]">Total Credits</td>
      <td class="border border-gray-300 px-4 py-2">${totalCredits}</td>
    `;
    tbody.appendChild(totalRow);

    let GPA = 0;
    if (totalCredits > 0) {
      GPA = (totalGradePoints / totalCredits).toFixed(2);
    }

    const gpaRow = document.createElement("tr");
    gpaRow.innerHTML = `
      <td colspan="3" class="border border-gray-300 px-4 py-2 text-left font-bold text-[#152D58]">GPA</td>
      <td class="border border-gray-300 px-4 py-2">${GPA}</td>
    `;
    tbody.appendChild(gpaRow);

    calculatedTable.classList.remove("hidden");
  });

  for (let i = 0; i < 1; i++) {
    addRow();
  }

  btn.addEventListener("click", addRow);
}
