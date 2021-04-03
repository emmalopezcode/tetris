class Square {
	constructor(x, y, color) {
		this.x = x;
		this.y = y;
		this.color = color;

	}

	draw() {
		fill(this.color.r, this.color.g, this.color.b);
		noStroke();
		rect(this.x * squareWidth, this.y * squareWidth, squareWidth, squareWidth);
	}
}
