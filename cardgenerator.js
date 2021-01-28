window.onload = function(){

    let suits = ['♠', '♣', '♥', '♦'];
    let number = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let suitContentTop = document.getElementById("suit_top");
    let suitContentBottom = document.getElementById("suit_bottom");
    let numContent = document.getElementById("number");

    let suitRandom = suits[Math.floor(Math.random() * (3 - 0 + 1) ) + 0];
    let numRandom = number[Math.floor(Math.random () * (12 - 0 + 1) ) + 0];

    suitContentTop.textContent = suitRandom;
    suitContentBottom.textContent = suitRandom;
    numContent.textContent = numRandom;

    if (suitRandom == '♥' || suitRandom == '♦') {
        suitContentTop.style.color = "red"
        suitContentBottom.style.color = "red"
    }

}
