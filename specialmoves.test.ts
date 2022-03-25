import { Player } from "./Player"
import { Warrior } from "./Classes/Warrior"

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
})