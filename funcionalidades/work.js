/*Variaveis globais*/
let numComplexos = 0;

/*Criação de novos complexos*/
function criaComplexoCartesiano (real, imag){
    let novoImaginario = new Object();
    novoImaginario.parteReal = real;
    novoImaginario.parteImaginaria = imag;
    return novoImaginario;
}

function criaComplexoPolar (modulo, angulo){
    let novoImaginarioPolar = new Object();
    novoImaginarioPolar.modulo = modulo;
    novoImaginarioPolar.angulo = angulo;
}

function verificaNumComplexos(){
    if(numComplexos < 2) return true;
    else return false;
}





