/*Variaveis globais*/
let numComplexos = 0;
let vetorDeComplexos = [];
let vetorDeResultados = [];
let indexR = 0;

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
    if(numComplexos <= 2) return true;
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
/*Adicionando novos complexos*/
/*Input: Forma cartesiana*/
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
    if(verificaNumComplexos()) vetorDeComplexos.push(novoImag);
    else{
        vetorDeComplexos.length = 0;
        vetorDeComplexos.push(novoImag);
    }
    console.log(vetorDeComplexos);
    let index;
    if(numComplexos < 3) index = numComplexos;
    else index = 1;
    let formataCart;
    if(novoImag.parteImaginaria >= 0) formataCart = "Z" + index + " = " + novoImag.parteReal + " + " + novoImag.parteImaginaria + "j";
    else formataCart = "Z" + index + " = " + novoImag.parteReal + " " + novoImag.parteImaginaria + "j";
    let formataPolar = "Z" + index + " = " + novoImag.modulo + " ∠" + novoImag.angulo;
    adicionaNaTela(formataCart, formataPolar);
}

/*Input: Forma polar*/
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
    if(verificaNumComplexos()) vetorDeComplexos.push(novoImagPolar);
    else{
        vetorDeComplexos.length = 0;
        vetorDeComplexos.push(novoImagPolar);
    }
    let index;
    if(numComplexos < 3) index = numComplexos;
    else index = 1;
    console.log(vetorDeComplexos);
    let formataCart;
    if(novoImagPolar.parteImaginaria >= 0) formataCart = "Z" + index + " = " + novoImagPolar.parteReal + " + " + novoImagPolar.parteImaginaria + "j";
    else formataCart = "Z" + index + " = " + novoImagPolar.parteReal + " " + novoImagPolar.parteImaginaria + "j";
    let formataPolar = "Z" + index + " = " + novoImagPolar.modulo + " ∠" + novoImagPolar.angulo;
    adicionaNaTela(formataCart, formataPolar);
}

function adicionaNaTela (complexoCartesiano, complexoPolar){
    let manipulacoes = document.querySelector("#manipula");
    let novoComplexo = document.createElement("li");
    let tituloCartesiana = document.createElement("p");
    let tituloPolar = document.createElement("p");
    let parteCartesiana = document.createElement("p");
    let partePolar = document.createElement("p");

    if(!verificaNumComplexos()){
        manipulacoes.innerHTML = "";
        numComplexos = 1;
    } 
        
    tituloCartesiana.innerHTML = "Forma Cartesiana"
    tituloPolar.innerHTML = "Forma Polar: ";

    parteCartesiana.innerHTML = complexoCartesiano;
    partePolar.innerHTML = complexoPolar;
    manipulacoes.appendChild(novoComplexo);
    novoComplexo.classList.add("novoItem");
    novoComplexo.appendChild(tituloCartesiana);
    novoComplexo.appendChild(parteCartesiana);
    novoComplexo.appendChild(tituloPolar);
    novoComplexo.appendChild(partePolar);
}

function adicionaNaTelaResultados (complexoCartesiano, complexoPolar){
    let manipulacoes = document.querySelector(".resultados");
    let novoComplexo = document.createElement("li");
    let tituloCartesiana = document.createElement("p");
    let tituloPolar = document.createElement("p");
    let parteCartesiana = document.createElement("p");
    let partePolar = document.createElement("p");

    if(!verificaNumComplexos()){
        manipulacoes.innerHTML = "";
        numComplexos = 1;
    } 
        
    tituloCartesiana.innerHTML = "Forma Cartesiana"
    tituloPolar.innerHTML = "Forma Polar: ";

    parteCartesiana.innerHTML = complexoCartesiano;
    partePolar.innerHTML = complexoPolar;
    manipulacoes.appendChild(novoComplexo);
    novoComplexo.classList.add("novoItem");
    novoComplexo.appendChild(tituloCartesiana);
    novoComplexo.appendChild(parteCartesiana);
    novoComplexo.appendChild(tituloPolar);
    novoComplexo.appendChild(partePolar);
}

/*Operações*/
/*Soma*/
let botaoSoma = document.getElementById("somar");
botaoSoma.onclick = function (){
    let resultadoDaSoma = new Object();
    resultadoDaSoma = adiciona(vetorDeComplexos[0], vetorDeComplexos[1]);
    console.log(resultadoDaSoma);
    vetorDeResultados.push(resultadoDaSoma);
    let formataCart;
    if(resultadoDaSoma.parteImaginaria >= 0) formataCart = "Z" + indexR + " = " + resultadoDaSoma.parteReal + " + " + resultadoDaSoma.parteImaginaria + "j";
    else formataCart = "Z" + indexR + " = " + resultadoDaSoma.parteReal + " " + resultadoDaSoma.parteImaginaria + "j";
    let formataPolar = "Z" + indexR + " = " + resultadoDaSoma.modulo + " ∠" + resultadoDaSoma.angulo;
    adicionaNaTelaResultados(formataCart, formataPolar);
    indexR++;

}  

/*Subtração*/
let botaoSub = document.getElementById("subtrair");
botaoSub.onclick = function (){
    let resultadoDaSub = new Object();
    resultadoDaSub = subtrai(vetorDeComplexos[0], vetorDeComplexos[1]);
    console.log(resultadoDaSub);
    let formataCart;
    if(resultadoDaSub.parteImaginaria >= 0) formataCart = "Z" + indexR + " = " + resultadoDaSub.parteReal + " + " + resultadoDaSub.parteImaginaria + "j";
    else formataCart = "Z" + indexR + " = " + resultadoDaSub.parteReal + " " + resultadoDaSub.parteImaginaria + "j";
    let formataPolar = "Z" + indexR + " = " + resultadoDaSub.modulo + " ∠" + resultadoDaSub.angulo;
    adicionaNaTelaResultados(formataCart, formataPolar);
    indexR++;
} 

/*Multiplicação*/ 
let botaoMult = document.getElementById("multiplica");
botaoMult.onclick = function (){
    let resultadoDaMult = new Object();
    resultadoDaMult = multiplica(vetorDeComplexos[0], vetorDeComplexos[1]);
    console.log(resultadoDaMult);
    let formataCart;
    if(resultadoDaMult.parteImaginaria >= 0) formataCart = "Z" + indexR + " = " + resultadoDaMult.parteReal + " + " + resultadoDaMult.parteImaginaria + "j";
    else formataCart = "Z" + indexR + " = " + resultadoDaMult.parteReal + " " + resultadoDaMult.parteImaginaria + "j";
    let formataPolar = "Z" + indexR + " = " + resultadoDaMult.modulo + " ∠" + resultadoDaMult.angulo;
    adicionaNaTelaResultados(formataCart, formataPolar);
    indexR++;
}

/*Divisão*/ 
let botaoDiv = document.getElementById("divide");
botaoDiv.onclick = function (){
    let resultadoDaDiv = new Object();
    resultadoDaDiv = divide(vetorDeComplexos[0], vetorDeComplexos[1]);
    console.log(resultadoDaDiv);
    let formataCart;
    if(resultadoDaDiv.parteImaginaria >= 0) formataCart = "Z" + indexR + " = " + resultadoDaDiv.parteReal + " + " + resultadoDaDiv.parteImaginaria + "j";
    else formataCart = "Z" + indexR + " = " + resultadoDaDiv.parteReal + " " + resultadoDaDiv.parteImaginaria + "j";
    let formataPolar = "Z" + indexR + " = " + resultadoDaDiv.modulo + " ∠" + resultadoDaDiv.angulo;
    adicionaNaTelaResultados(formataCart, formataPolar);
    indexR++;
} 






