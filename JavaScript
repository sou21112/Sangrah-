let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;
let gameMode = "player";

function startGame(mode) {
    gameMode = mode;
    document.getElementById("menu").style.display = "none";
    document.getElementById("game").style.display = "block";
}

function makeMove(index) {
    if (board[index] !== "" || !gameActive) {
        return;
    }

    board[index] = currentPlayer;
    document.getElementById(`cell-${index}`).textContent = currentPlayer;
    checkWinner();

    if (gameMode === "computer" && gameActive) {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        computerMove();
    } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}

function computerMove() {
    const emptyCells = board.map((cell, index) => (cell === "" ? index : null)).filter(index => index !== null);
    const randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    makeMove(randomIndex);
}

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            gameActive = false;
            alert(`${currentPlayer} wins!`);
            return;
        }
    }

    if (!board.includes("")) {
        gameActive = false;
        alert("It's a draw!");
    }
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameActive = true;
    document.querySelectorAll(".cell").forEach(cell => cell.textContent = "");
    document.getElementById("menu").style.display = "block";
    document.getElementById("game").style.display = "none";
}
