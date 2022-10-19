const LLAMADA:HTMLFormElement = document.querySelector("form")!;
//¿Las constantes en javaScript siguen la misma nomenclatura que en java?

LLAMADA.addEventListener("submit", ()=>{
    alert("Ejecutando una arrow function");
})