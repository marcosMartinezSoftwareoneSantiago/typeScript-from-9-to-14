"use strict";
const formularioEjercicio14 = document.querySelector("form");
const introduccionTexto = document.querySelector("#textoAIntroducir");
const salidaTexto = document.querySelector("#mostrarIntroduccion");
introduccionTexto.addEventListener("keyup", () => {
    let caracter = introduccionTexto.value;
    salidaTexto.textContent = caracter;
});
