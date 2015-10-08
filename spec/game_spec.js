describe ('game', function(){

  beforeEach(function(){
    game = new Game();
  });

  it('has 10 pins to start each frame', function(){
    expect(game.pins).toEqual(10);
  });

  it('starts on frame 1', function(){
    expect(game.frame).toEqual(1);
  });

  it('can pass to the next frame', function(){
    game.moveFrame();
    expect(game.frame).toEqual(2);
  });

  it('starts on roll 1', function(){
    expect(game.roll).toEqual(1);
  });

  it('moves to roll 2 after roll 1', function(){
    game.moveRoll();
    expect(game.roll).toEqual(2);
  });

  it('resets to roll 1 after 2 rolls in the same frame', function(){
    game.moveRoll();
    game.moveRoll();
    expect(game.frame).toEqual(2);
  });

  it('has a limit of 10 frames', function(){
    game.frame = 10
    expect(game.moveFrame()).toEqual('Game Over')
  });

  it('can add a score on a roll', function(){
    game.scoreRoll(1);
    game.scoreRoll(2);
    expect(game.scores[1]).toEqual([1, 2]);
  });

  it('can return the current score', function(){
    game.scoreRoll(1);
    game.scoreRoll(2);
    expect(game.currentScore(1)).toEqual(3);
  });
});