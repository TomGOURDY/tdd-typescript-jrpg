export class Player {
    private readonly name: string;
    private health: number;
    private readonly defense: number;
    private readonly attack: number;

    constructor(name, health, defense, attack) {
        this.name = name;
        this.health = health;
        this.defense = defense;
        this.attack = attack;
    }

    fakeCritical(): boolean {
        return true
    }

    realCritical(): boolean {
        return Math.random() * 100 < 15;
    }


    critical(damage: number, type: string): number | Error {
        if(type == "fake"){
            return damage * 1.5
        }
        if(type == "real"){
            if (this.realCritical()){
                return damage * 1.5
            }
            else{
                return damage
            }
        }
        else{
            return new Error("Wrong criticalRate")
        }
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

    getDefense() {
        return this.defense;
    }

    takeDamage(damage) {
        if (damage > this.defense) {
            this.health -= damage - this.defense;
        }
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

