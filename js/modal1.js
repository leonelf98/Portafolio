let cerrar = document.querySelectorAll(".cerrar")[0];
let abrir = document.querySelectorAll(".contenedor")[0];
let modal = document.querySelectorAll(".modal-")[0];
let modalC = document.querySelectorAll(".contenedor-modal")[0];

abrir.addEventListener("click", function(e){
  e.preventDefault();
  modalC.style.opacity = "1";
  modalC.style.visibility = "visible";
  modal.classList.toggle("modal-cerrar");
});

cerrar.addEventListener("click", function(e){
  e.preventDefault();
  modal.classList.toggle("modal-cerrar");
  setTimeout(function(){
    modalC.style.opacity = "0";
    modalC.style.visibility = "hidden";
  },500)
});

window.addEventListener("click", function(e){
  if(e.target == modalC){
    e.preventDefault();
    modal.classList.toggle("modal-cerrar");
    setTimeout(function(){
      modalC.style.opacity = "0";
      modalC.style.visibility = "hidden";
    },250)
  }
});
