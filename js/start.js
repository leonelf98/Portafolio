let inicio = document.querySelectorAll("#start")[0];
let presentacion = document.querySelectorAll("#presentacion")[0];

function pre_home() {
  presentacion.style.width = "0px";
}

function home() {
  inicio.style.top = "-150%";
}

setTimeout (pre_home, 500);
setTimeout (home, 2000);
