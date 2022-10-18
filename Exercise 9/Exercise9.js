"use strict";
let formulario = document.querySelector('form');
let primerNumero = document.querySelector('#primer-numero');
let segundoNumero = document.querySelector('#segundo-numero');
formulario.addEventListener("submit", () => {
    let n1 = Number(primerNumero.value);
    let n2 = Number(segundoNumero.value);
    alert(`La suma de ${n1} y ${n2} es ${n1 + n2}`);
});
