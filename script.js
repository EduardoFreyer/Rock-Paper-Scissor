var paper = document.getElementById('paper').onclick = paperGame;
var rock = document.getElementById('rock').onclick = rockGame;
var scissor = document.getElementById('scissor'). onclick = scissorGame;

function randomNumber() {
    return Math.floor(Math.random() * 3) + 1
}

function paperGame() {
    if (1 - randomNumber() === -1) {
        var win = document.createElement('div');
        win.setAttribute('class', 'win');
        win.innerHTML = "You Win!";
        document.body.appendChild(win);
        setTimeout(function () {
            win.innerHTML = "";
        }, 1000);
    } else if (1 - randomNumber() === -2) {
        var lose = document.createElement('div');
        lose.setAttribute('class', 'lose');
        lose.innerHTML = "You Lose!";
        document.body.appendChild(lose);
        setTimeout(function () {
            lose.innerHTML = "";
        }, 1000);
    } else if (1 - randomNumber() === 0) {
        var draw = document.createElement('div');
        draw.setAttribute('class', 'draw');
        draw.innerHTML = "Draw!";
        document.body.appendChild(draw);
        setTimeout(function () {
            draw.innerHTML = "";
        }, 1000);
    }
}

function rockGame() {
    if (2 - randomNumber() === -1) {
        var win = document.createElement('div');
        win.setAttribute('class', 'win');
        win.innerHTML = "You Win!";
        document.body.appendChild(win);
        setTimeout(function () {
            win.innerHTML = "";
        }, 1000);
    } else if (2 - randomNumber() === 1) {
        var lose = document.createElement('div');
        lose.setAttribute('class', 'lose');
        lose.innerHTML = "You Lose!";
        document.body.appendChild(lose);
        setTimeout(function () {
            lose.innerHTML = "";
        }, 1000);
    } else if (2 - randomNumber() === 0) {
        var draw = document.createElement('div');
        draw.setAttribute('class', 'draw');
        draw.innerHTML = "Draw!";
        document.body.appendChild(draw);
        setTimeout(function () {
            draw.innerHTML = "";
        }, 1000);
    }
}

function scissorGame() {
    if (3 - randomNumber() === 2) {
        var win = document.createElement('div');
        win.setAttribute('class', 'win');
        win.innerHTML = "You Win!";
        document.body.appendChild(win);
        setTimeout(function () {
            win.innerHTML = "";
        }, 1000);
    } else if (3 - randomNumber() === 1) {
        var lose = document.createElement('div');
        lose.setAttribute('class', 'lose');
        lose.innerHTML = "You Lose!";
        document.body.appendChild(lose);
        setTimeout(function () {
            lose.innerHTML = "";
        }, 1000);
    } else if (3 - randomNumber() === 0) {
        var draw = document.createElement('div');
        draw.setAttribute('class', 'draw');
        draw.innerHTML = "Draw!";
        document.body.appendChild(draw);
        setTimeout(function () {
            draw.innerHTML = "";
        }, 1000);
    }
}