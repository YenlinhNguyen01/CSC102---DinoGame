const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

function jump () {
    if (dino.classList != "jump") {
    dino.classList.add("jump");

    setTimeout(function () {
        dino.classList.remove("jump");
    }, 300);
 }
}

let isAlive = setInterval(function () {
    //get current dino Y position
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

    //get current cactus X position
    let cactusLeft = paraseInt(window.getComputedStyle(cactus).getPropertyValue("left")
    );

    //detect collision
    if (cactusLeft < 40 && cactusLeft > 0 && dinoTop > 150 ) {
        //collision
        //I check through many tutorials I am still stuck over the issue with colliding objects that initate an alert
        alert("Game Over!");
    }
}, 10);

document.addEventListener("keydown", function (event) {
    jump();
})