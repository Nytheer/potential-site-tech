///----------------------COMEÇO--------------------------------

// ELEMENTOS
const btn = document.getElementById("btn");
const input = document.getElementById("input");
const lista = document.getElementById("lista");

// Função para adicionar tarefa
function addTarefa(){

    const texto = input.value.trim();

    if(texto === "") return;

    // CRIAR LI
    const li = document.createElement("li");

    li.textContent = texto;

    // MARCAR COMO FEITA
    li.addEventListener("click", () =>{

        li.classList.toggle("feito");

    });

    // APPEND
    lista.appendChild(li);

    // LIMPAR INPUT
    input.value = "";

    input.focus();

}

// BOTÃO
btn.addEventListener("click", addTarefa);

// ENTER
input.addEventListener("keydown", (e) =>{

    if(e.key === "Enter"){

        addTarefa();

    }

});
///----------------------FIM--------------------------------
