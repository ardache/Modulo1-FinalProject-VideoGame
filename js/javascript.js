// CONFIGURACION
// 1.0 Variables
let backImage = document.getElementById('bgLevel1');
let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d')
canvas.width = 900;
canvas.height = 500;


let frames = 0;
playerCurrentFrame = 0;
let interval;

let acountBank = 150
let polizaCoverage = 4000;
let level = 1;
let fxBlur = 20

let hurryUp = 1;
let bankValueUp = 1.5
let bankValueDown = -3.5
let noCoverageFine = 0
let coverageValueDown = -250

let arrayOfBadness =[];
// 1.1 Stage

// 2.0 Constantes



const coinImage = document.getElementById('coin');

let spriteImage = document.getElementById('player');

const arrayBnkImgL1 = [document.getElementById('fiesta'),document.getElementById('avion')]
const arrayBnkImgL2 = [document.getElementById('colegiatura'),document.getElementById('medicina')]
const arrayBnkImgL3 = [document.getElementById('colegiatura'),document.getElementById('medicina')]
const arrayBnkImgL4 = [document.getElementById('medicina')]

//const arrayBnkCovImgL1 = ['./img/enfermedad.png']
const arrayBnkCovImgL1 = [document.getElementById('enfermedad')]
const arrayBnkCovImgL2 = [document.getElementById('accidente'),document.getElementById('sarten'),document.getElementById('enfermedad')]
const arrayBnkCovImgL3 = [document.getElementById('accidente'),document.getElementById('sarten'),document.getElementById('enfermedad')]
const arrayBnkCovImgL4 = [document.getElementById('accidente'),document.getElementById('enfermedad')]

//const arrayBnkLvlImgL1 = ['./img/bebe.png']
const arrayBnkLvlImgL1 = [document.getElementById('anillo')]
const arrayBnkLvlImgL2 = [document.getElementById('bebe')]
const arrayBnkLvlImgL3 = [document.getElementById('rodilla')]
const arrayBnkLvlImgL4 = [document.getElementById('muerte')]

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
        this.sprite = spriteImage;
    }
    draw() {
        //ctx.fillStyle = 'blue';
        //ctx.fillRect(this.xp, this.yp, this.wp, this.hp);
        if(frames % 6 === 0) {
            playerCurrentFrame = ++playerCurrentFrame % 4;
            //console.log(playerCurrentFrame)
        //     ctx.drawImage(this.sprite, playerCurrentFrame * 670/7, 0, 670/7, 130, this.xp, this.yp, this.wp, this.hp) //revisar porque no muestra el fondo
        //     //console.log ('ahora ')
        }
        ctx.drawImage(this.sprite, playerCurrentFrame * 670/7, 0, 670/7, 130, this.xp, this.yp, this.wp, this.hp)
        //ctx.drawImage(this.img, charizardCurrentFrame * 940/4, 0, 940/4, 94, this.x, this.y, this.w, this.h)
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
    
}

class Coin extends ObjectOfBadness {
    constructor (x,y,w,h, img, spd, bnk, cvg) {
        super(x,y,w,h)
        this.image = img //'./img/coin.png'
        this.speed = spd;
        this.bank = bnk;
        this.coverage = cvg;
    }
    draw() {
        this.y += this.speed;
        //ctx.fillStyle = 'yellow';
        //ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.drawImage(this.image, this.x, this.y, this.w, this.h)
    }
}

// BANK -
// 2.1 BANK- (LEVEL 1) ::: Botella :::
class Damage extends ObjectOfBadness {
    constructor (x,y,w,h, img, spd, bnk, cvg, lvl) {
        super(x,y,w,h)
        this.image = img //'./img/bottle.png'
        this.speed = spd;
        this.bank = bnk;
        this.coverage = cvg;
        this.level = lvl;
    }
    draw() {
        this.y += this.speed;
        //ctx.fillStyle = 'red';
        //ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.drawImage(this.image, this.x, this.y, this.w, this.h)
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
        //SCORE 1
        //Dibuja Rectangulo Naranja de Cobertura
        ctx.beginPath();
        ctx.fillStyle = 'orange';
        ctx.globalAlpha = 0.1;
        //ctx.fillRect(0, 0, canvas.width, 50);
        for (let i = 0; i < fxBlur; i++) {
            ctx.beginPath();
            ctx.arc(canvas.width/2, 10, 15 + 5 * i, 0, Math.PI * 2, true);
            ctx.fill();
        }
        ctx.globalAlpha = 1;
       
        //Dibuja Texto de Cobertura
        ctx.fillStyle = 'white';
        ctx.font = "35px Verdana";
        ctx.fillText("$"+polizaCoverage+" K", (canvas.width/2)-80, 35);
        ctx.font = "35px Verdana";
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 2;
        ctx.strokeText("Cobertura",(canvas.width/2)-93,75)
       
        //SCORE 2
        //Dibuja Rectangulo Naranja de Edad
        ctx.beginPath();
        ctx.fillStyle = 'orange';
        ctx.moveTo(0, 0);
        ctx.lineTo(150, 0);
        ctx.lineTo(180, 80);
        ctx.lineTo(0, 100);
        ctx.fill();
        //Dibuja Rectangulo Blanco de Edad
        ctx.beginPath();
        ctx.fillStyle = 'white';
        ctx.moveTo(0, 0);
        ctx.lineTo(100, 0);
        ctx.lineTo(150, 20);
        ctx.lineTo(20, 90);
        ctx.fill();
        //Dibuja Texto de Edad
        ctx.fillStyle = 'black';
        ctx.font = "40px Verdana";
        ctx.fillText(player.yearsOld, 40, 45);
        ctx.rotate(-30 * Math.PI / 180)
        ctx.font = "35px Verdana";
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 2;
        ctx.strokeText("Edad",33,118)
        ctx.setTransform(1, 0, 0, 1, 0, 0);

        //SCORE 3
        //Dibuja Rectangulo Naranja de Banco
        ctx.beginPath();
        ctx.fillStyle = 'orange';
        ctx.moveTo(canvas.width, 0);
        ctx.lineTo(canvas.width-200, 0);
        ctx.lineTo(canvas.width-240, 80);
        ctx.lineTo(canvas.width, 100);
        ctx.fill();
        //Dibuja Rectangulo Blanco de Banco
        ctx.beginPath();
        ctx.fillStyle = 'white';
        ctx.moveTo(canvas.width, 0);
        ctx.lineTo(canvas.width-160, 0);
        ctx.lineTo(canvas.width-170, 40);
        ctx.lineTo(canvas.width, 90);
        ctx.fill();
        //Dibuja Texto de Banco
        ctx.fillStyle = 'black';
        ctx.font = "35px Verdana";
        ctx.fillText("$"+acountBank+" K", canvas.width-160, 35);
        ctx.rotate(15 * Math.PI / 180)
        ctx.font = "35px Verdana";
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 2;
        ctx.strokeText("Banco",canvas.width-213,-125)
        ctx.setTransform(1, 0, 0, 1, 0, 0);
    }
}

// FUNCIONES COMPLEMENTARIAS
// GenerarObjetos
function generateBadness() {
    switch (level){
        case 1:
            if(frames % 200 === 0) {
                arrayOfBadness.push(new Coin(Math.floor(Math.random()*canvas.width),-60,60,60, coinImage,hurryUp,bankValueUp,0,0));
            }
            if (frames % 50 === 0) {
                arrayOfBadness.push(new Damage(Math.floor(Math.random()*canvas.width),-60,60,60,arrayBnkImgL1[Math.floor(Math.random()*arrayBnkImgL1.length)],hurryUp, bankValueDown,0,0));
                arrayOfBadness.push(new Damage(Math.floor(Math.random()*canvas.width),-60,60,60,arrayBnkCovImgL1[Math.floor(Math.random()*arrayBnkCovImgL1.length)],hurryUp,bankValueDown,coverageValueDown,0));
            }
            if (frames % 500 === 0) {
                arrayOfBadness.push(new Damage(Math.floor(Math.random()*canvas.width),-60,60,60,arrayBnkLvlImgL1[Math.floor(Math.random()*arrayBnkLvlImgL1.length)],hurryUp,bankValueDown,0,1));
            }
            break;
        case 2:
            if(frames % 200 === 0) {
                arrayOfBadness.push(new Coin(Math.floor(Math.random()*canvas.width),0,60,60,coinImage,hurryUp,1.5,0,0));
            }
            if (frames % 50 === 0) {
                arrayOfBadness.push(new Damage(Math.floor(Math.random()*canvas.width),0,60,60,arrayBnkImgL2[Math.floor(Math.random()*arrayBnkImgL2.length)],hurryUp,bankValueDown,0,0));
                arrayOfBadness.push(new Damage(Math.floor(Math.random()*canvas.width),0,60,60,arrayBnkCovImgL2[Math.floor(Math.random()*arrayBnkCovImgL2.length)],hurryUp,bankValueDown,coverageValueDown,0));
            }
            if (frames % 500 === 0) {
                arrayOfBadness.push(new Damage(Math.floor(Math.random()*canvas.width),0,60,60,arrayBnkLvlImgL2[Math.floor(Math.random()*arrayBnkLvlImgL2.length)],hurryUp,bankValueDown,coverageValueDown,1));
            }
            break;
        case 3:
            if(frames % 200 === 0) {
                arrayOfBadness.push(new Coin(Math.floor(Math.random()*canvas.width),0,60,60,coinImage,hurryUp,1.5,0,0));
            }
            if (frames % 50 === 0) {
                arrayOfBadness.push(new Damage(Math.floor(Math.random()*canvas.width),0,60,60,arrayBnkImgL3[Math.floor(Math.random()*arrayBnkImgL3.length)],hurryUp,bankValueDown,0,0));
                arrayOfBadness.push(new Damage(Math.floor(Math.random()*canvas.width),0,60,60,arrayBnkCovImgL3[Math.floor(Math.random()*arrayBnkCovImgL3.length)],hurryUp,bankValueDown,coverageValueDown,0));
            }
            if (frames % 500 === 0) {     
                arrayOfBadness.push(new Damage(Math.floor(Math.random()*canvas.width),0,60,60,arrayBnkLvlImgL3[Math.floor(Math.random()*arrayBnkLvlImgL3.length)],hurryUp,bankValueDown,coverageValueDown,1));
            }
            break;
        case 4:
                if (frames % 50 === 0) {
                    arrayOfBadness.push(new Damage(Math.floor(Math.random()*canvas.width),0,60,60,arrayBnkImgL4[Math.floor(Math.random()*arrayBnkImgL4.length)],hurryUp,bankValueDown,0,0));
                    arrayOfBadness.push(new Damage(Math.floor(Math.random()*canvas.width),0,60,60,arrayBnkCovImgL4[Math.floor(Math.random()*arrayBnkCovImgL4.length)],hurryUp,bankValueDown,coverageValueDown,0));
                }
                if (frames % 100 === 0) { 
                    arrayOfBadness.push(new Damage(Math.floor(Math.random()*canvas.width),0,60,60,arrayBnkLvlImgL4[Math.floor(Math.random()*arrayBnkLvlImgL4.length)],hurryUp,bankValueDown,coverageValueDown,1));
                }
                break;
        default:
            break;
    }
}

// Dibujar Objetos
function drawBackround() {
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.drawImage(backImage,0,0,canvas.width, canvas.height) 
}

function drawBadness() {
    arrayOfBadness.forEach((badness, ei) => {
        badness.draw();
    });
}

// Dibujar Estadisticas
function drawEstadisticas() {
    let tablero = new Estadisitca(0,0,canvas.width,70)
    tablero.draw()
}
// Revisar Colision
function checkCollition() {
    arrayOfBadness.forEach((badness, ei) => {
        if(player.crashWith(badness)) {
            acountBank += badness.bank + noCoverageFine
            //console.log ("menos " + badness.bank + " mas " + noCoverageFine)
            console.log(badness.level)

            if (badness.coverage < 0) {
                polizaCoverage += badness.coverage
                fxBlur += 3;
            }
            if (badness.level == 1){
                console.log("nivel=" + level)
                switch (level){
                    case 1:
                        frames = 1099;
                        break;
                    case 2:
                        frames = 2099;
                        break;
                    case 3:
                        frames = 3099;
                        break;
                    case 4:
                        frames = 5000;
                        break;
                    default:
                        break;
                }
            }
            arrayOfBadness.splice(ei, 1);
            // console.log(acountBank + " / " + polizaCoverage + " / " + level)  ::::
        }
    }
    )};
    
// Revisar si sube de Nivel
function LevelUp (){
    if (frames % 66 == 0) {
        player.yearsOld += 1
        //console.log(player.yearsOld)
        if ((frames > 600 && frames < 1100) || (frames > 1700 && frames < 2100) || (frames > 2700 && frames < 3100) || (frames > 3700 && frames < 4100)) {
            hurryUp += 1
            //alert("va mas rapido...!!!")
        } else {
            hurryUp = 1
        }
    }
    if ((frames == 1100) || (frames == 2100) || (frames == 3100)) {
        //alert('Next Level')
        hurryUp = 1
        level += 1
        player.speed -= 10
        arrayOfBadness=[] 
        backImage = document.getElementById('bgLevel'+level);
    }
    if (frames >= 4100 && frames<5000) {
        clearInterval(interval)
        alert('!!! Ganaste !!! Tu muerte sera de forma natural a los ' + player.yearsOldyearsOld + ' años, y con $' + acountBank * 1000 + ' pesos en tu bolsa.')
        
    }
    if (frames >= 5000 ){
        clearInterval(interval)
        alert("Ya perdiste !!!  Te encontraras con la muerte a los " + player.yearsOld + " años de forma inesperada. Contrata un seguro de vida ahora y que no te agarre por sorpresa")
    }
}

// FUNCIONES PRINCIPALES
function startGame(){
    player = new Hombre(375,360,95,100);
    interval = setInterval(GameHart, 1000/60);
}

// GameOver
function gameOver() {
    if(acountBank <= 0) {
        //drawEstadisticas()
        clearInterval(interval);
        alert("Ya perdiste !!!  Con ese ritmo de vida moriras a los " + player.yearsOld + ' años por falta de dinero. Asegurate con una cobertura mayor y extiende tu vida varios años más')
    }  
    if (polizaCoverage < 0) {
        noCoverageFine = -10
    }
}   

// ==::: MAIN  :::==

function GameHart() {
    drawBackround();
    generateBadness();
    drawBadness();
    drawEstadisticas()
    player.draw();
    player.createKeyEvents
    checkCollition();
    gameOver();
    LevelUp();
    frames++;
    console.log(frames)
}

// INSTANCIAS
// crearJugador
// Start Game
    //this.createKeyEvents()

// EVENTOS 
// 1.0 KeyListener
document.addEventListener('keydown', function(e) {
    switch(e.keyCode){
        case 37:
            //15
            if (player.xp >15) {
                player.xp-=player.speed;
                player.sprite = document.getElementById('playerIzq');
            }
            break;
        case 39:
            //780
            if (player.xp < 780) {
                player.xp+=player.speed;
                player.sprite  = document.getElementById('player');

            }
            break;
        default:
            break;
    }
})

window.onload = function() {
    document.getElementById("start-button").onclick = function() {
        startGame();
    };
}  

