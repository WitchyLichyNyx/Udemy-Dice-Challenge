let randoOne
let randoTwo
function rollingOne(){
    randoOne = Math.floor((Math.random()*6)+1);
    document.querySelector(".img1").src="./images/dice" + randoOne + ".png";
}
function rollingTwo(){
    randoTwo = Math.floor((Math.random()*6)+1);
    document.querySelector(".img2").src="./images/dice" + randoTwo + ".png";
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