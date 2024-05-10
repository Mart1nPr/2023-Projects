// Game 
const player = document.querySelector('.player');

let gameState = {
    playerY: 0,
    playerX: 500,
}

function tick() {
    const maxVertical = window.innerHeight -60 -55;
    const newPlayerY = Math.min(gameState.playerY + 3, maxVertical);
    gameState = {...gameState, playerY: newPlayerY}
    player.style.top = gameState.playerY + 'px';
    player.style.left = gameState.playerX + 'px';
}

setInterval(tick, 16);

addEventListener("keydown", (event) => {
    if (event.code == "ArrowRight") {
        gameState = {...gameState, playerX: gameState.playerX +3}
    } else if (event.code == "ArrowLeft") {
        gameState = {...gameState, playerX: gameState.playerX -3}
    } else if (event.code == "ArrowUp") {
        const maxVertical = window.innerHeight -60 -55;
        if (maxVertical <= gameState.playerY) {
            gameState = {...gameState, playerY: gameState.playerY -60}
        }
    }
});