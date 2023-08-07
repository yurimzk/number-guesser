const guess = document.querySelector(".guess");
const guessAgain = document.querySelector(".guess-again");
const btnTry = document.querySelector("#btn-try");
const btnTryAgain = document.querySelector("#btn-tryagain");

let randomNumber;
let xAttempts;

function startNewGame() {
    randomNumber = Math.round(Math.random() * 10);
    xAttempts = 1;
}

function handleTryClick(event) {
    event.preventDefault();

    const inputNumber = document.querySelector("#inputNumber");

    if (Number(inputNumber.value) === randomNumber) {
        toggleScreen();
        const attempts = guessAgain.querySelector("h2");
        attempts.innerText = `Got it in ${xAttempts} tries!`;
    } else {
        inputNumber.value = "";
        xAttempts++;
    }
}

function handleResetClick() {
    toggleScreen();
    startNewGame();
}

btnTry.addEventListener('click', handleTryClick);
btnTryAgain.addEventListener('click', handleResetClick);

function toggleScreen() {
    guess.classList.toggle("hide");
    guessAgain.classList.toggle("hide");
}

startNewGame();
