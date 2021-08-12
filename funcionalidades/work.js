/*Variaveis globais*/
let numComplexos = 0;
let vetorDeComplexos = [];

/*Criação de novos complexos*/
function criaComplexoCartesiano (real, imag){
    let novoImaginario = new Object();
    novoImaginario.parteReal = real;
    novoImaginario.parteImaginaria = imag;
    novoImaginario.modulo = Math.sqrt(real**2 + imag**2);
    novoImaginario.angulo = Math.atan2(imag, real);
    return novoImaginario;
}

function criaComplexoPolar (modulo, angulo){
    let novoImaginarioPolar = new Object();
    novoImaginarioPolar.modulo = modulo;
    novoImaginarioPolar.angulo = angulo;
    novoImaginarioPolar.parteReal = modulo * Math.cos(angulo);
    novoImaginarioPolar.parteImaginaria = modulo * Math.sin(angulo);
    return novoImaginarioPolar;
}

function verificaNumComplexos(){
    if(numComplexos < 2) return true;
    else return false;
}

/*Funções de interação com o HTML*/ 
let botaoCartesiano = document.getElementById("cartesiano");
botaoCartesiano.onclick = function (){
    numComplexos++;
    let real = document.querySelector("#parteReal");
    let imag = document.querySelector("#parteImag");
    let valorReal = real.value;
    let valorImag = imag.value;
    valorReal = parseFloat(valorReal);
    valorImag = parseFloat(valorImag);
    let novoImag = criaComplexoCartesiano(valorReal, valorImag);
    vetorDeComplexos.push(novoImag);
    let formata = "Z" + numComplexos + " = " + novoImag.parteReal + " + " + novoImag.parteImaginaria + "j";
    console.log(formata);
    adicionaNaTela(formata);
}

let botaoPolar = document.getElementById("polar");
botaoPolar.onclick = function (){
    let modulo = document.querySelector("#moduloDoNum");
    let angulo = document.querySelector("#anguloDoNum");
    let valorModulo = modulo.value;
    let valorAngulo = angulo.value;
    valorModulo = parseFloat(valorModulo);
    valorAngulo = parseFloat(valorAngulo);
    let novoImagPolar = criaComplexoPolar(valorModulo, valorAngulo);
    vetorDeComplexos.push(novoImagPolar);
    let formata = novoImagPolar.parteReal + " + " + novoImagPolar.parteImaginaria + "j";
    console.log(formata);
    adicionaNaTela(formata);
}

function adicionaNaTela (complexo){
    let manipulacoes = document.querySelector("#manipula");
    let novoComplexo = document.createElement("p");
    novoComplexo.classList.add("novoItem");
    novoComplexo.innerHTML = complexo;
    manipulacoes.appendChild(novoComplexo);
}






