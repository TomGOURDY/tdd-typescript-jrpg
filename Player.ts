export class Player {
    name: string;
    health: number;
    defense: number;

    constructor(name, health, defense) {
        this.name = name;
        this.health = health;
        this.defense = defense;
    }

    getName() {
        return this.name;
    }

    getHealth() {
        return this.health;
    }

    takeDamage(damage) {
        if (damage > this.defense) {
            this.health -= damage - this.defense;
        }
    }

    isAlive() {
        return this.health > 0;
    }
}

