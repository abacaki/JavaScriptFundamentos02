/*
    SE
        faça isso
    Senão
        faça aquilo
*/

let idade = 18;

if (idade >= 18) {
    console.log("Pode dirigir");
} else {
    console.log("Não pode dirigir");
}

if (idade < 16) {
    console.log("Não pode votar");
} else if (idade < 18) {
    console.log("Pode votar, mas não é obrigatórtio");
} else if (idade < 70) {
    console.log("Voto obrigatório");
} else {
    console.log("Pode votar, mas não é obrigatório");
}

idade = 15;

if (idade > 0 && idade <= 12) {
    console.log("Criança");
} else if (idade >= 16 && idade <= 17) {
    console.log("Adolescente");
} else if (idade >= 17 && idade <= 59) {
    console.log("Adulto");
} else {
    console.log("Idoso");
}

idade = 20;
let acompanhante = false;

if (idade >= 18 || acompanhante) {
    console.log("Pode entrar");
} else {
    console.log("Não pode entrar");
}

let nome = "Ana"

if (nome == "Maria" || nome == "Ana") {
    console.log("Pode entrar");
} else {
    console.log("Não pode entrar");
}

let temNamorada = false;
let temEsposa = true;

if (temNamorada || temEsposa) {
    console.log("Você está em um relacionamento");
} else {
    console.log("Você está solteiro");
}

let dia = 2;

switch (dia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda");
        break;
    case 3:
        console.log("Terça-feira");
        break;
    case 4:
        console.log("Quarta-feira");
        break;
    case 5:
        console.log("Quinta-feira");
        break;
    case 6:
        console.log("Sexta-feira");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Inválido")
}

let menu = 1;

switch (menu) {
    case 1:
        console.log("Cadastrar");
        break;
    case 2:
        console.log("Editar");
        break;
    case 3:
        console.log("Excluir");
        break;
    case 4:
        console.log("Sair");
}