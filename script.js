(() => {

    let activePlayer;

    let gameBoard = ["", "", "", "", "", "", "", "", ""];

    let playerX = {
        name: "Player X",
        marker: "X",
        score: 0
    };
    let playerO = {
        name: "Player O",
        marker: "O",
        score: 0
    };

    const startGameButton = document.querySelector("#start-game-button");
    const newGameButton = document.querySelector("#new-game-button");
    const playAgainButton = document.querySelector("#play-again-button");

    const allBoardButtons = document.querySelectorAll(".board-button");

    const playerXNameInput = document.querySelector("#player-x-name");
    const playerONameInput = document.querySelector("#player-o-name");

    const playerXVsText = document.querySelector("#player-x-vs-text");
    const playerOVsText = document.querySelector("#player-o-vs-text");

    const scoreboard = document.querySelector("#scoreboard");
    const gameMessage = document.querySelector("#game-message");

    function startGame () {

        startGameButton.classList.add("hidden");
        playerXNameInput.classList.add("hidden");
        playerONameInput.classList.add("hidden");

        if (playerXNameInput.value !== "") playerX.name = playerXNameInput.value;
        if (playerONameInput.value !== "") playerO.name = playerONameInput.value;

        activePlayer = playerX;

        playerOVsText.textContent = playerO.name;
        playerXVsText.textContent = playerX.name;
        scoreboard.textContent = `${playerX.score} - ${playerO.score}`;
        gameMessage.textContent = `${activePlayer.name}'s turn`;

        playerXVsText.classList.remove("hidden");
        playerOVsText.classList.remove("hidden");
        scoreboard.classList.remove("hidden");
        gameMessage.classList.remove("hidden");

    };

    function newGame () {

        const playerForm = document.querySelector("#player-form");

        playerX.name = "Player X";
        playerO.name = "Player O";
        playerX.score = 0;
        playerO.score = 0;
        playerForm.reset();
        gameBoard = ["", "", "", "", "", "", "", "", ""];
        updateBoard();

        newGameButton.classList.add("hidden");
        playAgainButton.classList.add("hidden");
        playerXVsText.classList.add("hidden");
        playerOVsText.classList.add("hidden");
        scoreboard.classList.add("hidden");
        gameMessage.classList.add("hidden");

        startGameButton.classList.remove("hidden");
        playerXNameInput.classList.remove("hidden");
        playerONameInput.classList.remove("hidden");

    };

    function playAgain () {

        gameBoard = ["", "", "", "", "", "", "", "", ""];
        updateBoard();

        newGameButton.classList.add("hidden");
        playAgainButton.classList.add("hidden");

        activePlayer = playerX;
        gameMessage.textContent = `${activePlayer.name}'s turn`;

    };

    function updateBoard () {

        allBoardButtons.forEach((button, index) => {

            button.innerHTML = "";

            if (gameBoard[index] === playerX.marker) {

                const xSVG = document.querySelector("#x-svg");
                const xMarker = xSVG.cloneNode(true);

                xMarker.classList.remove("header-svg");
                xMarker.classList.add("x-marker");
                button.appendChild(xMarker);

            } else if (gameBoard[index] === playerO.marker) {

                const oSVG = document.querySelector("#o-svg");
                const oMarker = oSVG.cloneNode(true);

                oMarker.classList.remove("header-svg");
                oMarker.classList.add("o-marker");
                button.appendChild(oMarker);

            };
        });
    };

    function checkGameOver () {

        if (gameBoard[0] === activePlayer.marker && gameBoard[1] === activePlayer.marker && gameBoard[2] === activePlayer.marker ||
            gameBoard[3] === activePlayer.marker && gameBoard[4] === activePlayer.marker && gameBoard[5] === activePlayer.marker ||
            gameBoard[6] === activePlayer.marker && gameBoard[7] === activePlayer.marker && gameBoard[8] === activePlayer.marker ||
            gameBoard[0] === activePlayer.marker && gameBoard[3] === activePlayer.marker && gameBoard[6] === activePlayer.marker ||
            gameBoard[1] === activePlayer.marker && gameBoard[4] === activePlayer.marker && gameBoard[7] === activePlayer.marker ||
            gameBoard[2] === activePlayer.marker && gameBoard[5] === activePlayer.marker && gameBoard[8] === activePlayer.marker ||
            gameBoard[0] === activePlayer.marker && gameBoard[4] === activePlayer.marker && gameBoard[8] === activePlayer.marker ||
            gameBoard[2] === activePlayer.marker && gameBoard[4] === activePlayer.marker && gameBoard[6] === activePlayer.marker) { 

                activePlayer.score++;
                scoreboard.textContent = `${playerX.score} - ${playerO.score}`;
                gameMessage.textContent = `${activePlayer.name} wins!`;
                activePlayer = undefined;

                newGameButton.classList.remove("hidden");
                playAgainButton.classList.remove("hidden");

        } else if (gameBoard[0] !== "" && gameBoard[1] !== "" && gameBoard[2] !== "" && gameBoard[3] !== "" && gameBoard[4] !== "" && gameBoard[5] !== "" && gameBoard[6] !== "" && gameBoard[7] !== "" && gameBoard[8] !== "") {

                gameMessage.textContent = "Cat's game";
                newGameButton.classList.remove("hidden");
                playAgainButton.classList.remove("hidden");

        } else changeTurns (); 

        function changeTurns () {

            activePlayer === playerX ? activePlayer = playerO : activePlayer = playerX;
            gameMessage.textContent = `${activePlayer.name}'s turn`;
                    
        };
    };

    startGameButton.addEventListener("click", () => startGame());

    newGameButton.addEventListener("click", () => newGame());

    playAgainButton.addEventListener("click", () => playAgain());

    allBoardButtons.forEach((button) => {
        button.addEventListener("click", () => {

            const index = Number(button.dataset.index);

            if (gameBoard[index] === "" && activePlayer !== undefined) {

                gameBoard[index] = activePlayer.marker;
                updateBoard();
                checkGameOver();

            };
        });
    });

})();