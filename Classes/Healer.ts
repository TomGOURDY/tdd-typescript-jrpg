import { Player } from "../Player";

export class Healer extends Player {

    private healPower: number;
    constructor(name, health, maxHealth, defense, attack) {
        super(name, health, maxHealth, defense, attack)
        this.healPower = 5;
    }

    healPlayer(target: Player) {
        target.setHealth(target.getHealth() + this.healPower);
    }

    special(target: Player) {
        target.setHealth(target.getHealth() + this.healPower * 2);
    }
}