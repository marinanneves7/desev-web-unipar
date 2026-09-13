const readline = require('readline');

// Configura o módulo readline conforme o guia
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Dados da conta (variáveis fixas) e saldo inicial
const titular = "Carlos Eduardo";
const agencia = "0001";
const numeroConta = "12345-6";
let saldo = 100.00;

// Função para formatar números em moeda
function formatarMoeda(valor) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(valor);
}

// Função principal que exibe o menu
function menu() {
    console.log("\nBANCO DIGITAL");
    console.log("1 - Consultar dados da Conta");
    console.log("2 - Consultar Saldo");
    console.log("3 - Realizar Débito");
    console.log("4 - Realizar Crédito");
    console.log("5 - Sair");

    rl.question("Escolha uma opção: ", (resposta) => {
        if (resposta === "1") {
            consultarConta();
        } else if (resposta === "2") {
            consultarSaldo();
        } else if (resposta === "3") {
            realizarDebito();
        } else if (resposta === "4") {
            realizarCredito();
        } else if (resposta === "5") {
            console.log("Saindo do sistema");
            rl.close();
        } else {
            console.log("Opção inválida! Tente novamente.");
            menu();
        }
    });
}

//Consultar dados da conta
function consultarConta() {
    console.log("\nDADOS DA CONTA");
    console.log("Titular: " + titular);
    console.log("Agência: " + agencia);
    console.log("Conta: " + numeroConta);
    menu();
}

// Consultar saldo
function consultarSaldo() {
    console.log("\nSALDO ATUAL");
    console.log("Seu saldo atual é de " + formatarMoeda(saldo));
    menu();
}

// Realizar Débito (Saque)
function realizarDebito() {
    rl.question("\nDigite o valor a ser sacado: ", (resposta) => {
        const valor = parseFloat(resposta);

        // Verifica se tem saldo suficiente
        if (valor > saldo) {
            console.log("Saldo insuficiente! Operação não realizada.");
        } else {
            saldo = saldo - valor;
            console.log("Débito realizado com sucesso!");
            console.log("Seu saldo atual é de " + formatarMoeda(saldo));
        }

        menu();
    });
}

//Realizar Crédito (Depósito)
function realizarCredito() {
    rl.question("\nDigite o valor a ser depositado: ", (resposta) => {
        const valor = parseFloat(resposta);

        saldo = saldo + valor;
        console.log("Crédito realizado com sucesso!");
        console.log("Seu saldo atual é de " + formatarMoeda(saldo));

        menu();
    });
}

menu();