(() => {

    let activePlayer;

    let playerX = {
        name: "Player X",
        score: 0
    };
    let playerO = {
        name: "Player O",
        score: 0
    };

    const allButtons = document.querySelectorAll("button");

    const startGameButton = document.querySelector("#start-game-button");
    const newGameButton = document.querySelector("#new-game-button");
    const playAgainButton = document.querySelector("#play-again-button");

    const playerXNameInput = document.querySelector("#player-x-name");
    const playerONameInput = document.querySelector("#player-o-name");

    const playerXVsText = document.querySelector("#player-x-vs-text");
    const playerOVsText = document.querySelector("#player-o-vs-text");

    const scoreboard = document.querySelector("#scoreboard");
    const gameMessage = document.querySelector("#game-message");

    allButtons.forEach((button) => 

        button.addEventListener("click", () => {
            
            if (button.id.includes("board-button")) return checkActivePlayer(button);

            else switch(button.id) {

                case "start-game-button":
                    return startGame();  
                    
                case "new-game-button":
                    return newGame();

                case "play-again-button":
                    return playAgain();

            };
        })
    );

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

    function checkActivePlayer (button) {

        if (activePlayer === playerX && button.childNodes.length === 0) {

            const xSVG = document.querySelector("#x-svg");
            const xMarker = xSVG.cloneNode(true);

            xMarker.classList.remove("header-svg");
            xMarker.classList.add("x-marker");
            button.appendChild(xMarker);

            checkGameOver(playerX);

        } else if (activePlayer === playerO && button.childNodes.length === 0) {
                
            const oSVG = document.querySelector("#o-svg");
            const oMarker = oSVG.cloneNode(true);

            oMarker.classList.remove("header-svg");
            oMarker.classList.add("o-marker");
            button.appendChild(oMarker);

            checkGameOver(playerO);

        } else return;

            function checkGameOver (currentPlayer) {

            const allXMarkers = document.querySelectorAll(".x-marker");
            const allOMarkers = document.querySelectorAll(".o-marker");

            if (currentPlayer === playerX) { 

                const xTilesArray = [];
                allXMarkers.forEach((xMarker) => xTilesArray.push(xMarker.closest(".board-button")));

                if (xTilesArray.includes(document.querySelector("#board-button-1")) && xTilesArray.includes(document.querySelector("#board-button-2")) && xTilesArray.includes(document.querySelector("#board-button-3")) || 
                    xTilesArray.includes(document.querySelector("#board-button-4")) && xTilesArray.includes(document.querySelector("#board-button-5")) && xTilesArray.includes(document.querySelector("#board-button-6")) || 
                    xTilesArray.includes(document.querySelector("#board-button-7")) && xTilesArray.includes(document.querySelector("#board-button-8")) && xTilesArray.includes(document.querySelector("#board-button-9")) ||
                    xTilesArray.includes(document.querySelector("#board-button-1")) && xTilesArray.includes(document.querySelector("#board-button-4")) && xTilesArray.includes(document.querySelector("#board-button-7")) ||
                    xTilesArray.includes(document.querySelector("#board-button-2")) && xTilesArray.includes(document.querySelector("#board-button-5")) && xTilesArray.includes(document.querySelector("#board-button-8")) ||
                    xTilesArray.includes(document.querySelector("#board-button-3")) && xTilesArray.includes(document.querySelector("#board-button-6")) && xTilesArray.includes(document.querySelector("#board-button-9")) ||
                    xTilesArray.includes(document.querySelector("#board-button-1")) && xTilesArray.includes(document.querySelector("#board-button-5")) && xTilesArray.includes(document.querySelector("#board-button-9")) ||
                    xTilesArray.includes(document.querySelector("#board-button-3")) && xTilesArray.includes(document.querySelector("#board-button-5")) && xTilesArray.includes(document.querySelector("#board-button-7"))) {

                    activePlayer = undefined;
                    playerX.score++;

                    scoreboard.textContent = `${playerX.score} - ${playerO.score}`;
                    gameMessage.textContent = `${playerX.name} wins!`;

                    newGameButton.classList.remove("hidden");
                    playAgainButton.classList.remove("hidden");

                } else if (allXMarkers.length + allOMarkers.length === 9) {

                    gameMessage.textContent = "Cat's game";
                    newGameButton.classList.remove("hidden");
                    playAgainButton.classList.remove("hidden");

                } else changeTurns (playerO);

            } else if (currentPlayer === playerO) {

                const oTilesArray = [];
                allOMarkers.forEach((oMarker) => oTilesArray.push(oMarker.closest(".board-button")));
                    
                if (oTilesArray.includes(document.querySelector("#board-button-1")) && oTilesArray.includes(document.querySelector("#board-button-2")) && oTilesArray.includes(document.querySelector("#board-button-3")) || 
                    oTilesArray.includes(document.querySelector("#board-button-4")) && oTilesArray.includes(document.querySelector("#board-button-5")) && oTilesArray.includes(document.querySelector("#board-button-6")) || 
                    oTilesArray.includes(document.querySelector("#board-button-7")) && oTilesArray.includes(document.querySelector("#board-button-8")) && oTilesArray.includes(document.querySelector("#board-button-9")) ||
                    oTilesArray.includes(document.querySelector("#board-button-1")) && oTilesArray.includes(document.querySelector("#board-button-4")) && oTilesArray.includes(document.querySelector("#board-button-7")) ||
                    oTilesArray.includes(document.querySelector("#board-button-2")) && oTilesArray.includes(document.querySelector("#board-button-5")) && oTilesArray.includes(document.querySelector("#board-button-8")) ||
                    oTilesArray.includes(document.querySelector("#board-button-3")) && oTilesArray.includes(document.querySelector("#board-button-6")) && oTilesArray.includes(document.querySelector("#board-button-9")) ||
                    oTilesArray.includes(document.querySelector("#board-button-1")) && oTilesArray.includes(document.querySelector("#board-button-5")) && oTilesArray.includes(document.querySelector("#board-button-9")) ||
                    oTilesArray.includes(document.querySelector("#board-button-3")) && oTilesArray.includes(document.querySelector("#board-button-5")) && oTilesArray.includes(document.querySelector("#board-button-7"))) {

                    activePlayer = undefined;
                    playerO.score++;

                    scoreboard.textContent = `${playerX.score} - ${playerO.score}`;
                    gameMessage.textContent = `${playerO.name} wins!`;

                    newGameButton.classList.remove("hidden");
                    playAgainButton.classList.remove("hidden");

                } else if (allXMarkers.length + allOMarkers.length === 9) {

                    gameMessage.textContent = "Cat's game";
                    newGameButton.classList.remove("hidden");
                    playAgainButton.classList.remove("hidden");

                } else changeTurns (playerX);
            };

            function changeTurns (nextPlayer) {

                activePlayer = nextPlayer;
                gameMessage.textContent = `${activePlayer.name}'s turn`;
                    
            };
        };
    };

    function newGame () {

        const playerForm = document.querySelector("#player-form");
        const allXMarkers = document.querySelectorAll(".x-marker");
        const allOMarkers = document.querySelectorAll(".o-marker");

        playerX.name = "Player X";
        playerO.name = "Player O";
        playerX.score = 0;
        playerO.score = 0;
        playerForm.reset();
        allXMarkers.forEach((marker) => marker.remove());
        allOMarkers.forEach((marker) => marker.remove());

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

        const allXMarkers = document.querySelectorAll(".x-marker");
        const allOMarkers = document.querySelectorAll(".o-marker");

        allXMarkers.forEach((marker) => marker.remove());
        allOMarkers.forEach((marker) => marker.remove());

        newGameButton.classList.add("hidden");
        playAgainButton.classList.add("hidden");

        activePlayer = playerX;
        gameMessage.textContent = `${activePlayer.name}'s turn`;

    };
})();

// Git message:
// Fix bug where cat's game would take place before win condition