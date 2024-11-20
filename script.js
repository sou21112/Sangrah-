const startScreen = document.getElementById("start-screen");
const gameArea = document.getElementById("game-area");
const endScreen = document.getElementById("end-screen");

const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");
const playAgainBtn = document.getElementById("play-again-btn");

const cells = document.querySelectorAll("[data-cell]");
const statusText = document.getElementById("game-status");
const winnerMessage = document.getElementById("winner-message");

let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let isGameActive = true;

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Switch screens
startBtn.addEventListener("click", () => {
  startScreen.classList.add("hidden");
  gameArea.classList.remove("hidden");
});

restartBtn.addEventListener("click", resetGame);
playAgainBtn.addEventListener("click", () => {
  endScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");
  resetGame();
});

// Game logic
cells.forEach((cell, index) => {
  cell.addEventListener("click", () => handleCellClick(cell, index));
});

function handleCellClick(cell, index) {
  if (board[index] !== "" || !isGameActive) return;

  board[index] = currentPlayer;
  cell.textContent = currentPlayer;
  cell.classList.add("taken");

  if (checkWinner()) {
    endGame(`${currentPlayer} wins!`);
  } else if (board.every(cell => cell !== "")) {
    endGame("It's a draw!");
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusText.textContent = `Player ${currentPlayer}'s turn`;
  }
}

function checkWinner() {
  return winningCombinations.some(combination => {
    return combination.every(index => board[index] === currentPlayer);
  });
}

function endGame(message) {
  isGameActive = false;
  gameArea.classList.add("hidden");
  endScreen.classList.remove("hidden");
  winnerMessage.textContent = message;
}

function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  isGameActive = true;
  currentPlayer = "X";
  cells.forEach(cell => {
    cell.textContent = "";
    cell.classList.remove("taken");
  });
  statusText.textContent = `Player ${currentPlayer}'s turn`;
  gameArea.classList.remove("hidden");
  endScreen.classList.add("hidden");
}
