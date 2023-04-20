let inpName = document.getElementById("inpName1");
let inpMail = document.getElementById("inpMail1");
let inpEvento = document.getElementById("inpEvento");
let inpCantH = document.getElementById("inpCantH");
let inpFecha = document.getElementById("inpFecha");
let send = document.getElementById("enviarBtn");
let err = document.getElementById("err2")
err.style.opacity = 0;

import { hide } from "./booking.js";

//expresiones regulares para validar
const regexNombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function getForm1() {
  function validateName() {
    if (regexNombre.test(inpName.value)) {
      inpName.classList.remove("err");
      inpName.classList.add("pass");

      return true;
    } else {
      inpName.classList.add("err");
      inpName.classList.remove("pass");
      return false;
    }
  }
  function validateEmail() {
    if (regexEmail.test(inpMail.value)) {
      inpMail.classList.remove("err");
      inpMail.classList.add("pass");
      return true;
    } else {
      inpMail.classList.add("err");
      inpMail.classList.remove("pass");
      return false;
    }
  }
  function validateEvento() {
    if (inpEvento.value.trim() != "") {
      inpEvento.classList.remove("err");
      inpEvento.classList.add("pass");
      return true;
    } else {
      inpEvento.classList.add("err");
      inpEvento.classList.remove("pass");
      return false;
    }
  }
  function validateHoras() {
    if (inpCantH.value) {
      inpCantH.classList.remove("err");
      inpCantH.classList.add("pass");
      return true;
    } else {
      inpCantH.classList.add("err");
      inpCantH.classList.remove("pass");
      return false;
    }
  }

  inpName.addEventListener("input", validateName);
  inpMail.addEventListener("input", validateEmail);
  inpEvento.addEventListener("input", validateEvento);
  inpCantH.addEventListener("input", validateHoras);

  function validarForm() {
    let passName = validateName();
    let passEmail = validateEmail();
    let passEvento = validateEvento();
    let passHoras = validateHoras();
    if (passName && passEmail && passEvento && passHoras) {
      let consulta = new Consulta(
        inpName.value,
        inpMail.value,
        inpFecha.value,
        inpEvento.value,
        inpCantH.value
      );
      Swal.fire("Succes!", `Datos enviados correctamente, recibira una respuesta en las proximas horas`, "success");
      let doc = new jsPDF()
      doc.text(20,20, "nombre: " + consulta.nombre)
      doc.text(20,30, "mail: " + consulta.mail)
      doc.text(20,40, "evento: " + consulta.evento)
      doc.text(20,50, "cantidad de horas: " + consulta.horas)
      doc.text(20,60, "fecha: " + consulta.fecha)
      doc.save("consulta.pdf")
      setTimeout(function () {
        inpCantH.value = "";
        inpEvento.value = "";
        inpFecha.value = "";
        inpMail.value = "";
        inpName.value = "";
      },500);
      hide()
      return consulta;
    }else{
      err.style.opacity = 1;
      setTimeout(() => {
        err.style.opacity = 0;
      },1000);
    }
  }

  function Consulta(nombre, mail, fecha, evento, horas) {
    this.nombre = nombre;
    this.mail = mail;
    this.fecha = fecha;
    this.evento = evento;
    this.horas = horas;
  }

  send.addEventListener("click", function (e) {
    e.preventDefault();
    validarForm();
  });
}
