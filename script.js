function blackColorSelected (){
    let colorBlack = document.getElementById("black");
    colorBlack.classList.add("selected");
}
    
blackColorSelected();

let black = document.getElementById("black");
let yellow = document.getElementById("yellow");
let green = document.getElementById("green");
let blue = document.getElementById("blue");

black.addEventListener("click", addClassSelected);
yellow.addEventListener("click", addClassSelected);
green.addEventListener("click", addClassSelected);
blue.addEventListener("click", addClassSelected);

function addClassSelected (event){
    let colorSelected = document.querySelector(".selected")
    colorSelected.classList.remove("selected");
    event.target.classList.add("selected");
}
