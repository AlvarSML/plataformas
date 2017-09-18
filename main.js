// funcionamiento basico

document.addEventListener('DOMContentLoaded', function() {
		inicio.start();
	}, false);
/*asdasd*/
// jugador

var player = {
	x: 0,
	y: 0,
	color: "rgb(255,0,0)",
	vx: 0,
	vy: 0,
	gravity: function() {

		//Comprobar v terminal
		if (player.vx < TERM) {
			player.vy += GRAV;
		}

		//Que no se salga del mapa
		if (player.y >= LIM) {
			player.y = LIM;
			player.vy = 0;
			// la velocidad en Y es 0 si esta en el limite
			if (player.vy < 0) {
				player.vy = 0;
			}
		}

		if ((player.y+10) > player.CollY()){
			player.vy = 0;
			player.y =  Math.floor(player.y);
		}

		player.y+= player.vy;
	},
	spawn: function(){

		var pos = [];

		for (var x = 0; x < 38; x++) {
			for (var y = 1; y < 39; y++) {
				if (puntosLados(x,y,false) > 8) {
					pos.push(grid.mesh[x][y]);
				}
			}
		}

		index = Math.floor((Math.random() * pos.length) + 0);
		player.x = pos[index].x;
		player.y = pos[index].y;

		player.draw();
	},
	draw: function(){
		ctx.fillStyle = player.color;
		ctx.fillRect(player.x,player.y,10,10);
		ctx.stroke();
	},
	CollY: function(){
		var y2 = Math.floor(player.y/10) + 1 ;
		var rigthTile = grid.mesh[Math.floor(player.x/10) + 1][y2];
		var downTile = grid.mesh[Math.floor(player.x/10)][y2];

		if ((downTile.fill && y2 - downTile.y < 1) ||
			(player.x % 10 > 0 && rigthTile.fill && y2 - rigthTile.y < 1)) {

			player.vy = 0;
			player.y = downTile.y - 10;
		}

	}
};

// constantes

const GRAV = 0.1;
const TERM = 100;
const LIM = 380;

// cosas pre inicio
grid.generate();
grid.soft();
grid.soft();
grid.soft();
grid.soft();

player.spawn();
// inicio del loop principal


var inicio = {
	start: function(){
		console.log("Iniciado");
		mainLoop.iteration();
	}
};
