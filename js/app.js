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
///Enemy 1: Width 293, Height 155
//Enemy 2: Width 266, Height 188
class Enemy {
    constructor(){
        this.image = new Image();
        this.image.src = '../images/enemy2.png';
        this.spriteWidth = 266;
        this.spriteHeight =188;
        this.width = this.spriteWidth / 2.5;
        this.height = this.spriteHeight / 2.5;
        this.x = Math.random() * (canvas.width - this.width);
        this.y = Math.random() * (canvas.height - this.height);
        this.speed = Math.random() * 4 + 1;
        this.frame = 0;
        this.flapSpeed = parseInt(Math.random() * 3)  + 1;
        this.angle = Math.random() * 2;
        this.angleSpeed = Math.random() * 0.2;
        this.curve = Math.random() * 4 + 1;
    }
    update(){
        this.x -= this.speed;
        this.y+= this.curve * Math.sin(this.angle);
        this.angle += this.angleSpeed;
        //update sprites
        if (this.x + this.width < 0) this.x = canvas.width;
        if (gameFrame %  this.flapSpeed == 0) {
            this.frame = this.frame > 4 ?  0 : this.frame + 1;
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