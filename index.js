class Game {
  constructor(player) {
    this.player = player,
    this._bot = ""
  }

  set bot(bot) {
    this._bot = bot;
  }

  get bot() {
    return this._bot;
  }

  setBot(bot){
    this._bot = bot;
  }

  getBot(){
    return this._bot;
  }

  #isRandom() {
    let bot = ['paper', 'rock', 'scissors'];
    return bot[Math.floor(Math.random() * bot.length)]; 
  }

  getIsRandom(){
    return this.#isRandom();
  }

  #isRule() {
    let player = this.player;
    this.getBot();
    let botPick = this._bot;

    if(
      (player === 'paper' && botPick === 'rock') || 
      (player === "rock" && botPick === "scissors") || 
      (player === "scissors" && botPick === "paper")) {
        return "Player Win";
    } else if (player === botPick) {
      return "Game Draw";
    } else {
      return "Player Lose";
    }
  }

  getIsRule(){
    return this.#isRule();
  }
}

class Play extends Game {
  constructor(player) {
    super(player);
  }

  play() {
    return this.getIsRule();
  }
}

let game = new Play();
game.player = 'paper';
game.setBot(game.getIsRandom());
console.log("Computer " + game.getBot(), "Player " + game.player)
console.log(game.getIsRule())
