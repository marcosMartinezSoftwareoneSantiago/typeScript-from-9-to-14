const primer:Function = ():string => { return "primer callback"};
const segundo:Function = ():string => { return "segundo callback"};

function queFuncionSaldra(primeraFuncion:Function, segundaFuncion:Function):string {
    let retorno:string;
    if(Math.random()< 0.5){
        retorno = primeraFuncion();
    }else{
        retorno = segundaFuncion();
    }
    return retorno;
}

alert(queFuncionSaldra(primer, segundo));