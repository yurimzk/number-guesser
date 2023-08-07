const guess = document.querySelector(".guess");
const guessAgain = document.querySelector(".guess-again");
const btnTry = document.querySelector("#btn-try");
const btnTryAgain = document.querySelector("#btn-tryagain");

const randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

function handleTryClick(event) {
    event.preventDefault();

    const inputNumber = document.querySelector("#inputNumber");

    if (Number(inputNumber.value) == randomNumber) {
        toggleScreen();
        guess.querySelector("h2").innerText = `Got it in ${xAttempts} tries!`
    };
    
    inputNumber.value = "";
    xAttempts++;
}

function handleResetClick() {
    toggleScreen();
    xAttempts = 1;
};

btnTry.addEventListener('click', handleTryClick);
btnTryAgain.addEventListener('click', handleResetClick);

function toggleScreen() {
    guess.classList.toggle("hide")
    guessAgain.classList.toggle("hide")
};
