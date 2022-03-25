import {Player} from "./Player";

/*describe('Test function', function () {
    it('should be true when true given', function () {
        expect(true).toBe(true)
    });
    it('should not pass', function () {
        expect(true).toBe(false)
    });
});*/

describe('PLAYER STATS', function () {
    it('should die when health gets to 0', function () {
        let player = new Player("Scout", 10, 2, 3);
        player.takeDamage(12);
        console.log("bebouuuu  " + player.getHealth());
        expect(player.isAlive()).toBe(false);
    });

    it('should stay alive if not enough damage taken', function () {
        let player = new Player("Scout", 10, 2, 3);
        player.takeDamage(5);
        expect(player.isAlive()).toBe(true);
    });

    it('should have the same name as given to the player', function () {
        let player = new Player("Scout", 10, 2, 3);
        expect(player.getName()).toBe("Scout");
    });

    it('should take less damage depending on defense', function (){
        //given
        let player = new Player("Scout", 10, 2, 3);
        //when
        player.takeDamage(5)
        //then
        expect(player.getHealth()).toBe(7)
    })

    it('should not take damage when defense superior than attack', function (){
        let player = new Player("Scout", 10, 2, 3);
        player.takeDamage(1)
        expect(player.getHealth()).toBe(10)
    })
});

describe('PLAYER INTERACTIONS', function () {
    it('should be able to attack another player', function () {
        let player1 = new Player("Tank", 15, 4, 2);
        let player2 = new Player("Mage", 9, 1, 4);
        player1.attackPlayer(player2);
        expect(player2.getHealth()).toBe(8);
    });
    it('each player should attack ennemy team members', function () {
        const Team1: Array<Player> = [
            new Player("Warrior", 20, 0, 3),
            new Player("Ninja", 12, 0, 8),
            new Player("Healer", 10, 0, 1),
        ]
        const Team2: Array<Player> = [
            new Player("Warrior", 20, 0, 3),
            new Player("Ninja", 12, 0, 8),
            new Player("Healer", 10, 0, 1),
        ]
        for (let i = 0; i < Team1.length; i++) {
            Team1[i].attackPlayer(Team2[i]);
            Team2[i].attackPlayer(Team1[i]);
        }
        expect([Team1[0].getHealth(), Team1[1].getHealth(), Team1[2].getHealth(),
                        Team2[0].getHealth(), Team2[1].getHealth(), Team2[2].getHealth()])
            .toEqual([17, 4, 9, 17, 4, 9]);
    });
});