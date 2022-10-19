"use strict";
const primer = () => { return "primer callback"; };
const segundo = () => { return "segundo callback"; };
function queFuncionSaldra(primeraFuncion, segundaFuncion) {
    let retorno;
    if (Math.random() < 0.5) {
        retorno = primeraFuncion();
    }
    else {
        retorno = segundaFuncion();
    }
    return retorno;
}
alert(queFuncionSaldra(primer, segundo));
