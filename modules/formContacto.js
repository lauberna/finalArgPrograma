let inpName = document.getElementById("inpName");
let inpMail = document.getElementById("inpMail");
let inpTel = document.getElementById("inpTel");
let inpMsj = document.getElementById("inpMsj");
let send = document.getElementById("enviar");
let err = document.getElementById("err1");
err.style.opacity = "0";
import enviarDatos from "./enviarDatos.js";

//expresiones regulares para validar
const regexNombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regexTelefono = /^\d{9,14}$/;

export default function getForm() {
  function validateName() {
    if (regexNombre.test(inpName.value)) {
      inpName.classList.remove("err");
      inpName.classList.add("pass");
      return true;
    } else {
      inpName.classList.remove("pass");
      err.style.display = "block";
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
  function validateTel() {
    if (regexTelefono.test(inpTel.value)) {
      inpTel.classList.remove("err");
      inpTel.classList.add("pass");
      return true;
    } else {
      inpTel.classList.add("err");
      inpTel.classList.remove("pass");
      return false;
    }
  }
  function validateMsj() {
    if (inpMsj.value.trim() !== "") {
      inpMsj.classList.remove("err");
      inpMsj.classList.add("pass");
      return true;
    } else {
      inpMsj.classList.add("err");
      inpMsj.classList.remove("pass");
      return false;
    }
  }

  inpName.addEventListener("input", validateName);
  inpMail.addEventListener("input", validateEmail);
  inpTel.addEventListener("input", validateTel);
  inpMsj.addEventListener("input", validateMsj);

  function validarForm() {
    let passName = validateName();
    let passEmail = validateEmail();
    let passTel = validateTel();
    let passMsj = validateMsj();
    if (passName && passEmail && passTel && passMsj) {
      let consulta = new Consulta(
        inpName.value,
        inpMail.value,
        inpTel.value,
        inpMsj.value
      );
      enviarDatos(consulta);
      setTimeout(function () {
        inpMail.value = "";
        inpMsj.value = "";
        inpName.value = "";
        inpTel.value = "";
      }, 500);

      return consulta;
    } else {
      err.style.opacity = 1;
      setTimeout(() => {
        err.style.opacity = 0;
      },1000);
    }
  }

  function Consulta(nombre, mail, telefono, mensaje) {
    this.nombre = nombre;
    this.mail = mail;
    this.telefono = telefono;
    this.mensaje = mensaje;
  }

  send.addEventListener("click", function (e) {
    e.preventDefault();
    validarForm();
  });
}
