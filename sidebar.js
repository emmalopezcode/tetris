

class SideBar {
	    constructor(queue) {
		            this.queue = queue.getFuturePieces(); 
		            this.tetriminos = [];
		            for(let i = 1; i < 4; i++) {
				                let str = this.queue[i];
				                let tetrimino = new Tetrimino(str, {x:10, y:(i-1)*3});     
				                this.tetriminos.push(tetrimino);

				            }
		        }

	    draw(){
		            this.background();
		            for(const tetrimino of this.tetriminos) {
				                tetrimino.draw();
				            }

		            fill(45);
		            rect((boardWidth + .5) * squareWidth, 10*squareWidth, 210, 180)

		            fill(200)
		            textSize(10);
		            text('Score', (boardWidth+1) * squareWidth, 11*squareWidth);
		            textSize(25);
		            text(`${score}`, (boardWidth+1) * squareWidth, 12*squareWidth);
		            textSize(10);
		    text('Total Lines', (boardWidth+1) * squareWidth, 13*squareWidth);
		            textSize(25);
		            text(`${totalLines}`, (boardWidth+1) * squareWidth, 14*squareWidth);
		        }


	    background() {
		            let x = boardWidth * squareWidth;
		            fill(95, 103, 119);
		            rect(x, 0, sideBarWidth* squareWidth, boardHeight* squareWidth);
		        }
}
