function runGame () {
    let activePlayer;
    let passivePlayer;
    let runningScore = { 
        playerXScore: 0,
        playerOScore: 0
    };
    const allButtons = document.querySelectorAll("button");
    const playerXName = document.querySelector("#player-x-name");
    const playerOName = document.querySelector("#player-o-name");
    const playerX = document.querySelector("#player-x");
    const playerO = document.querySelector("#player-o");
    const XMarker = document.querySelector("x-marker");
    const OMarker = document.querySelector("o-marker");
    const turnIndicator = document.querySelector("#turn-indicator");

    allButtons.forEach((button) => 
        button.addEventListener("click", () => {
            switch(button.id) {
                case "start-game-button":
                    return startGame(button);  
                case "new-game-button":
                    return;
                case "play-again-button":
                    return;
            };
        })
    );



    function startGame (button) {
        button.classList.add("hidden");
        playerXName.classList.add("hidden");
        playerOName.classList.add("hidden");

        activePlayer = playerXName.value;
        passivePlayer = playerOName.value;

        if (playerXName.value !== "") playerX.textContent = activePlayer;
        if (playerOName.value !== "") playerO.textContent = passivePlayer;

        turnIndicator.textContent = `${activePlayer}'s turn`;

        playerX.classList.remove("hidden");
        playerO.classList.remove("hidden");
        turnIndicator.classList.remove("hidden");
    };

    function changeTurns (activePlayer, passivePlayer) {
        activePlayer = passivePlayer;
        passivePlayer = activePlayer;
        turnIndicator.textContent = `${activePlayer}'s turn`;
    };

};

runGame();