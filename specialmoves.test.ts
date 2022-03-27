import { Player } from "./Player"
import { Warrior } from "./Classes/Warrior"
import {Healer} from "./Classes/Healer";
import { Thief } from "./Classes/Thief"
import { Barbarian } from "./Classes/Barbarian"
import { Hunter } from "./Classes/Hunter"
import { Mage } from "./Classes/Mage"

describe('Special Moves', function() {
    describe('Warrior', function () {
        it('attack should do double damage', function() {
            const target = new Player('Target', 10, 10, 0, 0)
            const warrior = new Warrior('Warrior',10, 10, 2, 4)
            warrior.special(target)
            expect(target.getHealth()).toBe(2)
        })
        it('attack should not ignore defense', function() {
            const target = new Player('Target', 10, 10, 2, 0)
            const warrior = new Warrior('Warrior',10, 10, 2, 4)
            warrior.special(target)
            expect(target.getHealth()).toBe(4)
        })
    })
    describe('Healer', function () {
        it('should be able to heal another player', function () {
            let player1 = new Player("Tank", 15, 20, 4, 2);
            let player2 = new Healer("Heal", 9, 9, 1, 4);
            player2.healPlayer(player1);
            expect(player1.getHealth()).toBe(20);
        });
        it('should be able to heal at double power', function () {
            let player1 = new Player("Tank", 15, 25, 4, 2);
            let player2 = new Healer("Heal", 9, 9, 1, 4);
            player2.special(player1);
            expect(player1.getHealth()).toBe(25);
        });
    });
    describe('Thief', function () {
        it('attack should do damage x 1.5', function() {
            const target = new Player('Target', 10, 10, 0, 0)
            const thief = new Thief('Thief',10, 10, 2, 4)
            thief.special(target)
            expect(target.getHealth()).toBe(4)
        })
        it('attack should ignore defense', function() {
            const target = new Player('Target', 10, 10, 2, 0)
            const thief = new Thief('Thief',10, 10, 2, 4)
            thief.special(target)
            expect(target.getHealth()).toBe(4)
        })
    })
    describe('Barbarian', function () {
        it('attack should do triple damage', function() {
            const target = new Player('Target', 15, 15, 0, 0)
            const barbarian = new Barbarian('Barbarian',10, 10, 0, 4)
            barbarian.special(target)
            expect(target.getHealth()).toBe(3)
        })
        it('attack should not ignore defense', function() {
            const target = new Player('Target', 15, 15, 2, 0)
            const barbarian = new Barbarian('Barbarian',10, 10, 2, 4)
            barbarian.special(target)
            expect(target.getHealth()).toBe(5)
        })
        it('attack should damage itself, ignoring defense', function() {
            const target = new Player('Target', 15, 15, 0, 0)
            const barbarian = new Barbarian('Barbarian',10, 10, 2, 4)
            barbarian.special(target)
            expect(barbarian.getHealth()).toBe(6)
        })
    })
    describe('Hunter', function () {
        it('attack should do normal damage', function() {
            const target = new Player('Target', 10, 10, 0, 0)
            const hunter = new Hunter('Hunter', 10, 10, 0, 3)
            hunter.special(target)
            expect(target.getHealth()).toBe(7)
        })
        it('attack should not ignore defense', function() {
            const target = new Player('Target', 10, 10, 2, 0)
            const hunter = new Hunter('Hunter', 10, 10, 0, 3)
            hunter.special(target)
            expect(target.getHealth()).toBe(9)
        })
        it('attack should kill if target health under 25% of maxHealth', function() {
            const target = new Player('Target', 10, 40, 0, 0)
            const hunter = new Hunter('Hunter', 10, 10, 0, 3)
            hunter.special(target)
            expect(target.getHealth()).toBe(0)
        })
    })
    describe('Mage', function () {
        it('attack should do normal damage', function() {
            const target = new Player('Target', 10, 10, 0, 0)
            const mage = new Mage('Mage', 10, 10, 0, 3)
            mage.special(target)
            expect(target.getHealth()).toBe(7)
        })
        it('attack should hurt every member of enemy team', function() {
            const target = new Player('Dummy', 10, 10, 0, 0)
            const target2 = new Player('Target', 10, 10, 0, 0)
            const target3 = new Player('Mannequin', 10, 10, 0, 0)
            const mage = new Mage('Mage', 10, 10, 0, 3)
            mage.special(target)
            mage.special(target2)
            mage.special(target3)
            expect(target.getHealth()).toBe(7)
            expect(target2.getHealth()).toBe(7)
            expect(target3.getHealth()).toBe(7)
        }) 
        it('attack should ignore defense', function() {
            const target = new Player('Dummy', 10, 10, 0, 0)
            const target2 = new Player('Target', 10, 10, 1, 0)
            const mage = new Mage('Mage', 10, 10, 0, 3)
            mage.special(target)
            mage.special(target2)
            expect(target.getHealth()).toBe(7)
            expect(target2.getHealth()).toBe(7)
        })
    })
})