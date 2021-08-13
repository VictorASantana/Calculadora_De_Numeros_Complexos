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
    novoImaginarioPolar.angulo = validaAngulo(angulo);
    novoImaginarioPolar.parteReal = modulo * Math.cos(angulo);
    novoImaginarioPolar.parteImaginaria = modulo * Math.sin(angulo);
    return novoImaginarioPolar;
}

function verificaNumComplexos(){
    if(numComplexos < 2) return true;
    else return false;
}

/*Operações entre complexos*/
function adiciona(complexo1, complexo2){
    let real = complexo1.parteReal + complexo2.parteReal;
    let imag = complexo1.parteImaginaria + complexo2.parteImaginaria;
    let novoImaginario = criaComplexoCartesiano(real, imag);
    return novoImaginario;
}

function subtrai(complexo1, complexo2){
    let real = complexo1.parteReal - complexo2.parteReal;
    let imag = complexo1.parteImaginaria - complexo2.parteImaginaria;
    let novoImaginario = criaComplexoCartesiano(real, imag);
    return novoImaginario;
}

function multiplica(complexo1, complexo2){
    let modulo = complexo1.modulo * complexo2.modulo;
    let angulo = complexo1.angulo + complexo2.angulo;
    novoImaginario = criaComplexoPolar(modulo, angulo);
    return novoImaginario;
}

function divide(complexo1, complexo2){
    let modulo = complexo1.modulo / complexo2.modulo;
    let angulo = complexo1.angulo - complexo2.angulo;
    novoImaginario = criaComplexoPolar(modulo, angulo);
    return novoImaginario;
}

/*Funções auxiliares*/
function validaAngulo(angulo){ /*Faz um ângulo ficar no intervalo [-pi, +pi]*/
    if (angulo > 2*Math.PI || angulo < -2*Math.PI) {
        angulo %= 2*Math.PI;
    }
    if (angulo > Math.PI) {
        angulo -= 2*Math.PI;
    } else if (angulo < -Math.PI) {
        angulo += 2*Math.PI;
    }
    return angulo;
}

function grausPararadianos(angulo){
    angulo *= (Math.PI / 180);
    return angulo;
}

function radianosParaGraus(angulo){
    angulo *= (180 / Math.PI);
    return angulo;
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
    numComplexos++;
    let modulo = document.querySelector("#moduloDoNum");
    let angulo = document.querySelector("#anguloDoNum");
    let valorModulo = modulo.value;
    let valorAngulo = angulo.value;
    valorModulo = parseFloat(valorModulo);
    valorAngulo = parseFloat(valorAngulo);
    let novoImagPolar = criaComplexoPolar(valorModulo, valorAngulo);
    vetorDeComplexos.push(novoImagPolar);
    let formata = "Z" + numComplexos + " = " + novoImagPolar.parteReal + " + " + novoImagPolar.parteImaginaria + "j";
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






