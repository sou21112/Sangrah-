/* script.js */
let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;
let singlePlayerMode = false;

function startSinglePlayer() {
    singlePlayerMode = true;
    resetGame();
}

function startTwoPlayer() {
    singlePlayerMode = false;
    resetGame();
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameActive = true;
    document.querySelectorAll('.cell').forEach(cell => cell.innerText = "");
}

function makeMove(index) {
    if (gameActive && board[index] === "") {
        board[index] = currentPlayer;
        document.querySelectorAll('.cell')[index].innerText = currentPlayer;
        if (checkWin()) {
            alert(`${currentPlayer} wins!`);
            gameActive = false;
        } else if (board.every(cell => cell !== "")) {
            alert("It's a draw!");
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            if (singlePlayerMode && currentPlayer === "O") {
                computerMove();
            }
        }
    }
}

function computerMove() {
    let emptyCells = board.map((cell, index) => cell === "" ? index : null).filter(index => index !== null);
    let randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    makeMove(randomIndex);
}

function checkWin() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    return winningCombinations.some(combination => {
        return combination.every(index => board[index] === currentPlayer);
    });
}

document.querySelectorAll('.cell').forEach((cell, index) => {
    cell.addEventListener('click', () => makeMove(index));
});
