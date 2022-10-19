"use strict";
const formularioDeUsuario = document.querySelector("form");
const usuario = document.querySelector("#username");
formularioDeUsuario.addEventListener("submit", () => {
    let datoIntroducido = usuario.value;
    let mensaje;
    let ventanaEmergente = window.open(undefined, "nueva ventana", undefined);
    switch (true) {
        case (emptyFieldValidator(datoIntroducido)):
            mensaje = "El campo username es obligatorio ";
            break;
        case (notAnumberValidator(datoIntroducido)):
            mensaje = "Todo correcto ";
            break;
        default:
            mensaje = "El campo username no puede tener números ";
            break;
    }
    ventanaEmergente.document.write(mensaje);
});
function emptyFieldValidator(field) {
    return field.length === 0;
}
function notAnumberValidator(field) {
    let tieneNumeros = false;
    for (let i = 0; i < field.length; i++) {
        if (field.charAt(i) === '1' || field.charAt(i) === '2' || field.charAt(i) === '3' || field.charAt(i) === '4' || field.charAt(i) === '5' || field.charAt(i) === '6' || field.charAt(i) === '7' || field.charAt(i) === '8' || field.charAt(i) === '9' || field.charAt(i) === '0') {
            tieneNumeros = true;
        }
    }
    return !tieneNumeros;
}
