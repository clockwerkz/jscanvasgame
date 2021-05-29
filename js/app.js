/**   @type {HTMLCanvasElement} */

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
const CANVAS_HEIGHT = 850;
const CANVAS_WIDTH = 500;

class Enemy {
    constructor(){
        this.x = 10;
        this.y = 50,
        this.width = 50,
        this.height = 50
    }
}

const enemy1 = new Enemy();

function animate() {
    ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
    enemy1.x++;
    enemy1.y++;
    ctx.fillRect(enemy1.x, enemy1.y, enemy1.width, enemy1.height);
    requestAnimationFrame(animate);
}

animate();