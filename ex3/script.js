const body = document.querySelector("body");
const containerSquares = document.querySelector(".container-squares");
const squares = document.querySelectorAll(".square");

const trocarCorBody = classList => {
    /* const corSquare = `${classList}`; */
    /* console.log(corSquare);
    console.log(typeof(corSquare)); */
    /* body.style.setProperty("--primary-color", corSquare); */
    body.style.setProperty("--primary-color", classList);
    /* console.log("click"); */
};

const selecionarSquare = square => {
    square.addEventListener("click", trocarCorBody(square.classList[1]));
    /* console.log(square.classList[1]); */

    /* square.addEventListener("click", () => {
        const corSquare = `${square.classList[1]}`;

        body.style.setProperty("--primary-color", corSquare);
    }); */
};

/* squares.forEach(selecionarSquare); */

const adicionarEvento = (event) => {
    const corSquare = event.target.id;

    body.style.setProperty("--primary-color", corSquare);
};

containerSquares.addEventListener("click", adicionarEvento);

