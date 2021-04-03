

class Tetrimino {
  constructor(string, location) {
    let offset = 0;
    let isSecond = 0;
    this.squares = [];
    this.type = string;
    this.location = location || { x: 0, y: 0 };
    this.state = 0;
    this.color = this.generateColor();

    if (string[0] === "z") {
      this.addSquare(offset, isSecond);
      offset += 1;
      this.addSquare(offset, isSecond);
      isSecond = 1;
      this.addSquare(offset, isSecond);
      offset += 1;
      this.addSquare(offset, isSecond);
    }

    if (string[0] === "s") {
      isSecond = 1;
      this.addSquare(offset, isSecond);
      offset += 1;
      this.addSquare(offset, isSecond);
      isSecond = 0;
      this.addSquare(offset, isSecond);
      offset += 1;
      this.addSquare(offset, isSecond);
    }

    for (let i = 0; i < string.length; i++) {
      if (string[i] === "_") {
        this.addSquare(offset, isSecond);
      }

      if (string[i] === "|") {
        this.addSquare(offset, isSecond);
        isSecond = 1;
        this.addSquare(offset, isSecond);
        isSecond = 0;
      }
      offset += 1;
    }
  }

  generateColor() {
    let main = Math.floor(Math.random() * 2.99);
    let colors = [];

    for (let i = 0; i < 3; i++) {
      let multiplier = 1;
      if (main === i) {
        multiplier = 2;
      }
      let color = Math.random() * 100 + 75 * multiplier;
      colors.push(color);
    }
    return { r: colors[0], g: colors[1], b: colors[2] };
  }

  addSquare(offset, isSecond) {
    this.squares.push(
      new Square(
        1 + offset + this.location.x,
        1 + isSecond + this.location.y,
        this.color
      )
    );
  }

  draw() {
    for (const s of this.squares) {
      fill(this.color.r, this.color.g, this.color.b);
      s.draw();
    }
  }

}

