let redes = [
  {
    red: "instagram",
    url: "https://www.instagram.com/lauberna_music/",
    img: "../assets/images/âPngtreeâinstagram icon_8704817.png",
  },
  {
    red: "soundcloud",
    url: "https://soundcloud.com/lau-sync",
    img: "../assets/images/pngwing.com.png",
  },
  {
    red: "spotify",
    url: "https://open.spotify.com/artist/247asEkn99lGhlN9jmMepf?si=ZniVdJHhT8WVnsshbWuQnw",
    img: "../assets/images/pngwing.com-2.png",
  },
];
export function crearRedesNav(){
  let div = document.createElement("div");
    navbar.appendChild(div);
    div.classList.add("redes");
    //Bucle que recorre el array anterior, y por cada posicion crea una red social nueva en el nav
    redes.forEach((red) => {
      let a = document.createElement("a");
      a.setAttribute("href", red.url);
      a.setAttribute("target", "_blank");
      let img = document.createElement("img");
      img.setAttribute("src", red.img);
      img.classList.add("red");
      a.appendChild(img);
      div.appendChild(a);
    });
}
let cont = document.getElementById("redesCont")
function crearRedesSection(){
  let div = document.createElement("div");
    cont.appendChild(div);
    div.classList.add("redes");
    div.classList.add("abs");
    //Bucle que recorre el array anterior, y por cada posicion crea una red social nueva en el nav
    redes.forEach((red) => {
      let a = document.createElement("a");
      a.setAttribute("href", red.url);
      a.setAttribute("target", "_blank");
      let img = document.createElement("img");
      img.setAttribute("src", red.img);
      img.classList.add("red");
      a.appendChild(img);
      div.appendChild(a);
    });
}
crearRedesSection()

