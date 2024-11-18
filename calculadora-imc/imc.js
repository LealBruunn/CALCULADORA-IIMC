const calcular = document.getElementById('calcular');

function imc () {
    //ir no documento dar um getElementById e pegar o nome ou seja pegar o elemento que o id é nome. Depois altura, peso e resultado//
    const nome = document.getElementById('nome').value;
    const altura = +document.getElementById('altura').value;
    const peso = +document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');


    //Antes de calcular temos que ver se os campos foram preênchidos. Ou seja fazer uma validação//
    if (nome !== '' && altura !== '' && peso !== '') {

        /* Feito a validação, faremos o calculo criando uma const para calcular o valor do imc, 
        usando a formula do imc que é "peso dividido por altura ao quadrado". usei o toFixed(1) 
        para redondar o resultado para uma casa decimal e não ficar um resultado muuito extenso*/ 
        const valorIMC = (peso / (altura * altura)).toFixed(1);

        /* Criei essa variavel do tipo let (pois ela tem que ser alterada), porém ela não vai receber nenhum valor. 
        Vai me servir para chamar as verificações dos resultados */
        let classificacao = '';
        
        /* Na primeira vamos criar uma condição que se for abaixo do indice (18.5) Esta abaixo do peso*/ 
        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso.';
        }else if (valorIMC < 25) {
            classificacao = 'com peso ideal. Parabéns!!!';
        }else if (valorIMC < 30){
            classificacao = 'levemente acima do peso.';
        }else if (valorIMC < 35){
            classificacao = 'com obesidade grau I.';
        }else if (valorIMC < 40){
            classificacao = 'com obesidade grau II';
        }else {
            classificacao = 'com obesidade grau III. Cuidado!!';
        }
        /* O calculo feito na inha 16 jogamos aqui a baixo e montamos um texto para resultado, 
        para ele não ficar concatenando eu usei o tamplete string(`´) usamos o ($) e abrimos chaves */
        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;
        /* A ${classificação} tera a frase de acordo com a condição pertiente ao resultado da classificação da pessoa */
        
    }else {
        /*Na linha 44, criei um alerta na caixinha, caso esqueçam de preencher os campos */
        resultado.textContent = 'Preencha todos os campos!!!';
    }

}

calcular.addEventListener('click', imc);