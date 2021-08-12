/*Variaveis globais*/
let numComplexos = 0;
let vetorDeComplexos = [];

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

/*Funções de interação com o HTML*/ 
let botaoCartesiano = document.getElementById("cartesiano");
botaoCartesiano.onclick = function (){
    let real = document.querySelector("#parteReal");
    let imag = document.querySelector("#parteImag");
    let valorReal = real.value;
    let valorImag = imag.value;
    valorReal = parseFloat(valorReal);
    valorImag = parseFloat(valorImag);
    console.log(valorImag+1);
    console.log(valorReal+1);
    let novoImag = criaComplexoCartesiano(valorReal, valorImag);
    vetorDeComplexos.push(novoImag);
    console.log(vetorDeComplexos);
}

let botaoPolar = document.getElementById("polar");
botaoPolar.onclick = function (){
    let modulo = document.querySelector("moduloDoNum");
    let angulo = document.querySelector("anguloDoNum");
    let valorModulo = modulo.value;
    let valorAngulo = angulo.value;
    valorModulo = parseFloat(valorModulo);
    valorAngulo = parseFloat(valorAngulo);
    let novoImagPolar = criaComplexoPolar(valorModulo, valorAngulo);
    vetorDeComplexos.push(novoImagPolar);
}




