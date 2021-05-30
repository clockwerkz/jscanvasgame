/**   @type {HTMLCanvasElement} */

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
const CANVAS_HEIGHT = 850;
const CANVAS_WIDTH = 500;
const NUMBER_OF_ENEMIES = 10;
const enemiesArray = [];
canvas.setAttribute('height', CANVAS_HEIGHT);
canvas.setAttribute('width', CANVAS_WIDTH);


let gameFrame = 0;

class Enemy {
    constructor(){
        this.image = new Image();
        this.image.src = '../images/enemy1.png';
        this.spriteWidth = 293;
        this.spriteHeight = 155;
        this.width = this.spriteWidth / 2.5;
        this.height = this.spriteHeight / 2.5;
        this.x = Math.random() * (canvas.width - this.width);
            this.y = Math.random() * (canvas.height - this.height);
        this.speed = Math.random() * 4 - 2;
        this.frame = 0;
        this.flapSpeed = parseInt(Math.random() * 3)  + 1;
    }
    update(){
        this.x+=Math.random() * 4 - 2;
        this.y+=Math.random() * 6 - 3;
        //update sprites
        if (gameFrame %  this.flapSpeed == 0) {
            this.frame > 4 ? this.frame = 0 : this.frame++;
        }
    }
    draw(){
        ctx.drawImage(this.image, this.frame * this.spriteWidth ,0,this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }
}
for (let i=0; i < NUMBER_OF_ENEMIES; i++) {
    enemiesArray.push(new Enemy());
}
const enemy1 = new Enemy();

function animate() {
    ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
    for (let enemy of enemiesArray) {
        enemy.update();
        enemy.draw();
    }
    gameFrame++;
    requestAnimationFrame(animate);
}

animate();