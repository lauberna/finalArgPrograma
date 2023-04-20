let sections = document.getElementsByClassName("section");
import { hide } from "./modalNav.js";

window.addEventListener("load", function () {
  showSection("section-0");
});
function hideSections() {
  Array.from(sections).forEach((section) => {
    section.classList.add("none");
  });
}
export function showSection(sectionID) {
  hideSections();
  let section = document.getElementById(sectionID);
  section.classList.remove("none");
}

export default function click() {
  let sectionID = this.getAttribute("data-section");
  let sectionAct = document.getElementById(sectionID);
  hide();
  if (sectionAct.classList.contains("none")) {
    hideSections();
    showSection(sectionID);
  }
}
