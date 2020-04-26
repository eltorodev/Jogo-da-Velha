const players = ["X", "O"];

let currentPlayer = players[0];

let gameover = false;

updateCurrentPlayer();
initializeFields();

/**
 * Atualiza quem é o jogador atual (X/O)
 */
function updateCurrentPlayer() {
    if (gameover) {
        return;
    }

    let player = document.querySelectorAll(".player span")[0];

    if (currentPlayer === players[0]) {
        player.className = "red";
    } else {
        player.className = "blue";
    }

    player.innerHTML = currentPlayer;
}

/**
 * Inicializa os campos
 * Ao clicar adiciona o símbolo (X/O)
 * Atualiza o jogador atual e verifica se há algum vencedor
 */
function initializeFields() {
    var fields = document.getElementsByClassName("field");

    for (let i = 0; i < fields.length; i++) {
        fields[i].addEventListener("click", function () {
            if (gameover) {
                return;
            }

            if (currentPlayer == players[0]) {
                this.innerHTML = players[0];
                this.setAttribute("data-player", players[0]);
                currentPlayer = players[1];
            } else {
                this.innerHTML = players[1];
                this.setAttribute("data-player", players[1]);
                currentPlayer = players[0];
            }
            updateCurrentPlayer();
            verifyWinner();
        });
    }
}

/**
 * Verifica se há campos com um possível ganhador
 */
function verifyWinner() {
    let winner = null;

    fa1 = document.getElementById("fa1").getAttribute("data-player");
    fa2 = document.getElementById("fa2").getAttribute("data-player");
    fa3 = document.getElementById("fa3").getAttribute("data-player");

    fb1 = document.getElementById("fb1").getAttribute("data-player");
    fb2 = document.getElementById("fb2").getAttribute("data-player");
    fb3 = document.getElementById("fb3").getAttribute("data-player");

    fc1 = document.getElementById("fc1").getAttribute("data-player");
    fc2 = document.getElementById("fc2").getAttribute("data-player");
    fc3 = document.getElementById("fc3").getAttribute("data-player");

    if (((fa1 === fa2 && fa1 === fa3) || (fa1 === fb1 && fa1 === fc1) || (fa1 === fb2 && fa1 === fc3)) && fa1 !== "") {
        winner = fa1;
    } else if (((fb2 === fb1 && fb2 === fb3) || (fb2 === fa2 && fb2 === fc2) || (fb2 === fa3 && fb2 === fc1)) && fb2 !== "") {
        winner = fb2;
    } else if (((fc3 === fb3 && fc3 === fa3) || (fc3 === fc2 && fc3 === fc1)) && fc3 !== "") {
        winner = fc3;
    }

    if (winner !== null) {
        gameover = true;
        
        winnerShow = document.getElementById("winner").style.display = "flex"
        winnerElement = document.querySelectorAll("#winner span")[0];
        winnerElement.className = "green";
        winnerElement.innerHTML = winner;
    }
}