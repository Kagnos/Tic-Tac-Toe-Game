function runGame () {
    let activePlayer;
    let passivePlayer;
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
    const allButtons = document.querySelectorAll("button");
    const playerXNameInput = document.querySelector("#player-x-name");
    const playerONameInput = document.querySelector("#player-o-name");
    const playerXVsText = document.querySelector("#player-x-vs-text");
    const playerOVsText = document.querySelector("#player-o-vs-text");
    const turnIndicatorText = document.querySelector("#turn-indicator-text");

    allButtons.forEach((button) => 
        button.addEventListener("click", () => {
            switch(button.id) {
                case "start-game-button":
                    return startGame(button);  
                case "new-game-button":
                    return;
                case "play-again-button":
                    return;
                case "board-button-1":
                    return checkActivePlayer(button);
                case "board-button-2":
                    return checkActivePlayer(button);
                case "board-button-3":
                    return checkActivePlayer(button);
                case "board-button-4":
                    return checkActivePlayer(button);
                case "board-button-5":
                    return checkActivePlayer(button);
                case "board-button-6":
                    return checkActivePlayer(button);
                case "board-button-7":
                    return checkActivePlayer(button);
                case "board-button-8":
                    return checkActivePlayer(button);
                case "board-button-9":
                    return checkActivePlayer(button);
            };
        })
    );

    function startGame (button) {
        button.classList.add("hidden");
        playerXNameInput.classList.add("hidden");
        playerONameInput.classList.add("hidden");

        activePlayer = playerX;
        passivePlayer = playerO;

        if (playerXNameInput.value !== "") {
            playerX.name = playerXNameInput.value;
            playerXVsText.textContent = playerX.name;
        };
        if (playerONameInput.value !== "") {
            playerO.name = playerONameInput.value;
            playerOVsText.textContent = playerO.name;
        };

        turnIndicatorText.textContent = `${activePlayer.name}'s turn`;

        playerXVsText.classList.remove("hidden");
        playerOVsText.classList.remove("hidden");
        turnIndicatorText.classList.remove("hidden");
    };

    function checkActivePlayer (button) {
        if (activePlayer === playerX && button.textContent === "") {
            let xMarker = document.querySelector(".x-marker");
            xMarker = xMarker.cloneNode(true);
            button.appendChild(xMarker);

            changeTurns (playerX, playerO);
            checkGameOver();
        } else if (activePlayer === playerO && button.textContent === "") {
            let oMarker = document.querySelector(".o-marker");
            oMarker = oMarker.cloneNode(true);
            button.appendChild(oMarker);
            
            changeTurns (playerO, playerX);
            checkGameOver();
        } else return;
    };

    function changeTurns (player1, player2) {
        passivePlayer = player1;
        activePlayer = player2;
        turnIndicatorText.textContent = `${activePlayer.name}'s turn`;
    };

    function checkGameOver () {
        return;
    };

};

runGame();