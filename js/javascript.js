// CONFIGURACION
// 1.0 Variables
let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d')
let interval;
let hurryUp = 1;
let frames = 0;
canvas.width = 900;
canvas.height = 500;

let acountBank = 150
let polizaCoverage = 5000;

let level = 1;
let arrayBnkImgL1 = ['./img/bottle.png','./img/music.png']
let arrayBnkImgL2 = ['./img/colegiatura.png','./img/medicina.png']
let arrayBnkImgL3 = ['./img/medicina.png','./img/colegiatura.png']
let arrayBnkImgL4 = ['./img/medicina.png']

let arrayBnkCovImgL1 = ['./img/enfermedad.png']
let arrayBnkCovImgL2 = ['./img/accidente.png','./img/sarten.png','./img/enfermedad.png']
let arrayBnkCovImgL3 = ['./img/accidente.png','./img/sarten.png','./img/enfermedad.png']
let arrayBnkCovImgL4 = ['./img/accidente.png','./img/enfermedad.png']

let arrayBnkLvlImgL1 = ['./img/bebe.png']
let arrayBnkLvlImgL2 = ['./img/anillo.png']
let arrayBnkLvlImgL3 = ['./img/rodilla.png',]
let arrayBnkLvlImgL4 = ['./img/muerte.png',]

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
    crashWith(item) {
        return (this.xp < item.x + item.w) &&
        (this.xp + this.wp > item.x) &&
        (this.yp < item.y + item.h) &&
        (this.yp + this.hp > item.y);
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
    constructor (x,y,w,h, img, spd, bnk, cvg, dead) {
        super(x,y,w,h)
        this.image = img //'./img/coin.png'
        this.speed = spd;
        this.bank = bnk;
        this.coverage = cvg;
        this.gameover = dead;
    }
}

// BANK -
// 2.1 BANK- (LEVEL 1) ::: Botella :::
class Damage extends ObjectOfBadness {
    constructor (x,y,w,h, img, spd, bnk, cvg, dead) {
        super(x,y,w,h)
        this.image = img //'./img/bottle.png'
        this.speed = spd;
        this.bank = bnk;
        this.coverage = cvg;
        this.gameover = dead;
    }
}
// 2.2 BANK- (LEVEL 1) ::: Musica :::
// 2.8 BANK- (LEVEL 2) ::: Colegiatura :::
// 2.11 BANK- (LEVEL 2,3,4) ::: Medicina :::

// COVERAGE -
// 2.5 BANK- COVERAGE- (LEVEL 2,3,4) ::: Accidente :::
// 2.6 BANK- COVERAGE- (LEVEL 2,3) ::: Sarten :::
// 2.9 BANK- COVERAGE- (LEVEL 1,2,3,4) ::: Enfermedad :::

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

    switch (level){
        case 1:
            if(frames % 200 === 0) {
                arrayOfBadness.push(new Coin(Math.floor(Math.random()*canvas.width),0,60,60,'./img/coin.png',hurryUp,1.5,0,0));
            }
            if (frames % 150 === 0) {
                arrayOfBadness.push(new Damage(Math.floor(Math.random()*canvas.width),0,30,60,arrayBnkImgL1[Math.floor(Math.random()*arrayBnkImgL1.length)],hurryUp,-3.5,0,0));
                arrayOfBadness.push(new Damage(Math.floor(Math.random()*canvas.width),0,70,10,arrayBnkCovImgL1[Math.floor(Math.random()*arrayBnkCovImgL1.length)],hurryUp,-3.5,250,0));
            }
            if (frames % 500 === 0) {
                arrayOfBadness.push(new Damage(Math.floor(Math.random()*canvas.width),0,10,10,arrayBnkLvlImgL1[Math.floor(Math.random()*arrayBnkLvlImgL1.length)],hurryUp,-3.5,0,1));
            }
            break;
        case 2:
            if(frames % 200 === 0) {
                arrayOfBadness.push(new Coin(Math.floor(Math.random()*canvas.width),0,60,60,'./img/coin.png',hurryUp,1.5,0,0));
            }
            if (frames % 150 === 0) {
                arrayOfBadness.push(new Damage(Math.floor(Math.random()*canvas.width),0,50,20,arrayBnkImgL2[Math.floor(Math.random()*arrayBnkImgL2.length)],hurryUp,-3.5,0,0));
                arrayOfBadness.push(new Damage(Math.floor(Math.random()*canvas.width),0,40,10,arrayBnkCovImgL2[Math.floor(Math.random()*arrayBnkCovImgL2.length)],hurryUp,-3.5,250,0));
            }
            if (frames % 500 === 0) {
                arrayOfBadness.push(new Damage(Math.floor(Math.random()*canvas.width),0,15,5,arrayBnkLvlImgL2[Math.floor(Math.random()*arrayBnkLvlImgL2.length)],hurryUp,-3.5,250,1));
            }
            break;
        case 3:
            if(frames % 200 === 0) {
                arrayOfBadness.push(new Coin(Math.floor(Math.random()*canvas.width),0,60,60,'./img/coin.png',hurryUp,1.5,0,0));
            }
            if (frames % 150 === 0) {
                arrayOfBadness.push(new Damage(Math.floor(Math.random()*canvas.width),0,70,10,arrayBnkImgL3[Math.floor(Math.random()*arrayBnkImgL3.length)],hurryUp,-3.5,0,0));
                arrayOfBadness.push(new Damage(Math.floor(Math.random()*canvas.width),0,90,80,arrayBnkCovImgL3[Math.floor(Math.random()*arrayBnkCovImgL3.length)],hurryUp,-3.5,250,0));
            }
            if (frames % 500 === 0) {     
                arrayOfBadness.push(new Damage(Math.floor(Math.random()*canvas.width),0,10,10,arrayBnkLvlImgL3[Math.floor(Math.random()*arrayBnkLvlImgL3.length)],hurryUp,-3.5,250,1));
            }
            break;
        case 4:
                if (frames % 150 === 0) {
                    arrayOfBadness.push(new Damage(Math.floor(Math.random()*canvas.width),0,200,30,arrayBnkImgL4[Math.floor(Math.random()*arrayBnkImgL3.length)],hurryUp,-3.5,0,0));
                    arrayOfBadness.push(new Damage(Math.floor(Math.random()*canvas.width),0,250,50,arrayBnkCovImgL4[Math.floor(Math.random()*arrayBnkCovImgL3.length)],hurryUp,-3.5,250,0));
                }
                if (frames % 500 === 0) { 
                    arrayOfBadness.push(new Damage(Math.floor(Math.random()*canvas.width),0,50,50,arrayBnkLvlImgL4[Math.floor(Math.random()*arrayBnkLvlImgL3.length)],hurryUp,-3.5,250,1));
                }
                break;
        default:
            break;

    }
    //console.log(arrayOfBadness.length)

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
function checkCollition() {
    arrayOfBadness.forEach((badness, ei) => {
        if(player.crashWith(badness)) {
            acountBank += badness.bank
            polizaCoverage += badness.coverage
            //level += badness.level
            arrayOfBadness.splice(ei, 1);
            console.log(acountBank + " " + polizaCoverage + " " + level)
        }
    }
    )};
    
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
           console.log("hurryup++ : " + hurryUp)
           break;
        case 43:
            //this.speed = 35
            alert('Nivel 2')
            hurryUp = 1
            level +=1
            arrayOfBadness=[]
            break;
        case 61:
            //this.speed = 45
            alert('Nivel 3')
            hurryUp = 2
            level +=1
            arrayOfBadness=[]
            break;
        case 79:
            //this.speed = 85
            alert('Nivel 4')
            hurryUp = 2
            level +=1
            arrayOfBadness=[]
            break;
        case 97:
            //this.speed = 98
            alert('Game Over & Estadisticas')
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
    checkCollition();
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
            break;
        case 39:
            player.xp+=player.speed;
            break;
        default:
            break;
    }
})

