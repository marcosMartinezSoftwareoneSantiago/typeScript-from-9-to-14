let formulario:HTMLFormElement =document.querySelector('form')!;
let primerNumero:HTMLInputElement =document.querySelector('#primer-numero')!;
let segundoNumero:HTMLInputElement =document.querySelector('#segundo-numero')!;


formulario.addEventListener("submit", () => {
    let n1:number = Number(primerNumero.value);
    let n2:number = Number(segundoNumero.value);
    alert(`La suma de ${n1} y ${n2} es ${n1+n2}`);
})
