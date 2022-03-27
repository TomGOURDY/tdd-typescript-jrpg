import { Player } from "../Player";

export class Hunter extends Player {
    constructor(name, health, maxHealth, defense, attack) {
        super(name, health, maxHealth, defense, attack)
    }

    special(target: Player) {
        if(target.getHealth() <= target.getMaxHealth()/4)
            target.takeDamage(target.getHealth())
        else 
        target.takeDamage(this.attack)
    }
}