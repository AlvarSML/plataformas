var canvas = document.getElementById("myCanvas");
var ctx= canvas.getContext("2d");

var m = [];
for (var i = 0; i < 40; i++){
	m[i] = [];
}

var grid = {
	h : canvas.heigth,
	w : canvas.width,
	mesh : m,
	update: function() {
		for (var y = 0; y < 40; y ++){
			for (var x = 0; x < 40; x ++){
				grid.mesh[x][y].draw();
			}
		}
	},
	generate: function() {
		for (var y = 0; y < 40; y ++){
			for (var x = 0; x < 40; x ++){
				grid.mesh[x][y] = new point((x*10),(y*10));
				grid.mesh[x][y].draw();
			}
		}
		ctx.stroke();
		grid.sides();
		console.log("Mapa generado");
	},
	soft: function() {
		for (var x = 1; x < 39; x++) {
			for (var y = 1; y < 39; y++) {
				if (puntosLados(x,y,grid.mesh[x][y].fill) < 4) {
					grid.mesh[x][y].fill = !grid.mesh[x][y].fill;
				}
			}
		}
		grid.update();
	},
	sides: function() {
		for (var y = 0; y < 40; y ++){
			for (var x = 0; x < 40; x ++){
				if(grid.mesh[x][y].x == 0 || grid.mesh[x][y].y == 0 || grid.mesh[x][y].x == 390 || grid.mesh[x][y].y == 390){
					grid.mesh[x][y].fill = true;
					grid.mesh[x][y].draw();
				}
			}
		}
	},
	closerTileX: function(x,y){
		var px = x / 10;
		var py = y / 10;
	}
};

function point(px,py) {
	this.x = px;
	this.y = py;
	this.fill = Boolean(Math.floor(Math.random() * 2));
	this.color = "rgb(0,0,0)";

	this.draw = function(){
		if (this.fill){
			ctx.fillRect(this.x,this.y,10,10);
			ctx.fillStyle = this.color;
			ctx.stroke();
		} else {
			ctx.clearRect(this.x,this.y,10,10);
		}

	}
};
// cuenta el numero de puntos por lado
function puntosLados(px,py,tipo){
	var pts = 0;

	if (px > 0 && py > 0){
		for (var x = px - 1; x <= px + 1; x ++){
			for(var y = py -1 ; y <= py + 1; y ++ ){
				if (grid.mesh[x][y].fill == tipo){
					pts++;
				}
			}
		}
	}
	return pts;
}
