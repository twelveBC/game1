class Setting {
  #bot;
  constructor(player, bot) {
    this.player = player;
    this.#bot = bot;
  }
  #randomBot() {
    let botPick = ["kertas", "gunting", "batu"];
    let test = botPick[Math.floor(Math.random() * botPick.length)];
    return this.#bot = test;
  }
  publicBot() {
    return this.#randomBot();
  }
  setPlayerPicK(player){
    this.player = player;
  }
  getPlayerPicK(){
    return this.player;
  }
}

class gamePlay extends Setting {
  constructor(player,bot,winner) {
    super(player,bot);
    this.winner = winner;
  }
  #rulesGame() {
    // if (
    //     (this.getPlayerPicK() == "kertas" && this.publicBot() == "batu") ||
    //     (this.getPlayerPicK() == "batu" && this.publicBot() == "gunting") ||
    //     (this.getPlayerPicK() == "gunting" && this.publicBot() == "kertas")
    //   ) {
    //     return this.winner = this.player
    //   } else if (this.getPlayerPicK() === this.publicBot()) {
    //     return this.winner = this.bot
    //   } else {
    //     this.winner = "DRAW"
    //   }
    return this.player;
  }
  publicRules() {
    // console.log(this.#rulesGame())
    return this.#rulesGame();
  }
  matchResult() {
    return;
  }
}

let start = new gamePlay();
let setting = new Setting();
setting.setPlayerPicK('kertas');
console.log(setting.getPlayerPicK());

// console.log(start.randomBot());
// console.log(start.playerPick());
// console.log(start.rulesGame());
// console.log(start.matchResult());

console.info(start.publicBot());
console.info(start.publicRules());


// document.addEventListener("click",pilihanPlayer);
// function pilihanPlayer() {
//   let player = document.getElementsByTagName("player");
//   for (let i = 0; i < player.length; i++) {
//     // for (let j = 0; j < player[i].length; j++) {
//     //   player[i][j].addEventListener('click', function(){
//     //     console.log(player[0].alt);
//     //   }, false);
//     // }
//     console.log(player[0]);
//     // const element = player;
//     // element[0] = "satu"
//     // element[1] = "dua"
//     // element[3] = "tiga"
//   }
//   // console.log(player);
// }