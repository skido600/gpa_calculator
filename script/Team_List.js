export function setupTeams() {
  const teams = [
    { Name: "Ebisi Chinecherem Leonard", Reg: "NS/CSC/22/7428" },
    { Name: "Uzoka PraiseGod Chimpuluime", Reg: "NS/CSC/22/7494" },
    { Name: "Orji Bethel Chidera", Reg: "NS/CSC/24/9154" },
    {Name:"Sunday Jennifer Osemhenkhian", Reg: "NS/CSC/22/7545"},
    {Name:"Oyibo Nwachukwu",Reg:"NS/CSC/23/8284"},
    {Name:"Oguchi chukwuemeka",Reg:"NS/CSC/22/7597"},
    {Name:"Igboke Michael Chidera",Reg:"NS/CSC/22/7441"},
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
