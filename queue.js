class Queue {
  static pieceTypes = ["____", "_|_", "||", "|__", "__|", "z", "s"];

  constructor() {
    this.buffer = this.scramble();
    this.backup = this.scramble();
  }

  getFuturePieces() {
    return this.buffer.concat(this.backup);
  }

  bufferUpdate() {
    this.buffer = this.backup;
    this.backup = this.scramble();
  }

  scramble() {
    let pieces = [...Queue.pieceTypes];
    let newOrder = [];
    while (pieces.length) {
      let rand = Math.floor(Math.random() * pieces.length);
      newOrder.push(pieces[rand]);
      pieces.splice(rand, 1);
    }

    return newOrder;
  }
}
