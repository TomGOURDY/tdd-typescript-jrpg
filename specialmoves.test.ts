import { Player } from "./Player"
import { Warrior } from "./Classes/Warrior"
import {Healer} from "./Classes/Healer";

describe('Special Moves', function() {
    describe('Warrior', function () {
        it('attack should do double damage', function() {
            const target = new Player('Target', 10, 0, 0)
            const warrior = new Warrior('Warrior',10, 2, 4)
            warrior.special(target)
            expect(target.getHealth()).toBe(2)
        })
        it('attack should not ignore defense', function() {
            const target = new Player('Target', 10, 2, 0)
            const warrior = new Warrior('Warrior',10, 2, 4)
            warrior.special(target)
            expect(target.getHealth()).toBe(4)
        })
    })
    describe('Healer', function () {
        it('should be able to heal another player', function () {
            let player1 = new Player("Tank", 15, 4, 2);
            let player2 = new Healer("Heal", 9, 1, 4);
            player2.healPlayer(player1);
            expect(player1.getHealth()).toBe(20);
        });
        it('should be able to heal at double power', function () {
            let player1 = new Player("Tank", 15, 4, 2);
            let player2 = new Healer("Heal", 9, 1, 4);
            player2.special(player1);
            expect(player1.getHealth()).toBe(25);
        });
    });
})