import navBar from "../../modules/navBar.js";
import modalNav from "../../modules/modalNav.js";
import getForm from "../../modules/formContacto.js";
import booking from "../../modules/booking.js";
import getForm1 from "../../modules/formProceso.js";


function appInit() {
  navBar();
  modalNav();
  getForm();
  booking()
  getForm1()
}
appInit();

