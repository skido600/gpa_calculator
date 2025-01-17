export function setupTeams() {
  const teams = [
    { Name: "Ebisi Chinecherem Leonard", Reg: "NS/CSC/22/7428" },
    { Name: "Uzoka PraiseGod Chimpuluime", Reg: "NS/CSC/22/7494" },
  ];

  const teamMain = document.getElementById("teams");
  const team = document.querySelector("#team");
  const show = document.querySelector(".show ");
  team.addEventListener("click", () => {
    show.classList.toggle("show_me");
  });

  teams.forEach((team) => {
    const listItem = document.createElement("li");
    listItem.className = "mt-4";
    listItem.innerHTML = `${team.Name}<br>${team.Reg}`;
    teamMain.appendChild(listItem);
  });
}
