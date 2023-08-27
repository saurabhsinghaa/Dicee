let p1 = document.getElementsByClassName("img1")[0];
let p2 = document.getElementsByClassName('img2')[0];
let result = document.getElementsByTagName("h1")[0];
let p1Dice = Math.floor((Math.random() * 6) + 1);
let p2Dice = Math.floor((Math.random() * 6) + 1);
// showing dice for P1 
if(p1Dice == 1){
    p1.src = "./images/dice1.png";
}else if(p1Dice == 2){
    p1.src = './images/dice2.png';
}else if(p1Dice == 3){
    p1.src = './images/dice3.png';
}else if(p1Dice == 4){
    p1.src = './images/dice4.png';
}else if(p1Dice == 5){
    p1.src = './images/dice5.png';
}else if(p1Dice == 6){
    p1.src = './images/dice6.png';
}
// showing dice for P2 
if(p2Dice == 1){
    p2.src = './images/dice1.png';
}else if(p2Dice == 2){
    p2.src = './images/dice2.png';
}else if(p2Dice == 3){
    p2.src = './images/dice3.png';
}else if(p2Dice == 4){
    p2.src = './images/dice4.png';
}else if(p2Dice == 5){
    p2.src = './images/dice5.png';
}else if(p2Dice == 6){
    p2.src = './images/dice6.png';
}
// showing result 
if(p1Dice == p2Dice){
    result.innerHTML = 'Match Draw';
}else if(p1Dice > p2Dice){
    result.innerHTML = 'Player 1 Wins';
}else{
    result.innerHTML = 'Player 2 Wins';
}
