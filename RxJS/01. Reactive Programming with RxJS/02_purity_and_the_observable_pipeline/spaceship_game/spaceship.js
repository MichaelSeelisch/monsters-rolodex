/*** starfield_1.js ***/
var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

document.body.appendChild(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Creating the star field
var SPEED = 40;
var STAR_NUMBER = 250;

/* This code will give us a stream that generates 250 of "stars",
 * where a star will be represented by an object that contains
 * random coordinates and a size between 1 and 4
 */
var StarStream = Rx.Observable.range(1, STAR_NUMBER)
  .map(function() {
    return {
      x: parseInt(Math.random() * canvas.width),
      y: parseInt(Math.random() * canvas.height),
      size: Math.random() * 3 + 1
    };
  })
  // Move the stars by increasing the y-coordinate every few milliseconds for all stars
  .toArray()
  .flatMap(function(starArray) {
    return Rx.Observable.interval(SPEED)
      .map(function() {
        starArray.forEach(function(star) {
          if (star.y >= canvas.height) {
            star.y = 0; // Reste star to top of the screen
          }
          star.y += 3 // Move star
        });
        return starArray;
      });
  })
  /* Replaced width 'Game.subscribe...' in hero_1.js:
    .subscribe(function(starArray) {
      paintStars(starArray);
    });
  */

// Paint an array of stars on the canvas
function paintStars(stars) {
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#ffffff';
  stars.forEach(function(star) {
    ctx.fillRect(star.x, star.y, star.size, star.size);
  });
}

/*** hero_1.js ***/
var HERO_Y = canvas.height - 30;
var mouseMove = Rx.Observable.fromEvent(canvas, 'mousemove');
var SpaceShip = mouseMove
  .map(function(event) {
    return {
      x: event.clientX,
      y: HERO_Y
    };
  })
  .startWith({
    x: canvas.width / 2,
    y: HERO_Y
  });


  // Draw game characters
  function drawTriangle(x, y, width, color, direction) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x - width, y);
    ctx.lineTo(x, direction === 'up' ? y - width : y + width);
    ctx.lineTo(x + width, y);
    ctx.lineTo(x - width, y);
    ctx.fill();
  }

function paintSpaceShip(x, y) {
  drawTriangle(x, y, 20, '#ff0000', 'up');
}

function renderScene(actors) {
  paintStars(actors.stars);
  paintSpaceShip(actors.spaceship.x, actors.spaceship.y);
  paintEnemies(actors.enemies);
}



/*** enemy_1.js ***/
var ENEMY_FREQ = 1500;
var Enemies = Rx.Observable.interval(ENEMY_FREQ)
  .scan(function(enemyArray) {
    var enemy = {
      x: parseInt(Math.random() * canvas.width),
      y: -30,
    };
    enemyArray.push(enemy);
    return enemyArray;
  }, []);

// Helper function to get a random integer
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min +1)) + min;
}

function paintEnemies(enemies) {
  enemies.forEach(function(enemy) {
    enemy.y += 5;
    enemy.x += getRandomInt(-15, 15);

    drawTriangle(enemy.x, enemy.y, 20, '#00ff00', 'down');;
  });
}

var Game = Rx.Observable
  .combineLatest(
    StarStream,
    SpaceShip,
    Enemies,
    function(stars, spaceship, enemies) {
      return {
        stars: stars,
        spaceship: spaceship,
        enemies: enemies
      };
    }
  );
Game.subscribe(renderScene);
