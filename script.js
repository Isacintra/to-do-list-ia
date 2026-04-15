function adicionarTarefa() {
  const input = document.getElementById("tarefa");
  const texto = input.value;

  if (texto === "") return;

  const li = document.createElement("li");
  li.textContent = texto;

  li.onclick = function () {
    li.classList.toggle("concluida");
  };

  const botaoRemover = document.createElement("button");
  botaoRemover.textContent = "X";

  botaoRemover.onclick = function (event) {
    event.stopPropagation();
    li.remove();
  };

  li.appendChild(botaoRemover);

  document.getElementById("lista").appendChild(li);

  input.value = "";
}
