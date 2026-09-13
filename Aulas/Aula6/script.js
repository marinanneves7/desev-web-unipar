const divUm = document.querySelector(".container");

// divUm.firstChild.textContent = "Alterado via JS";

divUm.firstElementChild.textContent = "Alterado via JS";

function ativar() {
    const containers = document.querySelectorAll(".container");

    containers.forEach(div => {
        div.firstElementChild.classList.toggle("ativo");
        // div.firstElementChild.classList.add("ativo");
    });
}

// toggle chama e chama novamente a função 
// add ele só chama a função uma vez

// const divs = document.querySelectorAll(".container");

// divs.forEach(div  => {
//     div.firstElementChild.textContent = "Alterado via JS";
// });

// const divUm = document.querySelector("#exemplos");

// divUm.innerHTML = "<p> Teste Aleatório </p>"; - innerHTML
// muda todo o html da string selecionada

