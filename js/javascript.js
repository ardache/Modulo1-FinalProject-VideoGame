// CONFIGURACION
// 1.0 Variables
let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d')
let interval;
let hurryUp = 1;
let frames = 0;
canvas.width = 900;
canvas.height = 500;
let level = 1;

let arrayOfBadness =[];


// 1.1 Stage

// 2.0 Constantes


// CLASES Y METODOS

// 1.0 JUGADORES

// 1.1 Hombre
class Hombre {
    constructor(x,y,w,h){
        this.xp = x;
        this.yp = y;
        this.wp = w;
        this.hp = h;
        this.yearsOld = 25;
        this.speed = 45;
    }
    draw() {
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.xp, this.yp, this.wp, this.hp);
    }

// 1.2 Mujer
// 1.3 Niño
// 1.4 Anciano
}

// 2.0 OBJETOS (X,Y,W,H)
// CONSTRUCTOR (IMAGEN/TIPO, SPEED, BANK, COVERAGE, LEVEL, GAMEOVER)

// BANK +
// 2.3 BANK+ (LEVEL 1,2,3) ::: Monedas :::
class ObjectOfBadness {
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h; 
    }
    draw() {
        this.y += this.speed;
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
}

class Coin extends ObjectOfBadness {
    constructor (x,y,w,h, img, spd, bnk, cvg, lvl, dead) {
        super(x,y,w,h)
        this.image = img //'./img/coin.png'
        this.speed = spd;
        this.bank = bnk;
        this.coverage = cvg;
        this.level = lvl;
        this.gameover = dead;
    }
}

// BANK -
// 2.1 BANK- (LEVEL 1) ::: Botella :::
class Bottle extends ObjectOfBadness {
    constructor (x,y,w,h, img, spd, bnk, cvg, lvl, dead) {
        super(x,y,w,h)
        this.image = img //'./img/bottle.png'
        this.speed = spd;
        this.bank = bnk;
        this.coverage = cvg;
        this.level = lvl;
        this.gameover = dead;
    }
}
// 2.2 BANK- (LEVEL 1) ::: Musica :::
// 2.8 BANK- (LEVEL 2) ::: Colegiatura :::
// 2.11 BANK- (LEVEL 2,3,4) ::: Medicina :::

// COVERAGE -
// 2.5 BANK- COVERAGE- (LEVEL 2,3,4) ::: Accidente :::
// 2.6 BANK- COVERAGE- (LEVEL 2,3) ::: Sarten :::
// 2.9 BANK- COVERAGE- (LEVEL 2,3,4) ::: Enfermedad :::

// LEVEL +
// 2.7 BANK - LEVEL+ (LEVEL 1) ::: Bebe :::
// 2.4 BANK- LEVEL+ (LEVEL 2) ::: Anillo :::
// 2.10 BANK- COVERAGE- LEVEL+  (LEVEL 3) ::: Rodilla :::

// GAME OVER
// 2.12 GAME OVER  (LEVEL 4) ::: Muerte :::
 
// Estadisticas
class Estadisitca {
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    draw() {
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
}

// KeyListener
// class createKeyEvents {
//     document.onkeydown = (event) => {
//         switch(event.which) {
//         case 37:
//             this.xp+=this.speed;
//             console.log('izq')
//             break;
//         case 39:
//             this.xp-=this.speed;
//             console.log('der')
//             break;
//         default:
//             console.log('nothing')
//             break;
//         }
//     }
// } 


// FUNCIONES COMPLEMENTARIAS

// GenerarObjetos
function generateBadness() {
    if(frames % 200 === 0) {
        arrayOfBadness.push(new Coin(Math.floor(Math.random()*canvas.width),0,60,60,'./img/coin.png',hurryUp,1.5,0,1,0));
    }

    if(frames % 150 === 0) {
        arrayOfBadness.push(new Bottle(Math.floor(Math.random()*canvas.width),0,30,60,'./img/bottle.png',hurryUp,-3.5,0,1,0));
        
    }

}

// DibujarObjetos
function drawBadness() {
    arrayOfBadness.forEach((badness, ei) => {
        badness.draw();
    });
}

function drawEstadisticas() {
    let tablero = new Estadisitca(0,0,canvas.width,70)
    tablero.draw()
}
// RevisarColision

// Revisar si sube de Nivel
function LevelUp (){
    if (frames % 66 == 0) {
        player.yearsOld += 1
        console.log(player.yearsOld)
    a = player.yearsOld
    switch (a){
        case 36: case 38: case 40: case 42:
        case 54: case 56: case 58: case 60:
        case 72: case 74: case 76: case 78:
        case 90: case 92: case 94: case 96: 
           hurryUp += 1
           console.log("esto vale hurryup: " + hurryUp)
           break;
        case 43:
            //this.speed = 35
            console.log('Subir al Nivel 2')
            hurryUp = 1
            break;
        case 61:
            //this.speed = 45
            console.log('Subir al Nivel 3')
            hurryUp = 1
            break;
        case 79:
            //this.speed = 85
            console.log('Subir al Nivel 4')
            hurryUp = 1
            break;
        case 97:
            //this.speed = 98
            console.log('Game Over')
            clearInterval(interval)
            break;
        default:
            break;
        }
    }
}


// FUNCIONES PRINCIPALES

// GameOver

// ==::: MAIN  :::==
function GameHart() {
    ctx.clearRect(0,0,canvas.width, canvas.height);
    generateBadness();
    drawBadness();
    drawEstadisticas()
    player.draw();
    player.createKeyEvents
    //checkCollition();
    LevelUp();
    //gameOver();
    frames++;
    
}


// INSTANCIAS
// crearJugador




// Start Game
    //this.createKeyEvents()
    let player = new Hombre(375,360,50,100);
    interval = setInterval(GameHart, 1000/60);


// EVENTOS 
// 1.0 KeyListener
document.addEventListener('keydown', function(e) {
    switch(e.keyCode){
        case 37:
            player.xp-=player.speed;
            console.log('izq')
            break;
        case 39:
            player.xp+=player.speed;
            console.log('der')
            break;
        default:
            console.log('nada')
            break;
    }
})


// KeyListener
// createKeyEvents(){
//     document.onkeydown = (event) => {
//         switch(event.which) {
//         case 37:
//             this.xp+=this.speed;
//             console.log('izq')
//             break;
//         case 39:
//             this.xp-=this.speed;
//             console.log('der')
//             break;
//         default:
//             console.log('nothing')
//             break;
//         }
//     }
// }
