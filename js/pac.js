        /*
         * Pacman by @ramziosta
         * Credit: ramziosta.github.io/
         */
const pacArray = [
    ['https://ramziosta.github.io/Pacman/images/PacMan1.png', 'https://ramziosta.github.io/Pacman/images/PacMan2.png'],['https://ramziosta.github.io/Pacman/images/PacMan3.png', 'https://ramziosta.github.io/Pacman/images/PacMan4.png']
];
var focus = 0;
const pacMen = [];  // See list hoiustab kõik lisatavad PuckManid

// Funktsioon tagastab objekti suvaliste väärtustega
function setToRandom(scale) {
    return {
            x: Math.random() * scale, y: Math.random() * scale,
    };
}

function makePac() { // See funktsioon vastutab PuckMani isendi valmimise eest
    let velocity = setToRandom(13); // {x:?, y:?}
    let position = setToRandom(800);
    let direction = 0;
    let game = document.getElementById('game');
    let img = document.createElement('img');
    img.style.position = 'absolute';
    img.src = 'https://ramziosta.github.io/Pacman/images/PacMan1.png';
    img.style.width = 100 + "px";
    img.style.left = position.x + "px";
    img.style.top = position.y + "px";
    game.appendChild(img);
    return {
          position, velocity, img, direction
    };
}

function update() { // Funktsioon paneb loodud PuckManid ringi liikuma 
    focus = (focus + 1) % 2;
    pacMen.forEach((item) => {
            checkCollisions(item);
        item.img.src = pacArray[item.direction][focus];
            item.position.x += item.velocity.x;
            item.position.y += item.velocity.y;
            item.img.style.left = item.position.x +"px";
            item.img.style.top = item.position.y + "px";
    });
    setTimeout(update, 125);
}

function checkCollisions(item) { // Funktsioon kontrollib, kas sein on juhuslikult ees, kui on ees siis pöörab tagasi
    let edgeW = window.innerWidth - item.img.width; let edgeH = window.innerHeight -item.img.width;
    if (item.position.x >= edgeW){item.velocity.x = item.velocity.x * -1; item.direction = 1;}
    if (item.position.x <=0){item.velocity.x = item.velocity.x * -1; item.direction = 0;}
    if (item.position.y >= edgeH || item.position.y <=0){item.velocity.y = item.velocity.y * -1;}
}

function makeOne() { // Funktsioon kutsub välja teise funktsiooni, mis teeb PuckMane
pacMen.push(makePac()); 
}
