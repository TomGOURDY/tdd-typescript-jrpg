export class Player {
    private readonly name: string;
    private health: number;
    protected maxHealth: number;
    private readonly defense: number;
    protected readonly attack: number;

    constructor(name, health, maxHealth, defense, attack) {
        this.name = name;
        this.health = health;
        this.maxHealth = maxHealth;
        this.defense = defense;
        this.attack = attack;
    }


    getName(): string {
        return this.name;
    }

    getHealth(): number {
        return this.health;
    }

    setHealth(health: number): void {
        this.health = health;
    }

    getDefense(): number {
        return this.defense;
    }

    takeDamage(damage) {
        if (damage > this.defense) {
            this.health -= damage - this.defense;
        }
    }

    getMaxHealth() : number {
        return this.maxHealth
    }

    attackPlayer(player: Player): void {
        let playerHealth = player.getHealth();
        if (this.attack > player.getDefense()) {
            let damage = this.attack - player.defense;
            player.setHealth(playerHealth - damage);
        }
    }

    isAlive() {
        return this.health > 0;
    }
}

