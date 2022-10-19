const formularioDeUsuario:HTMLFormElement = document.querySelector("form")!;
const usuario:HTMLInputElement = document.querySelector("#username")!;

formularioDeUsuario.addEventListener("submit", ()=>{
    let datoIntroducido:string = usuario.value;
    let mensaje:string;
    let ventanaEmergente:Window = window.open(undefined, "nueva ventana", undefined)!;
    
    switch(true) {
        case (emptyFieldValidator(datoIntroducido)): mensaje = "El campo username es obligatorio ";
            break;
        case (notAnumberValidator(datoIntroducido)): mensaje= "Todo correcto ";
            break;
        default: mensaje = "El campo username no puede tener números ";
            break;
    }
    
    ventanaEmergente.document.write(mensaje);
});

function emptyFieldValidator(field:string):boolean{
    return field.length === 0;
}

function notAnumberValidator(field:string):boolean{
    let tieneNumeros:boolean = false;
        for(let i:number=0; i <field.length; i++){
            if(field.charAt(i) === '1' || field.charAt(i) === '2' || field.charAt(i) === '3' || field.charAt(i) === '4' || field.charAt(i) === '5' || field.charAt(i) === '6' || field.charAt(i) === '7' || field.charAt(i) === '8' || field.charAt(i) === '9' || field.charAt(i) === '0'){
                tieneNumeros = true;
            }
        }
    return !tieneNumeros;
}