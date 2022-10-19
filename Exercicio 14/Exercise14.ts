const formularioEjercicio14:HTMLFormElement = document.querySelector("form")!;
const introduccionTexto:HTMLInputElement = document.querySelector("#textoAIntroducir")!;
const salidaTexto:HTMLDivElement = document.querySelector("#mostrarIntroduccion")!;


introduccionTexto.addEventListener("keyup", ()=>{
    let caracter:string = introduccionTexto.value;
    salidaTexto.textContent =caracter;
})