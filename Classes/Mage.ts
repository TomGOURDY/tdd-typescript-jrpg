import { Player } from "../Player";

export class Mage extends Player {
    constructor(name, health, maxHealth, defense, attack) {
        super(name, health, maxHealth, defense, attack)
    }

    special(target: Player) {
        target.takeDamage(this.attack + target.getDefense())
    }
}