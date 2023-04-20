let btn = document.getElementById("btn");
let mod = document.getElementById("mod");
let main = document.getElementById("main");
let nCont = document.getElementById("navContainer");
let form = document.getElementById("modForm2");
nCont.style.display = "none";
mod.style.display = "none";
export default function modalNav() {
  btn.addEventListener("click", function () {
    if (mod.style.opacity == 0.5) {
      hide();
    } else {
      show();
    }
  });
}

export function hide() {
  mod.style.opacity = 0;
  main.style.filter = "blur(0px)";
  nCont.style.opacity = 0;
  btn.style.rotate = "-180deg";
  mod.style.display = "none";
  setTimeout(() => {
    nCont.style.display = "none";
  }, 100);
}

export function show() {
  nCont.style.display = "block";
  mod.style.opacity = 0.5;
  main.style.filter = "blur(30px)";
  btn.style.rotate = "270deg";
  nCont.style.opacity = 1;
  mod.style.display = "block";
}
