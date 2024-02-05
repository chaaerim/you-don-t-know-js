function randMax(max) {
  return Math.trunc(1e9 * Math.random()) % max;
}

var reel = {
  symbols: ['♠︎', '♥︎', '♦︎', '♣︎', '⛄︎', '⭐︎', '☾', '☼'],
  spin() {
    if (this.position == null) {
      this.position = randMax(this.symbols.length - 1);
    }
    this.position = (this.position + 100 + randMax(100)) % this.symbols.length;
  },
  display() {
    if (this.position == null) {
      this.position = randMax(this.symbols.length - 1);
    }
    return this.symbols[this.position];
  },
};

var slotMachine = {
  reels: [Object.create(reel), Object.create(reel), Object.create(reel)],
  spin() {
    this.reels.forEach(function spinReel(reel) {
      reel.spin();
      console.log(reel);
    });
  },
  display() {
    this.reels.forEach(function displayReel(reel) {
      const rightReel = Object.create(reel);
      const leftReel = Object.create(reel);
      rightReel.position = (reel.symbols.length + reel.position + 1) % reel.symbols.length;
      leftReel.position = (reel.symbols.length + reel.position - 1) % reel.symbols.length;

      console.log(leftReel.display(), reel.display(), rightReel.display());
    });
  },
};

slotMachine.spin();
slotMachine.display();
