//Crie um array de números pares, e utilizando a função .map() nesse array, crie um novo array com apenas números ímpares.

let numeros = [2,4,6,8,10];

let impar = numeros.map(function(num){
    return num-1;
})

//console.log(impar);

//Crie um array de nomes, que possua dois índices com o nome Maria. Utilize o .filter() para obter apenas esses dois índices com o nome Maria.

let nome =["Maria","Luísa","Júlia","Maria"];
let nomes = nome.filter(function(mesmoNome){
    return mesmoNome == "Maria";
    });
    
    //console.log(nomes);

//Crie um array de números e utilize a função .reduce() para devolver uma string com os números formatados.

let numbers = [1,2,3,4,5,6,7,8,9];


console.log(numbers.join('-'));

//Crie um array de animais, após isso passe por cada índice utilizando o .forEach() e imprima a frase “O animal é NOME_DO_ANIMAL”.

let animais = ["Porquinho da índia", "Cachorro", "Gato", "Peixe"];

animais.forEach(
    function(pet){
        console.log("O animal é"+" "+ pet)
    }
);