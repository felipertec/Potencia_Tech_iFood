const state = {
    view: {
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score"),
    },
    values: {

        gameVelocity: 1000,
        hitPosition: 0,
        result: 0,
        currentTime: 60
    },
    actions: {
        timeId: setInterval(randomSquare, 1000),
        countDownTimerId: setInterval(countDown, 1000),
    }
}

function countDown() {
    state.values.currentTime--;
    state.view.timeLeft.textContent = state.values.currentTime;

    if (state.values.currentTime <= 0) {
        clearInterval(state.actions.countDownTimerId)
        clearInterval(state.actions.timeId)
        alert("Game Over! O resultado foi: " + state.values.result);
    }
}

function randomSquare() {
    state.view.squares.forEach((square) => {
        square.classList.remove("enemy")
    })

    let randomNumber = Math.floor(Math.random() * 9);
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add("enemy");
    state.values.hitPosition = randomSquare;
}


function addListenerHitBox() {
    state.view.squares.forEach((square) => {
        square.addEventListener("mousedown", () => {
            alert(state.values.hitPosition)
            if (square.id === state.values.hitPosition) {
                alert("Clicou")
                state.values.result++;
                state.view.score.textContent = state.values.result;
                state.values.hitPosition = null;
            }
        })
    });
}

function initialize() {
    addListenerHitBox();
}

initialize();