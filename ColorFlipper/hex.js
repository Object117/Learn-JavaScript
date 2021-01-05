const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    let hexColor = "#";
    for(let cnt = 0; cnt < 6; cnt++) {
        hexColor += hex[getRandomNumber()];
    }
    console.log(hexColor);
});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}