import { Player } from "../Player";

export class Thief extends Player {

    constructor(name, health, maxHealth, defense, attack) {
        super(name, health, maxHealth, defense, attack)
    }

    special(target: Player) {
        if (target.getDefense() != 0)
            target.takeDamage(this.attack*1.5 + target.getDefense())
        else
        target.takeDamage(this.attack*1.5)
    }
}