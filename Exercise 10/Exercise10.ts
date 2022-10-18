let form:HTMLFormElement =document.querySelector('form')!;
let min:HTMLInputElement =document.querySelector('#numero-min')!;
let max:HTMLInputElement =document.querySelector('#numero-max')!;


form.addEventListener("submit", () => {
    let n1:number = Number(min.value);
    let n2:number = Number(max.value);
    console.log(valorIntervalo(n1,n2));
})

function valorIntervalo(minimo:number, maximo:number):number{
    let alcance:number = maximo - minimo;
    let valor:number = Math.round(Math.random() * alcance + minimo);
    return valor;
}