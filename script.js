// Write your code here
class Game {
    constructor(name, publisher, numOfPlayers) {
        this.name = name,
        this.publisher = publisher,
        this.numOfPlayers = numOfPlayers
    }

    gameDescription() {
        console.log(`${this.name} is published by ${this.publisher} and accomodates up to ${this.numOfPlayers} players.`)
    }
}

class VideoGame extends Game {
    constructor(name, publisher, numOfPlayers, platform) {
        super(name, publisher, numOfPlayers),
        this.platform = platform
    }

    platformRestriction() {
        console.log(`${this.name} can only be played on ${this.platform}.`)
    }
}

class TabletopGame extends Game {
    constructor(name, publisher, numOfPlayers, category) {
        super(name, publisher, numOfPlayers),
        this.category = category
    }
}

const codenames = new TabletopGame('Codenames', 'Czech Games', '2-8', 'Board Game');

console.log(codenames);

codenames.gameDescription();

const cyberpunk2077 = new VideoGame('Cyberpunk 2077', 'CD Projekt Red', '1', 'PC, PS4, PS5, Xbox One, and Xbox Series S/X');

console.log(cyberpunk2077);

cyberpunk2077.platformRestriction();