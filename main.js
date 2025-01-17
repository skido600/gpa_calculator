import { calculateGPA } from "./script/gpacal.js";
import { setupMenu } from "./script/menutoggle.js";
import { setupPrint } from "./script/print.js";
import { Suggest } from "./script/suggest.js";
import { setupTeams } from "./script/Team_List.js";

document.addEventListener("DOMContentLoaded", () => {
  calculateGPA();
  setupTeams();
  setupMenu();
  setupPrint();
  Suggest();
});
