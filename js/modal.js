//PAGINA 1

let cerrar_1 = document.querySelectorAll(".cerrar-1")[0];
let abrir_1 = document.querySelectorAll(".contenedor-1")[0];
let modal_1 = document.querySelectorAll(".modal-1")[0];
let modalC_1 = document.querySelectorAll(".contenedor-modal-1")[0];

abrir_1.addEventListener("click", function(e){
  e.preventDefault();
  modalC_1.style.opacity = "1";
  modalC_1.style.visibility = "visible";
  modal_1.classList.toggle("modal-cerrar-1");
});

cerrar_1.addEventListener("click", function(e){
  e.preventDefault();
  modal_1.classList.toggle("modal-cerrar-1");
  setTimeout(function(){
    modalC_1.style.opacity = "0";
    modalC_1.style.visibility = "hidden";
  },500)
});

window.addEventListener("click", function(e){
  if(e.target == modalC_1){
    e.preventDefault();
    modal_1.classList.toggle("modal-cerrar-1");
    setTimeout(function(){
      modalC_1.style.opacity = "0";
      modalC_1.style.visibility = "hidden";
    },250)
  }
});

//PAGINA 2

let cerrar_2 = document.querySelectorAll(".cerrar-2")[0];
let abrir_2 = document.querySelectorAll(".contenedor-2")[0];
let modal_2 = document.querySelectorAll(".modal-2")[0];
let modalC_2 = document.querySelectorAll(".contenedor-modal-2")[0];

abrir_2.addEventListener("click", function(e){
  e.preventDefault();
  modalC_2.style.opacity = "1";
  modalC_2.style.visibility = "visible";
  modal_2.classList.toggle("modal-cerrar-2");
});

cerrar_2.addEventListener("click", function(e){
  e.preventDefault();
  modal_2.classList.toggle("modal-cerrar-2");
  setTimeout(function(){
    modalC_2.style.opacity = "0";
    modalC_2.style.visibility = "hidden";
  },500)
});

window.addEventListener("click", function(e){
  if(e.target == modalC_2){
    e.preventDefault();
    modal_2.classList.toggle("modal-cerrar-2");
    setTimeout(function(){
      modalC_2.style.opacity = "0";
      modalC_2.style.visibility = "hidden";
    },250)
  }
});

//PAGINA 3

let cerrar_3 = document.querySelectorAll(".cerrar-3")[0];
let abrir_3 = document.querySelectorAll(".contenedor-3")[0];
let modal_3 = document.querySelectorAll(".modal-3")[0];
let modalC_3 = document.querySelectorAll(".contenedor-modal-3")[0];

abrir_3.addEventListener("click", function(e){
  e.preventDefault();
  modalC_3.style.opacity = "1";
  modalC_3.style.visibility = "visible";
  modal_3.classList.toggle("modal-cerrar-3");
});

cerrar_3.addEventListener("click", function(e){
  e.preventDefault();
  modal_3.classList.toggle("modal-cerrar-3");
  setTimeout(function(){
    modalC_3.style.opacity = "0";
    modalC_3.style.visibility = "hidden";
  },500)
});

window.addEventListener("click", function(e){
  if(e.target == modalC_3){
    e.preventDefault();
    modal_3.classList.toggle("modal-cerrar-3");
    setTimeout(function(){
      modalC_3.style.opacity = "0";
      modalC_3.style.visibility = "hidden";
    },250)
  }
});

