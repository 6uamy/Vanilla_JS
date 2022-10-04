const userForm = document.querySelector("#user-form");
const userInput = document.querySelector("#user-form input");
const machineInput = document.querySelector("#machine-form input");

const inGame = document.querySelector("#inGame");
const result = document.querySelector("#result");

const HIDDEN_CLASS = "hidden";

function handleSubmit(event) {
  event.preventDefault();
  if (userInput.value === "" || machineInput.value === "") {
    alert("Input value is null! Please check input value.");
  } else if (userInput.value < 0 || machineInput.value < 0) {
    alert("Input value can't negative!");
  } else {
    machineRandom(machineInput.value);
  }
}

function machineRandom(randNum) {
  const user = userInput.value;

  const num = Math.floor(Math.random() * (parseInt(randNum) + 1));
  inGame.innerText = `You chose: ${user}, the machine chose: ${num}.`;
  inGame.classList.remove(HIDDEN_CLASS);

  if (parseInt(user) === num) {
    result.innerText = "You won!";
    result.classList.remove(HIDDEN_CLASS);
  } else {
    result.innerText = "You lost!";
    result.classList.remove(HIDDEN_CLASS);
  }
}

userForm.addEventListener("submit", handleSubmit);
