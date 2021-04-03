function drawBackground(){  
	  for(let i = 0; i < boardWidth+1; i++) {
		      stroke(100)
		      line(i*squareWidth, 0, i*squareWidth, boardHeight*squareWidth );

		    }

	  for(let i = 0; i < boardHeight; i++) {

		      line(0, i*squareWidth, boardWidth*squareWidth,  i*squareWidth);


		    }

	  noStroke();

}
