"use strict";
let form = document.querySelector('form');
let min = document.querySelector('#numero-min');
let max = document.querySelector('#numero-max');
form.addEventListener("submit", () => {
    let n1 = Number(min.value);
    let n2 = Number(max.value);
    console.log(valorIntervalo(n1, n2));
});
function valorIntervalo(minimo, maximo) {
    let alcance = maximo - minimo;
    let valor = Math.round(Math.random() * alcance + minimo);
    return valor;
}
