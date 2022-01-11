
document.getElementById('rules').onclick = function(){
  let element = document.getElementById("modalRules");
  element.style.display = "block";
}

document.getElementById('close').onclick = function(){
    let element = document.getElementById("modalRules");
    element.style.display = "none";
}

let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');

let game = document.getElementById('game');
let picked = document.getElementById('picked');
let yourCircle = document.getElementById('yourcircle');
let houseCircle = document.getElementById('housecircle');

let pole = [1,2,3];
let yourPick;
let score = 0;

function housePick(){
    setTimeout( function (){

        houseCircle.style.display =  "none";
        let item = pole[Math.floor(Math.random()*pole.length)];
        const newPick = document.createElement("div");

        if (item === 1){
            const newPick = document.createElement("div");
            newPick.classList.add("rock");

            const newImg = document.createElement("img");
            newImg.src = "images/icon-rock.svg";

            let vole = document.getElementById('appendPickHouse')
            vole.appendChild(newPick);
            newPick.appendChild(newImg);
        } else if (item === 2){
            newPick.classList.add("paper");

            const newImg = document.createElement("img");
            newImg.src = "images/icon-paper.svg";

            let vole = document.getElementById('appendPickHouse')
            vole.appendChild(newPick);
            newPick.appendChild(newImg);
        }else if (item === 3){

            newPick.classList.add("scissors");

            const newImg = document.createElement("img");
            newImg.src = "images/icon-scissors.svg";

            let vole = document.getElementById('appendPickHouse')
            vole.appendChild(newPick);
            newPick.appendChild(newImg);
        }

        setTimeout(function (){

            let createdResult = document.getElementById('result');
            let newResult = document.createElement("h2");
            let createdButton = document.createElement("div");
            let appendPicked = document.getElementById('appendPick');
            let appendPickedHouse = document.getElementById('appendPickHouse');

            function createButton(){
                createdButton.innerText = "PLAY AGAIN";
                createdButton.classList.add("playAgain");

                createdResult.appendChild(newResult);
                createdResult.appendChild(createdButton);
            }

            function createWinCircles(){
                let createWinCircles = document.getElementById('appendPick');
                createWinCircles.classList.add('winCircles')
            }

            function createLoseCircles(){
                let createLoseCircles = document.getElementById('appendPickHouse');
                createLoseCircles.classList.add('loseCircles')
            }

            function drawScore(){
                let scoreNumber = document.getElementById('scoreNumber');
                scoreNumber.innerText = score;
            }

            if (item === yourPick){
                newResult.innerText = "DRAW";
                createButton();

            } else if (item !== yourPick){
                if (yourPick === 1 && item === 2){
                    newResult.innerText = "YOU LOSE";
                    createButton();
                    createLoseCircles()
                    score = score -1;
                    drawScore()
                }else if (yourPick === 1 && item === 3){
                    newResult.innerText = "YOU WIN";
                    createButton();
                    createWinCircles();
                    score = score +1;
                    drawScore()
                }else if (yourPick === 2 && item === 1){
                    newResult.innerText = "YOU WIN";
                    createButton();
                    createWinCircles();
                    score = score +1;
                    drawScore()
                }else if (yourPick === 2 && item === 3){
                    newResult.innerText = "YOU LOSE";
                    createButton();
                    createLoseCircles()
                    score = score -1;
                    drawScore()
                }else if (yourPick === 3 && item === 1){
                    newResult.innerText = "YOU LOSE";
                    createButton();
                    createLoseCircles()
                    score = score -1;
                    drawScore()
                }else if (yourPick === 3 && item === 2){
                    newResult.innerText = "YOU WIN";
                    createButton();
                    createWinCircles();
                    score = score +1;
                    drawScore()
                }
            }
            if (createdButton.isConnected){
                createdButton.onclick = function (){
                    game.style.display = "flex";
                    houseCircle.style.display = "block";
                    yourCircle.style.display = "block";
                    createdButton.remove();
                    newResult.remove();

                    while (appendPickedHouse.hasChildNodes()) {
                        appendPickedHouse.removeChild(appendPickedHouse.lastChild);
                    }

                    while (appendPicked.hasChildNodes()) {
                        appendPicked.removeChild(appendPicked.lastChild);
                    }

                    appendPicked.classList.remove('winCircles')
                    appendPickedHouse.classList.remove('loseCircles')
                    picked.style.display =  "none";
                }
            }
        },250)

    },500)

}

rock.onclick = function(){

    game.style.display = "none";
    picked.style.display = "flex";
    yourCircle.style.display =  "none";

    const newPick = document.createElement("div");
    newPick.classList.add("rock");

    const newImg = document.createElement("img");
    newImg.src = "images/icon-rock.svg";


    let vole = document.getElementById('appendPick')
    vole.appendChild(newPick);
    newPick.appendChild(newImg);

    housePick();
    yourPick = 1;
}

paper.onclick = function(){

    game.style.display = "none";
    picked.style.display = "flex";
    yourCircle.style.display =  "none";

    const newPick = document.createElement("div");
    newPick.classList.add("paper");

    const newImg = document.createElement("img");
    newImg.src = "images/icon-paper.svg";


    let vole = document.getElementById('appendPick')
    vole.appendChild(newPick);
    newPick.appendChild(newImg);

    housePick();
    yourPick = 2;
}

scissors.onclick = function(){

    game.style.display = "none";
    picked.style.display = "flex";
    yourCircle.style.display =  "none";

    const newPick = document.createElement("div");
    newPick.classList.add("scissors");

    const newImg = document.createElement("img");
    newImg.src = "images/icon-scissors.svg";


    let vole = document.getElementById('appendPick')
    vole.appendChild(newPick);
    newPick.appendChild(newImg);

    housePick();
    yourPick = 3;
}
