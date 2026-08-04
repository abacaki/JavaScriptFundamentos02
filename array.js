let alunos = ["Arthur", "Victória", "Evellyn", "Yuri", "Izabella"];

console.log(alunos[2]);

alunos[0] = "Daniel"

console.log(alunos[0]);

let frutas = [
    "Maçãs",
    "Banana",
    "Uva",
    "Morango"
];

console.log("Quantidade de Frutas: ", frutas.length);

for(let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

console.log(frutas); //[ 'Maçãs', 'Banana', 'Uva', 'Morango' ]
frutas.push("Kiwi"); // Adiciona ao final
console.log(frutas); //[ 'Maçãs', 'Banana', 'Uva', 'Morango', 'Kiwi' ]

frutas.pop(); // Remove o último
console.log(frutas); //[ 'Maçãs', 'Banana', 'Uva', 'Morango' ]

frutas.unshift("Melancia"); // Adiciona ao início
console.log(frutas); //[ 'Melancia', 'Maçãs', 'Banana', 'Uva', 'Morango' ]