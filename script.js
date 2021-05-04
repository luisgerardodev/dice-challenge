const winnerTitle = document.querySelector("#winner");
const dices = document.querySelectorAll("img");
const button = document.querySelector("button");

const rollDices = () => {
  let randomDiceOne = Math.floor(Math.random() * 6) + 1; // 1-6
  let randomDiceTwo = Math.floor(Math.random() * 6) + 1; // 1-6

  dices[0].setAttribute("src", `./images/dice${randomDiceOne}.png`); // images/dice1.png - imges/dice6.png on player1 dice
  dices[1].setAttribute("src", `./images/dice${randomDiceTwo}.png`); // images/dice1.png - imges/dice6.png on player2 dice

  if (randomDiceOne > randomDiceTwo) {
    winnerTitle.innerHTML = "🚩 Player 1 Wins!";
  } else if (randomDiceTwo > randomDiceOne) {
    winnerTitle.innerHTML = "Player 2 Wins! 🚩";
  } else {
    winnerTitle.innerHTML = "Draw!";
  }
};

button.addEventListener('click', rollDices);

rollDices();
