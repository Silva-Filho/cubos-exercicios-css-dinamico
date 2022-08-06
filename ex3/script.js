const body = document.querySelector("body");
const containerSquares = document.querySelector(".container-squares");

const adicionarEvento = (event) => {
    const corSquare = event.target.id;

    body?.style.setProperty("--current-color", corSquare);
};

containerSquares?.addEventListener("click", adicionarEvento);
