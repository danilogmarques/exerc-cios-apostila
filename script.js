console.log('Bom dia meu jovem programador')

let n1 = 2
let n2 = 2
let n3 = 1

const media = n1 + n2 + n3 /3;

console.log('média de notas', media)

// Exercio 2 
// F = C × 9/5 + 32

let temperaturaCelsius = 89
const F = temperaturaCelsius * 9/5 + 32
console.log('temperatura em graus celcius', F);

// calcular a área de um triangulo b x a
let base = 100
let altura = 80

const area = base * altura 
console.log('área do triângulo', area);

//Calcular o consumo médio de combustível (km percorridos / litros consumidos)
// distância percorrido dividido pela quantidade de combustivel consumido 

let distanciaPercorrida = 40;
let qtdCombustivel = 10;

const consumo = distanciaPercorrida / qtdCombustivel
console.log('média de consumo', consumo);

//Converter horas em minutos e segundos (1 hora = 60 minutos = 3600 segundos)
let hora = 5
let umaHora = 60
let sessentaMinutos = 3600;
const horaParaMinutos = hora * umaHora;
console.log('convertendo 5 horas para minutos', horaParaMinutos)

const minutosParaSegundos = horaParaMinutos * sessentaMinutos 
console.log('convertendo minutos para segundos', minutosParaSegundos);

console.log(`5 horas tem ${horaParaMinutos} minutos e ${minutosParaSegundos} segundos`)

//IF Else 

//Monte o fluxugrama para Verificar se um número é positivo ou negativo e imprimir o
// resultado. (definir os valores durante a declaração de variáveis)

let numero = 50
numero = 51
numero = - 4
if(numero >= 0){
    console.log(`O número ${numero} é positivo`)
}else{
    console.log(`O número ${numero} é negativo`)
};

// Criar um fluxograma que verifique se um número é par ou ímpar. (definir os valores durante
//     a declaração de variáveis).
 
let num = 78
num = 75
if (num % 2 === 0){
    console.log(`O número ${num} é par`)
}else{
    console.log(`O número ${num} é impar`)
};

// Monte o fluxugrama para Verificar se um aluno foi aprovado (média ≥ 7)

if(media >= 7){
    console.log(`a média de notas do aluno foi ${media} e ele foi aprovado`);
}else{
    console.log(`a média de notas do aluno foi ${media} e ele foi reprovado`)
};

// Monte o fluxugrama para Determinar o maior entre dois números

let num1 = 100
let num2 = 109

if(num1 > num2){
    console.log(`Eu sou o num1 e sou o MAIOR`)
}else if(num2 === num1){
    console.log(`Nós somos iguais`)
}else{
    console.log(`Eu sou o num2 e sou o MAIOR`)
};

// Monte o fluxugrama para Classificar um triângulo (equilátero, isósceles ou escaleno)
// com base nos lados
let lado1 = 7
let lado2 = 7
let lado3 = 8

if(lado1 === lado2 && lado1 === lado3 && lado2 === lado3){
    console.log(`Os três lados são iguais o triângulo é equilátero`)
}else if(lado1 !== lado2 && lado3 !==  lado2!== lado3 && lado1 ){
    console.log(`Os três lados são diferentes o triangulo é escaleno`)
}else if(lado1 === lado2 && lado1 !== lado3 || lado2 === lado3 && lado2 !== lado1 || lado1 === lado3 && lado2 !== lado1  ){
    console.log(`Dois dos lados são iguais e o triângulo é isósoles`)
};

// LAÇOS 

// Criar um fluxograma que some números digitados até que o usuário digite 0.
// let entradaConvertida
// let entrada 
// let somatoria = 0 
// while ( entradaConvertida !== 0) { 
    // entrada = prompt('digite um entradaConvertida')
//     entradaConvertida = Number(entrada);
//     somatoria = somatoria + entradaConvertida;
//     console.log(somatoria);
//     console.log('numero digitado pelo usuário', entrada);
//  }; 

//  Calcular fatorial de um número (5! = 5×4×3×2×1)
let faturador = 5;
let counter = 5;
while (counter >= 1) {
    console.log(faturador)
    counter = counter - 1;
    faturador = counter * faturador
};
    



// Encontrar o primeiro número maior que 100 na sequência de Fibonacci 
// fibonacci = 1
// crescente = 1 
// f1 = 1
// f2 = 1
// fn = fn-1 + fn-2
// while( fibonacci >= 3 ){
//     fibonacci = fibonacci + 1
    // fibonacci = fibonacci + 1
    // fibonacci = 
    // console.log(fibonacci);
// };













