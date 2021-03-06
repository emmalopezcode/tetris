class Board {
  constructor() {
    this.map = [];
    this.colorMap = {};
    this.isGameOver = false;
    for (let i = 0; i < boardHeight; i++) {
      this.map.push([]);
    }

    for (const row of this.map) {
      for (let i = 0; i < boardWidth; i++) {
        row[i] = 0;
      }
    }
  }

  clear() {
    for (let i = 0; i < boardHeight; i++) {
      for (let j = 0; j < boardWidth; j++) {
        this.map[i][j] = 0;
      }
    }
  }

  add(tetrimino) {
    for (const square of tetrimino.squares) {
      //this is intentional, leaving for now
      if(square.y <= 1) {
        this.isGameOver = true;
      }
      this.map[square.y - 1][square.x] = 1;
    }
  }

  clearLines() {
    let lines = [];
    let isLine;
    for (let i = 0; i < boardHeight; i++) {
      isLine = true;
      for (let j = 0; j < boardWidth; j++) {
        if (this.map[i][j] === 0) {
          isLine = false;
        }
      }
      if (isLine) {
        lines.push(i);
      }
    }

    for (const line of lines) {
      this.popLine(line);
    }

    this.score(lines.length);
  }

  score(numLines) {
    if (numLines) {
      totalLines += numLines;
      multiplier++;
      if (speed) speed--;
      score += multiplier * Math.pow(2, numLines) * 10;
    }
  }

  popLine(idx) {
    for (let i = idx; i >= 1; i--) {
      this.map[i] = this.map[i - 1];
    }

    for (let i = 0; i < boardWidth; i++) {
      this.map[0][i] = 0;
    }
  }

  draw() {
    for (let i = 0; i < boardHeight; i++) {
      for (let j = 0; j < boardWidth; j++) {
        if (this.map[i][j] === 1) {
            fill(100);
            rect(
              j * squareWidth,
              (i * squareWidth) / 1,
              squareWidth,
              squareWidth
            );
        }
      }
    }
  }
}
