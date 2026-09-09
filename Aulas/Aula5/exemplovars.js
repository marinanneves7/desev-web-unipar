//console.log(nome)

//let  nome = "Marina"

//if (true) {
    //let nomeDois = "Marina2"
    //nomeDois = "marininha"
    //Escopo if

    //console.log(nomeDois)
//}

//function teste() {
    //Escopo na função
//}

let nome;

const nomeNulo = null;

const aluno = {
    id: 544316,
    nome: "marina",
    ativo: true,
    pos: null,
    //dataNascimento: new Date("12/06/2007"), ou commo String, dessa forma: 
    dataNascimento: "12/06/2007",
    endereco: {
        rua: "Elias Abraao",
        numero: 6643,
        bairro: "paulo godoy",
        cidade: "Cascavel"
    }
}
console.log(aluno)
console.log(nome);
console.log(nomeNulo);

const frutas = ["🍇", "🍉", "🍋", "🍊", "🍍"]

console.log(frutas)

function soma (n1, n2) {
    return n1 + n2;
}

console.log(soma(259, 697));


const valor1 = "2";
const valor2 = 2;

// 2 iguais == checa apenas valor
if (valor1 === valor2) {
    console.log("É igual!!!")
}

// 3 iguais === checa tipo e valor
if (valor1 == valor2) {
    console.log("É igual!!!")
}

const frutas2 = ["🍇", "🍉", "🍋", "🍊", "🍍"]

for (let index = 0; < array.length; index++);