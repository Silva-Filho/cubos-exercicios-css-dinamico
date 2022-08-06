const botaoSalvar = document.querySelector("#btn-save");
const botaoLimpar = document.querySelector("#btn-clean");
const messagemBoasVindas = document.querySelector("#welcome");
const inputNome = document.querySelector("#input-name");

const nomeSalvo = localStorage.getItem("nome");
messagemBoasVindas.innerText = nomeSalvo ? 
    `Seja bem vindo, ${nomeSalvo}!` :
    "";

const salvarNome = () => {
    const nome = inputNome?.value;

    if (!nome) {
        return;
    }
    
    if (nome.trim()) {
        localStorage.setItem("nome", nome);
        messagemBoasVindas.innerText = `Seja bem vindo, ${nome}!`;
        inputNome.value = "";
    }
};

botaoSalvar?.addEventListener("click", salvarNome);

const limparNome = () => {
    /* localStorage.clear(); */
    localStorage.removeItem("nome");
    messagemBoasVindas.innerText = "";
    /* inputNome.value = ""; */
};

botaoLimpar?.addEventListener("click", limparNome);
