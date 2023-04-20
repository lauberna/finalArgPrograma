import click from "./sections.js";
import { crearRedesNav } from "./redes.js";
//HEADER
//Crear links de navegacion, asignandoles un evento a cada uno con el cual
//poder manejar las secciones de la pag, mostrando un loader entre ellas al cambiar.
export default function navBar() {
  let navbar = document.getElementById("navbar");
  let links = document.getElementsByClassName("element");

  function createLinks() {
    //CREO LOS LINK DE NAVEGACION
    let navPoints = ["Home", "About Us", "Contact Us", "Music"];
    navPoints.forEach((element, index) => {
      let li = document.createElement("li");
      li.classList.add(`element`);
      li.setAttribute("data-section", `section-${index}`);
      li.setAttribute("id", element.replace(/\s+/g, ""))
      li.textContent = element;
      navbar.appendChild(li);
    });
    //Recorro cada uno de los navPoints creados anteriormente para asignarles a cada uno un evento con la funcion click
    Array.from(links).forEach((link) => {
      link.addEventListener("click", click);
    });
    
    //CREO LAS REDES SOCIALES
    crearRedesNav()
    
  }

  //Espero que cargue la pag para poder crear correctamente los elementos
  window.addEventListener("load", createLinks);
}
