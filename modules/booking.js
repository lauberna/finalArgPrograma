let btn = document.getElementById("booking");
let form = document.getElementById("modForm2");
let formC = document.getElementById("container");
let cont = document.getElementById("cont0");
let btnSalir = document.getElementById("exit");
form.style.opacity = 0;
export default function booking() {
  btn.addEventListener("click", function () {
    if (formC.classList.contains("none")) {
      formC.classList.remove("none");
      cont.style.filter = "blur(30px)";
      cont.style.opacity = 0.7;
      form.style.opacity = 1;
      btn.style.display = "none";
    }
  });

  btnSalir.addEventListener("click", function () {
    formC.classList.add("none");
    cont.style.filter = "blur(0px)";
    cont.style.opacity = 1;
    form.style.opacity = 0;
    btn.style.display = "block";
  });
}
