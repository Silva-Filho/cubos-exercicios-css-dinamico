const botaoSalvar = document.querySelector("#btn-save");

const messagemBoasVindas = document.querySelector("#welcome");

/* let nomeSalvo = localStorage.nome; */
/* nomeSalvo = nomeSalvo !== undefined ? nomeSalvo.trim() : undefined */
let nomeSalvo = localStorage.getItem("nome");
nomeSalvo = nomeSalvo !== null ? nomeSalvo.trim() : null;

if (nomeSalvo) {
    messagemBoasVindas.textContent = `Seja bem vindo, ${nomeSalvo}!`;
}

const salvarNome = () => {
    const inputNome = document.querySelector("#input-name");
    const nome = inputNome.value;
    
    if (nome.trim()) {
        localStorage.setItem("nome", nome);
        messagemBoasVindas.textContent = `Seja bem vindo, ${nome}!`;
    }
};

botaoSalvar.addEventListener("click", salvarNome);

