console.log('Bom dia meu jovem programador')

let n1 = 10
let n2 = 6
let n3 = 9 

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














