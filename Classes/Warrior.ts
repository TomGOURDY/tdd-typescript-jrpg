import { Player } from "../Player";

export class Warrior extends Player {

    constructor(name, health, defense, attack) {
        super(name, health, defense, attack)
    }

    special(target: Player) {
        target.takeDamage(this.attack*2)
    }
}