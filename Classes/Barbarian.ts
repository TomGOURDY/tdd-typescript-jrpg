import { Player } from "../Player";

export class Barbarian extends Player {

    constructor(name, health, maxHealth, defense, attack) {
        super(name, health, maxHealth, defense, attack)
    }

    special(target: Player) {
        target.takeDamage(this.attack*3)
        this.takeDamage(this.attack + this.getDefense())
    }
}