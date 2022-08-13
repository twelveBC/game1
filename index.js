class Initialization {
    #bot; // private
    constructor (player,bot){
        this.player = player
        this.#bot = bot
    }
    playerPick(){
        return "Player Test" + this.player
    }
    bot1(){
        return "Bot Test" + this.#bot
    }
}

class PlayerPick extends Initialization {
    constructor(player,bot,playerPick){
        super(player,bot),
        this.playerPick = playerPick``
    }
    player1(){
        return this.player1() + this.bot1() + 'memilih' + this.playerPick
    }
}

let start = new PlayerPick('1','2','3')
console.log(start)
console.log("test")