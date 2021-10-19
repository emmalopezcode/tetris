let squareWidth = 40;
const boardHeight = 15;
const boardWidth = 10;
const sideBarWidth = 50;

let queue;
let board;
let active;
let sidebar;
let playing = false;
let score = 0;
let speed = 30;
let currSpeed;
let multiplier = 1;
let totalLines = 0;
let font;

function preload() {
   font = loadFont("./PressStart2P.ttf");
}

function setup() {
   queue = new Queue();
   board = new Board();
   sidebar = new SideBar(queue);
   active = new ActiveTetrimino(queue.buffer[0]);
   frameRate(60);
   textFont(font);
   let canvas = createCanvas(
      squareWidth * boardHeight + sideBarWidth,
      squareWidth * boardHeight
   );
   canvas.parent("canvas");
}

function draw() {
   background(30, 40, 44);
   drawBackground();
   board.draw();
   sidebar.draw();
   active.draw();
   if (frameCount % speed === 0 && playing) {
      active.updatePosition(0, 1);
   }
   if (active.isColliding(board)) {
      queue.buffer.shift();
      if (queue.buffer.length === 0) {
         queue.bufferUpdate();
      }
      board.add(active);
      sidebar = new SideBar(queue);
      active = new ActiveTetrimino(queue.buffer[0]);
   }

   board.clearLines();
   if (board.isGameOver) {
      popup.style.display = "block";
      scoreDOM.children[1].innerHTML = score;
      scoreDOM.style.display = "block";
      intro.style.display = "none";
      speed = 30;
      multiplier = 1;
      totalLines = 0;
      playing = false;
      board.clear();
   }
}

function keyPressed() {
   if (keyCode == LEFT_ARROW) {
      active.updatePosition(-1, 0);
   }

   if (keyCode == RIGHT_ARROW) {
      active.updatePosition(1, 0);
   }

   if (key === " ") {
      active.rotate();
   }
}

