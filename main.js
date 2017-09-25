// funcionamiento basico

document.addEventListener('DOMContentLoaded', function() {
		inicio.start();
	}, false);
// jugador

var player = {
	x: 0,
	y: 0,
	py: null,
	px: null,
	color: "rgb(255,0,0)",
	vx: 0,
	vy: 0,
	grenades: [],
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
	collision : function(){
		//controla la velocidad, devuelve true/false en colision/aire
		//los puntos del cuadrado son x,x+10,y,y+10
		//las casillas a tener en cuenta:
		// . (x,y-1) (arriba)
		// . (x+1,y-1) (arriba derecha)
		// . (x,y+1) (abajo)
		// . (x+1,y+1)	(abajo derecha)
		player.px = Math.floor(player.x / 10);
		player.py = Math.floor(player.y / 10);

		if (player.vy > 0) {
			//colisiona abajo
			player.collDown();
		}

		if (player.vy < 0) {
			//colisiona arriba
			player.collUp();

		}
		if (player.vx > 0){
			// colisiona derecha
			player.collRigth();
		}


		if (player.vx < 0){
			// colisiona izquierda
			player.collLeft();
		}

	},
	collUp : function(){
		var upTile = grid.mesh[player.px][player.py];
		var upDTile = grid.mesh[player.px + 1][player.py];

		if (upTile.fill || (upDTile.fill && player.x % 10 > 0)){
			player.vy = 0;
			player.y = upTile.y + 10;
			return true;
		}
	},
	collDown : function(){

		var downTile = grid.mesh[player.px][player.py + 1];
		var downDTile = grid.mesh[player.px + 1][player.py + 1];

		if (downTile.fill || (downDTile.fill && player.x % 10 > 0)) {
			player.vy = 0;
			player.y = downTile.y - 10;
		}

	},
	collRigth : function(){
		var rigthTile = grid.mesh[player.px+1][player.py];
		var rDtile = grid.mesh[player.px+1][player.py+1];

		if (rigthTile.fill || rDtile.fill && (player.y % 10 > 0)) {
			player.vx = 0;
			player.x = rigthTile.x - 10;
		}
	},
	collLeft : function() {
		var lTile = grid.mesh[player.px][player.py];
		var lDTile = grid.mesh[player.px][player.py+1];

		if (lTile.fill || lDTile.fill && (player.y % 10 > 0)) {
			player.vx = 0;
			player.x = lTile.x + 10;
		}
	}
};

/////////////////////////\--------funciones-------/\\\\\\\\\\\\\\\\\\\\\\\
// constantes

const GRAV = 0.5;
const TERM = 100;
const LIM = 380;

// cosas pre inicio
grid.generate();
grid.soft();
grid.soft();
grid.soft();
grid.soft();
colP.color();

player.spawn();
// inicio del loop principal


var inicio = {
	start: function(){
		console.log("Iniciado");
		mainLoop.iteration();
	}
};
