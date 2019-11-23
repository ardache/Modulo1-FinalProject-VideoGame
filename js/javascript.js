// CONFIGURACION
// 1.0 Variables
let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d')
let interval;
let frames = 0;

canvas.width = 900;
canvas.height = 500;

ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = 'pink';
ctx.fillRect(5, 5, 60, 60);
console.log(canvas)

// 1.1 Stage

// 2.0 Constantes


// CLASES Y METODOS
// 1.0 JUGADORES

// 1.1 Hombre
// 1.2 Mujer
// 1.3 Niño
// 1.4 Anciano


// 2.0 OBJETOS (X,Y,W,H)
// CONSTRUCTOR (IMAGEN/TIPO, SPEED, BANK, COVERAGE, LEVEL, GAMEOVER)

// BANK +
// 2.3 BANK+ (LEVEL 1,2,3) ::: Monedas :::
class ObjectBankUp {
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.image = './img/coin.png'
        this.speed = 5;
        this.bank = 1.5;
        this.coverage = 0;
        this.level = 0;
        this.gameover = 0;
    }
    draw() {
        this.x += this.speed;
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
}

// BANK -
// 2.1 BANK- (LEVEL 1) ::: Botella :::
// 2.2 BANK- (LEVEL 1) ::: Musica :::
// 2.8 BANK- (LEVEL 2) ::: Colegiatura :::
// 2.11 BANK- (LEVEL 2,3,4) ::: Medicina :::

// COVERAGE -
// 2.5 BANK- COVERAGE- (LEVEL 2,3,4) ::: Accidente :::
// 2.6 BANK- COVERAGE- (LEVEL 2,3) ::: Sarten :::
// 2.9 BANK- COVERAGE- (LEVEL 2,3,4) ::: Enfermedad :::

// LEVEL +
// 2.7 BANK- LEVEL+ (LEVEL 1) ::: Bebe :::
// 2.4 BANK- LEVEL+ (LEVEL 2) ::: Anillo :::
// 2.10 BANK- COVERAGE- LEVEL+  (LEVEL 3) ::: Rodilla :::

// GAME OVER
// 2.12 GAME OVER  (LEVEL 4) ::: Muerte :::
 



// INSTANCIAS
// crearJugador


// FUNCIONES COMPLEMENTARIAS

// GenerarObjetos
// DibujarObjetos
// RevisarColision


// FUNCIONES PRINCIPALES

// GameOver
// Main


// EVENTOS 

// KeyListener



