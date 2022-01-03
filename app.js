class player{
    constructor(ship){
    this.hull = 20
    this.firepower = 5
    this.accuracy = .2
    }

    attack(enemy){
        if()
        enemy.hull -= this.firepower
    }
}

class alien{
    constructor(ship){
    this.hull = Math.floor(Math.random() * (6 - 3 + 1)) + 3;
    this.firepower = Math.floor(Math.random() * (4 - 2 + 1)) + 2
    this.accuracy = Math.floor(Math.random() * (0.8 - 0.6 + 1)) + 0.6
    }

    attack(enemy){
        enemy.hull -= this.firepower
    }
}

let player1 = new player('USS_Schwarzenegger') 

let alienArr = [new alien('Pound'), 
                new alien('Bang'), 
                new alien('Nawt'), 
                new alien('Bupkus'), 
                new alien('Blanko'),
                new alien('Mariah')
                ]

player1.attack(alienArr[0])