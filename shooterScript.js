//namespace
const ballApp = {};

//get canvas element
const canvas = document.querySelector('canvas');
const scoreEl = document.querySelector('#scoreEl');
let score = 0;

//change canvas size
canvas.width = innerWidth;
canvas.height = innerHeight / 2;

// console.log(canvas);

//used to draw on the canvas this is the canvas context
const ctx = canvas.getContext('2d'); //2d game so 2d content

//player class
class Player {
    constructor(x, y, radius, color) { //this is the constructor used to create the player
        this.x = x,
            this.y = y,
            this.radius = radius,
            this.color = color,
            this.friction = 0.99,
            this.velocity = {
                x: 0,
                y: 0
            }
    }
    draw() {//function used to draw the player onto the screen
        ctx.beginPath() //to let the context know we want to start drawing on the screen
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false); //arc function used to create a circle
        ctx.fillStyle = this.color; //change color of the circle
        ctx.fill() //create the circle on the screen
    }
    update() {
        this.draw();
        this.velocity.x *= this.friction;
        this.velocity.y *= this.friction;

        if (this.x - this.radius + this.velocity.x > 0 && this.x + this.radius + this.velocity.x < canvas.width) {
            this.x += this.velocity.x;
        } else {
            this.velocity.x = 0;
        }

        if (this.y - this.radius + this.velocity.y > 0 && this.y + this.radius + this.velocity.y < canvas.height) {
            this.y += this.velocity.y;
        } else {
            this.velocity.y = 0;
        }


        // this.y += this.velocity.y;
    }
};


//projectile class
class Projectile {
    constructor(x, y, radius, color, velocity) { //this is the constructor used to create the projectile
        this.x = x,
            this.y = y,
            this.radius = radius,
            this.color = color,
            this.velocity = velocity
    }
    draw() {//function used to draw the projectile onto the screen
        ctx.beginPath() //to let the context know we want to start drawing on the screen
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false); //arc function used to create a circle
        // ctx.rect(this.x, this.y, this.radius, this.radius);
        ctx.fillStyle = this.color; //change color of the circle
        ctx.fill() //create the circle on the screen
    }
    update() {
        this.draw();
        this.x += this.velocity.x,
            this.y += this.velocity.y
    }
}



//enemy class
class Enemy {
    constructor(x, y, radius, color, velocity) { //this is the constructor used to create the projectile
        this.x = x,
            this.y = y,
            this.radius = radius,
            this.color = color,
            this.velocity = velocity,
            this.type = 'regularEnemy',
            this.movementType = 'linear'

        if (Math.random() < 0.25) {
            this.movementType = 'homing';
        }
    }
    draw() {//function used to draw the projectile onto the screen
        ctx.beginPath() //to let the context know we want to start drawing on the screen
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        // ctx.rect(this.x, this.y, this.radius, this.radius) //arc function used to create a circle
        ctx.fillStyle = this.color; //change color of the circle
        ctx.fill() //create the circle on the screen
    }
    update() {
        this.draw();
        if (this.movementType === 'homing') {
            //homing enemy movement
            const angle = Math.atan2(player.y - this.y, player.x - this.x);


            this.velocity = {
                x: Math.cos(angle),
                y: Math.sin(angle)
            }

            this.x += this.velocity.x,
                this.y += this.velocity.y
        } else {
            //linear enemy movement
            this.x += this.velocity.x,
                this.y += this.velocity.y
        }
    }
}

class squareEnemy {
    constructor(x, y, radius, color, velocity) { //this is the constructor used to create the projectile
        this.x = x,
            this.y = y,
            this.radius = radius,
            this.color = color,
            this.velocity = velocity,
            this.amount = 5,
            this.type = 'bigEnemy'
    }
    draw() {//function used to draw the projectile onto the screen
        ctx.beginPath() //to let the context know we want to start drawing on the screen
        // ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        // ctx.rect(this.x, this.y, this.radius, this.radius);
        // ctx.scale(0.2, 0.2);
        // ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.fillStyle = this.color; //change color of the circle
        ctx.fill() //create the circle on the screen
    }

    update() {
        if (this.radius < 0) {
            this.radius = 5;
        }
        this.draw();

        const angle = Math.atan2(player.y - this.y, player.x - this.x);


        this.velocity = {
            x: Math.cos(angle),
            y: Math.sin(angle)
        }

        this.x += this.velocity.x * 0.15,
            this.y += this.velocity.y * 0.15

    }
}

const friction = 0.98;
class Particles {
    constructor(x, y, radius, color, velocity) { //this is the constructor used to create the projectile
        this.x = x,
            this.y = y,
            this.radius = radius,
            this.color = color,
            this.velocity = velocity
        this.alpha = 1;
    }
    draw() {//function used to draw the projectile onto the screen
        ctx.save()
        ctx.globalAlpha = this.alpha;
        ctx.beginPath() //to let the context know we want to start drawing on the screen
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false); //arc function used to create a circle
        ctx.fillStyle = this.color; //change color of the circle
        ctx.fill() //create the circle on the screen
        ctx.restore()
    }
    update() {
        this.draw();
        this.velocity.x *= friction;
        this.velocity.y *= friction;
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        // setTimeout(() => {
        //     this.destroy();
        // }, 1000);
        this.alpha -= 0.01;

    }
    // destroy() { //the one I created
    //     if (this.radius < 1) {
    //         particles.splice(0, 1);
    //     } else {
    //         gsap.to(this, { //shrink enemy transition
    //             radius: this.radius - 1
    //         });
    //     }
    // }
}

const x = canvas.width / 2; //x at center of canvas width
const y = canvas.height / 2; //y at center of canvas height.


//create the player on screen
let player = new Player(x, y, 10, 'white');

let projectiles = []; //array that holds all the projectiles that are made
let enemies = []; //enemies array that holds all the projectiles that are made
let particles = []; //particles array that holds all the particles that are made

ballApp.init = function () {
    projectiles = []; //array that holds all the projectiles that are made
    enemies = []; //enemies array that holds all the projectiles that are made
    particles = []; //particles array that holds all the particles that are made
    player = new Player(x, y, 10, 'white');
    score = 0;
    scoreEl.textContent = score;

}
let timer;
function startSpawnTimer() {
    timer = setInterval(() => {
        spawnEnemies();
    }, 2000);
}

//create enemies on the screen
function spawnEnemies() {

    const radius = (Math.random() * 30) + 8;
    const squareSize = 100;

    // const spawnEnemyType = );
    const spawnEnemyType = Math.floor(Math.random() * 50);
    // console.log(spawnEnemyType);

    let x, y;

    //conditional statements used to randomly generate enemy outside of the canvas


    if (Math.random() < 0.5) {
        x = Math.random() < 0.5 ? 0 - radius : canvas.width + radius;
        y = Math.random() * canvas.height;
    } else {
        x = Math.random() * canvas.width;
        y = Math.random() < 0.5 ? 0 - radius : canvas.height + radius;
    }

    const enemyColor = ['#e84545', '#30e3ca', '#e23e57', '#d6e6f2', '#07689f', '#00e0ff', '#fc5185', '#00adb5', '#f38181', '#aa96da', '#ff467e'];

    // const x = Math.random() < 0.5 ? 0 - radius : canvas.width + radius;
    // const y = Math.random() < 0.5 ? 0 - radius : canvas.height + radius;
    const color = enemyColor[Math.floor(Math.random() * enemyColor.length)];
    const angle = Math.atan2(canvas.height / 2 - y, canvas.width / 2 - x);
    const numbers = [46, 16];

    let speed;
    if (numbers.includes(spawnEnemyType)) {
        speed = 0.15;
    } else {
        speed = (Math.random() * 2) + 1;
    }
    const velocity = {
        x: Math.cos(angle) * speed,
        y: Math.sin(angle) * speed

    } //trig math used to find the angle at which you clicked and pass on to the below array

    if (numbers.includes(spawnEnemyType)) {
        enemies.push(new squareEnemy(x, y, squareSize, color, velocity));
    } else {
        enemies.push(new Enemy(x, y, radius, color, velocity));
    }

}



function spawnBigEnemy(currentX = 0, currentY = 0, sizeOfBall) {
    // const radius = (Math.random() * 30) + 4;
    const radiusSize = sizeOfBall;

    // const spawnEnemyType = Math.floor(Math.random() * 3);

    // console.log(spawnEnemyType);

    let x, y;

    //conditional statements used to randomly generate enemy outside of the canvas

    x = currentX;
    y = currentY;

    const enemyColor = ['#e84545', '#30e3ca', '#e23e57', '#d6e6f2', '#07689f', '#00e0ff', '#fc5185', '#00adb5', '#f38181', '#aa96da', '#ff467e'];

    const color = enemyColor[Math.floor(Math.random() * enemyColor.length)];
    const angle = Math.atan2(canvas.height / 2 - y, canvas.width / 2 - x);

    let speed = 0.15;


    const velocity = {
        x: Math.cos(angle) * speed,
        y: Math.sin(angle) * speed

    } //trig math used to find the angle at which you clicked and pass on to the below array


    enemies.push(new squareEnemy(x, y, radiusSize, color, velocity));


}

let animationId;

function animate() { //used to animate
    animationId = requestAnimationFrame(animate); //constantly calls itself I believe
    ctx.fillStyle = 'rgba(0,0,0,0.1'; //transparent black background that gives all the shapes have a fade effect
    ctx.fillRect(0, 0, canvas.width, canvas.height); //clear the canvas by drawing over itself
    player.update(); //draw the player on screen


    particles.forEach((particle, index) => {
        if (particle.alpha < 0) {
            particles.splice(index, 1);
        } else
            particle.update();
    });

    projectiles.forEach((projectile, projectileIndex) => { //for all the projectiles in the array call the update function 
        projectile.update(); //update position of projectile

        //remove when projectiles are no longer on screen
        if (projectile.x + projectile.radius < 0 || projectile.x - projectile.radius > canvas.width || projectile.y + projectile.radius < 0 || projectile.y - projectile.radius > canvas.height) {
            setTimeout(() => { //remove projectile from the array
                projectiles.splice(projectileIndex, 1);
            }, 0);
        }

    })
    enemies.forEach((enemy, enemyIndex) => { //for all the projectiles in the array call the update function 
        enemy.update(); //update enemy position

        //end game if enemy touches player
        const dist = Math.hypot(player.x - enemy.x, player.y - enemy.y); //get distance between player and enemy
        if (dist - enemy.radius - player.radius < 1) { //if enemy reaches player cancel animation
            cancelAnimationFrame(animationId); //cancel animation
            ballApp.gameOver();

        }
        //-----------------------------------

        //for each projectile check where they are and do specific tasks
        projectiles.forEach((projectile, projectileIndex) => { //check where the enemies are
            const dist = Math.hypot(projectile.x - enemy.x, projectile.y - enemy.y); //get distance between projectile and enemy
            // console.log(dist);
            if (dist - enemy.radius - projectile.radius < 1) { //when projectiles touch enemy

                //create explosion
                for (let i = 0; i < enemy.radius * 2; i++) {
                    const velocity = (Math.random() * 6) + 1;
                    const size = (Math.random() * 3) + 0.25;

                    particles.push(new Particles(projectile.x, projectile.y, size, enemy.color, {

                        x: (Math.random() - 0.5) * velocity,
                        y: (Math.random() - 0.5) * velocity
                    }))
                }

                setTimeout(() => {
                    if (enemy.radius - 5 > 10) { //shrink enemy on hit
                        score += 50;
                        scoreEl.textContent = score;
                        gsap.to(enemy, { //shrink enemy transition
                            radius: enemy.radius - 10
                        });
                        if (enemy.type === 'bigEnemy') {
                            if ((enemy.radius - 25) < 10) {
                                spawnBigEnemy(projectile.x, projectile.y + Math.random() * 50, 10);
                            } else {
                                spawnBigEnemy(projectile.x, projectile.y + Math.random() * 50, enemy.radius - 25);
                            }
                        }
                        projectiles.splice(projectileIndex, 1);
                    } else { //remove enemy if it is too small
                        score += 100;
                        scoreEl.textContent = score;
                        enemies.splice(enemyIndex, 1); //remove enemy
                        projectiles.splice(projectileIndex, 1); //remove projectile
                    }
                }, 0);



            }
        })
    })
}

addEventListener('click', (event) => { //event listener added to window
    // console.log(event);
    // console.log(projectiles);
    const angle = Math.atan2(event.clientY - player.y, event.clientX - player.x);
    const velocity = {
        x: Math.cos(angle) * 5,
        y: Math.sin(angle) * 5

    } //trig math used to find the angle at which you clicked and pass on to the below array

    projectiles.push(new Projectile(player.x, player.y, 5, 'white', velocity)); //create a new projectile with the passed on values

});

ballApp.gameOver = function () {
    document.querySelector('#modalScore').textContent = score;
    document.querySelector('.modal').classList.toggle('hide');
    clearInterval(timer);

}

// ballApp.startGame = function () {
//     document.querySelector('.modal').classList.toggle('hide');
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     setTimeout(() => {
//         animate();
//         spawnEnemies();
//     }, 1000);

// }


ballApp.startGame = function () {
    ballApp.init();
    animate();
    startSpawnTimer();
    document.querySelector('.modal').classList.toggle('hide');

}

addEventListener('keydown', (event) => {
    // console.log(event);
    switch (event.key) {
        case 'w':
        case 'ArrowUp':
            player.velocity.y -= 1;
            break;
        case 'a':
        case 'ArrowLeft':
            player.velocity.x -= 1;
            break;
        case 's':
        case 'ArrowDown':
            player.velocity.y += 1;
            break;
        case 'd':
        case 'ArrowRight':
            player.velocity.x += 1;
            break;
    }

});