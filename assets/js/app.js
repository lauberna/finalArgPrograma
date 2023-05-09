/* import { carousel } from "../../modules/Carousel.js"; */
import navBar from "../../modules/navBar.js";
import validateForm from "../../modules/validateForm.js";
import { sections } from "../../modules/sections.js";
import { createElements } from "../../modules/redes.js";

function appInit() {
  navBar();
  sections();
  validateForm();
}
appInit();
