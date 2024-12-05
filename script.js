const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

function jump () {
    if (dino.classList != "jump") {
    dino.classList.add("jump");

    setTimeout(function () { //If we want the dinosaur to continously jump over obstacles, the setTimeout method is needed to call out a function after certain number of milliseconds
        dino.classList.remove("jump");
    }, 300); //After 300 milliseconds along with the jump function, that class will be removed. Afterwards, the dinosaur can jump again until continously
    }//Without the timeout method, the specified action will only be executed once.
    //Pressing the down arrow key makes the dinosaur jump once. Pressing the down arrow key another doesn't make the dinosuar jump again
}

let isAlive = setInterval(function () {
    //Grabs the current "dino" value of the Y position
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    //Grabs the current "cactus" value of the X position
        let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    //With the if statement, the dinosaur will collide into the obstacle if this condition is true
    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 150) {
        alert("Game Over");
    }//If the dinosaur collides into the obstacles, the alert method will be executed as well

}, 10);

document.addEventListener("keydown", function (event) { //EventListener is a function that waits for specific or certain event to occur on html element
    //When the event occurs, that specified action will be executed
    jump();
}); //Most common examples would be keyboards or game controllers connected to computer devices
//In order to simply make the dinosaur jump over obstacles, a command must be written or to be input with the function to jump
//It can be any command: From arrow keys to spacebar
