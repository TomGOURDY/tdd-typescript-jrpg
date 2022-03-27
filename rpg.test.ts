import {Player} from "./Player";

/*describe('Test function', function () {
    it('should be true when true given', function () {
        expect(true).toBe(true)
    });
    it('should not pass', function () {
        expect(true).toBe(false)
    });
});*/


describe('PLAYER STATS', () => {
    it('should die when health gets to 0', () => {
        let player = new Player("Scout", 10, 2, 3);
        player.takeDamage(12);
        console.log("bebouuuu  " + player.getHealth());
        expect(player.isAlive()).toBe(false);
    });

    it('should stay alive if not enough damage taken', () => {
        let player = new Player("Scout", 10, 2, 3);
        player.takeDamage(5);
        expect(player.isAlive()).toBe(true);
    });

    it('should have the same name as given to the player', () => {
        let player = new Player("Scout", 10, 2, 3);
        expect(player.getName()).toBe("Scout");
    });

    it('should take less damage depending on defense', () => {
        //given
        let player = new Player("Scout", 10, 2, 3);
        //when
        player.takeDamage(5)
        //then
        expect(player.getHealth()).toBe(7)
    })

    it('should not take damage when defense superior than attack', () => {
        let player = new Player("Scout", 10, 2, 3);
        player.takeDamage(1)
        expect(player.getHealth()).toBe(10)
    })
});

describe('PLAYER INTERACTIONS', () => {
    it('should be able to attack another player', () => {
        let player1 = new Player("Tank", 15, 4, 2);
        let player2 = new Player("Mage", 9, 1, 4);
        player1.attackPlayer(player2);
        expect(player2.getHealth()).toBe(8);
    });
    describe('PLAYER CRITICALS', () => {
        it('should return a number', () => {
            let player1 = new Player('Tank', 15, 4, 2);
            expect(typeof(player1.critical(2, "real"))).toBe('number');
        })
        it('should return 1.5 time the base damage', () => {
            let player1 = new Player('Tank', 15, 0, 2);
            player1.takeDamage(player1.critical(2, "fake"))
            expect(player1.getHealth()).toBe(12)
        })

    })
});