let randoOne
let randoTwo

function rollingOne(){
    randoOne = Math.floor((Math.random()*6)+1);
    if (randoOne === 1) {
        document.querySelector(".img1").src="./images/dice1.png";
    }   else if (randoOne === 2) {
        document.querySelector(".img1").src="./images/dice2.png";
    } else if (randoOne === 3) {
        document.querySelector(".img1").src="./images/dice3.png";
    } else if (randoOne === 4) {
        document.querySelector(".img1").src="./images/dice4.png";
    }   else if (randoOne === 5) {
        document.querySelector(".img1").src="./images/dice5.png";
    } else {
        document.querySelector(".img1").src="./images/dice6.png";
    }
    console.log(randoOne);
}

function rollingTwo(){
    randoTwo = Math.floor((Math.random()*6)+1);
    if (randoTwo === 1) {
            document.querySelector(".img2").src="./images/dice1.png";
        }   else if (randoTwo === 2) {
            document.querySelector(".img2").src="./images/dice2.png";
        } else if (randoTwo === 3) {
            document.querySelector(".img2").src="./images/dice3.png";
        } else if (randoTwo === 4) {
            document.querySelector(".img2").src="./images/dice4.png";
        }   else if (randoTwo === 5) {
            document.querySelector(".img2").src="./images/dice5.png";
        } else {
            document.querySelector(".img2").src="./images/dice6.png";
    }
    console.log(randoTwo);
}

function winner(){
    if (randoOne === randoTwo){
        document.querySelector("h1").innerText = "Dwaw!"  
    } else if (randoOne < randoTwo) {
        document.querySelector("h1").innerText = "Player 2 Wins!"
    } else if (randoOne > randoTwo) {
        document.querySelector("h1").innerText = "Player 1 Wins!"
    }
}


function reset(){
    document.querySelector("h1").innerText = "Click Me!"
}
