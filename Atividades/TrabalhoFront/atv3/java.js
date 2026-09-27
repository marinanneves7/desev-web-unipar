// Seleção dos elementos
const campo = document.querySelector("#campo");
const btn = document.querySelector("#btn");
const lista = document.querySelector("#lista");

// Função para adicionar tarefa
function adicionar() {
  const texto = campo.value;

  if (texto === "") {
    return;
  }

  const item = document.createElement("li");

  item.innerHTML = `
    <span>
      <input type="checkbox" class="chk">
      ${texto}
    </span>
  `;

  lista.appendChild(item);
  campo.value = "";
}

btn.addEventListener("click", adicionar);

// Delegação de eventos para marcar/remover
lista.addEventListener("click", function(event) {
  const elemento = event.target;

  if (elemento.classList.contains("chk")) {
    const liPai = elemento.closest("li");
    liPai.classList.toggle("riscado");
    return;
  }

  const itemParaRemover = elemento.closest("li");
  if (itemParaRemover) {
    itemParaRemover.remove();
  }
});