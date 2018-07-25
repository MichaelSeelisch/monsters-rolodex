const stampit = require('stampit');

// Basic character
const character = stampit().
    props({
        name: 'anonymous',
        lifePoints: 100,
        x: 0,
        y: 0
    });

// Mover character
const mover = stampit()
    .methods({
        move (xIncr, yIncr) {
            this.x += xIncr;
            this.y += yIncr;
         console.log(`${this.name} moved to [${this.x}, ${this.y}]`);
        }
    });

// Slasher character
const slasher = stampit()
    .methods({
        slash (direction) {
            console.log(`${this.name} slashed to the ${direction}`);
        }
    });

// Shooter character
const shooter = stampit()
    .props({
        bullets: 6
    })
    .methods({
        shoot (direction) {
            if (this.bullets > 0) {
                --this.bullets;
                console.log(`${this.name} shoot to the ${direction}`);
            }
        }
    });

// Special characters
const runner = stampit.compose(character, mover);
const samurai = stampit.compose(character, mover, slasher);
const sniper = stampit.compose(character, shooter);
const gunslinger = stampit.compose(character, mover, shooter);
const westernSamurai = stampit.compose(gunslinger, samurai);

// Testing
const c = character();
c.name = 'John';
c.lifePoints = 10;
console.log(c); // { name: 'John', lifePoints: 10, x:0, y:0 }

const gojiro = westernSamurai();
gojiro.name = 'Gojiro Kiryu';
gojiro.move(1,0);
gojiro.slash('left');
gojiro.shoot('right');