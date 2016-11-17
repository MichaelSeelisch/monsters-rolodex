interface player {
  run(): void;
  addLives(n:number): void;
  score(): number;
}

function createPlayer():player {
  return {
    run: function() {},
    addLives: function(n:number) {},
    score: function() {
      return -1
    }
  }
}

var player1 = createPlayer();