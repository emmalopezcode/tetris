class ActiveTetrimino extends Tetrimino {

	constructor(string) {
		super(string);
		this.addRotationMap();

	}

	updatePosition(x, y) {
		for (const s of this.squares) {
			s.y += y;
		}

		for (const s of this.squares) {
			if (s.x + x < 0 || s.x + x > 9) {
				return;
			}
		}

		for (const s of this.squares) {
			s.x += x;
		}
	}

	moveSquare(idx, offsetX, offsetY) {
		this.squares[idx] = new Square(
			this.squares[idx].x + offsetX,
			this.squares[idx].y + offsetY,
			this.color
		);
	}

	rotate() {
		this.rotationMap[this.type].call();
	}

	isColliding(board) {
		for (const s of this.squares) {
			if (s.y > boardHeight - 1) {
				return true;
			}
			if (board.map[s.y][s.x]) {
				return true;
			}
		}
		return false;
	}

	addRotationMap() {
		this.rotationMap = {
			____: () => {
				if (this.state === 0) {
					this.moveSquare(0, 2, 2);
					this.moveSquare(1, 1, 1);
					this.moveSquare(2, 0, 0);
					this.moveSquare(3, -1, -1);
					this.state = 1;
				} else {
					this.moveSquare(0, -2, -2);
					this.moveSquare(1, -1, -1);
					this.moveSquare(2, 0, 0);
					this.moveSquare(3, 1, 1);
					this.state = 0;
				}
			},
			"__|": () => {
				if (this.state === 0) {
					this.moveSquare(0, 2, -1);
					this.moveSquare(1, 0, 1);
					this.state = 1;
				} else if (this.state === 1) {
					this.moveSquare(0, 1, 2);
					this.moveSquare(2, -1, 0);
					this.state = 2;
				} else if (this.state === 2) {
					this.moveSquare(0, -2, -2);
					this.moveSquare(3, 0, -2);
					this.state = 3;
				} else if (this.state === 3) {
					this.moveSquare(0, -1, 1);
					this.moveSquare(1, 0, -1);
					this.moveSquare(2, 1, 0);
					this.moveSquare(3, 0, 2);
					this.state = 0;
				}
			},
			"|__": () => {
				if (this.state === 0) {
					this.moveSquare(1, 1, 0);
					this.moveSquare(3, -1, 2);
					this.state = 1;
				} else if (this.state === 1) {
					this.moveSquare(0, 0, 1);
					this.moveSquare(3, -2, -1);
					this.state = 2;
				} else if (this.state === 2) {
					this.moveSquare(2, -1, 0);
					this.moveSquare(3, 1, -2);
					this.state = 3;
				} else if (this.state === 3) {
					this.moveSquare(0, 0, -1);
					this.moveSquare(1, -1, 0);
					this.moveSquare(2, 1, 0);
					this.moveSquare(3, 2, 1);
					this.state = 0;
				}
			},
			"_|_": () => {
				if (this.state === 0) {
					this.moveSquare(0, 1, -1);
					this.state = 1;
				} else if (this.state === 1) {
					this.moveSquare(2, -1, -1);
					this.state = 2;
				} else if (this.state === 2) {
					this.moveSquare(3, -1, 1);
					this.state = 3;
				} else if (this.state === 3) {
					this.moveSquare(0, -1, 1);
					this.moveSquare(2, 1, 1);
					this.moveSquare(3, 1, -1);
					this.state = 0;
				}
			},
			s: () => {
				if (this.state === 0) {
					this.moveSquare(0, 2, 1);
					this.moveSquare(3, 0, 1);
					this.state = 1;
				} else {
					this.moveSquare(0, -2, -1);
					this.moveSquare(3, 0, -1);
					this.state = 0;
				}
			},
			z: () => {
				if (this.state === 0) {
					this.moveSquare(0, 0, 1);
					this.moveSquare(3, -2, 1);
					this.state = 1;
				} else {
					this.moveSquare(0, 0, -1);
					this.moveSquare(3, 2, -1);
					this.state = 0;
				}
			},
		};
	}
}
