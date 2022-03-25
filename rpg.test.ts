import {Player} from "./Player";

/*describe('Test function', function () {
    it('should be true when true given', function () {
        expect(true).toBe(true)
    });
    it('should not pass', function () {
        expect(true).toBe(false)
    });
});*/


describe('PLAYER TESTS', function () {
    it('should die when health gets to 0', function () {
        let player = new Player("Scout", 10, 2);
        player.takeDamage(12);
        console.log("bebouuuu  " + player.getHealth());
        expect(player.isAlive()).toBe(false);
    });

    it('should stay alive if not enough damage taken', function () {
        let player = new Player("Scout", 10, 2);
        player.takeDamage(5);
        expect(player.isAlive()).toBe(true);
    });
});