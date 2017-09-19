var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var mainLoop = {
	idExeution : null,
	lastRecord : 0,
	aps: 0,
	fps: 0,
	iteration: function(tmpRecord){
		mainLoop.idExeution = window.requestAnimationFrame(mainLoop.iteration);
		mainLoop.update(tmpRecord);
		mainLoop.draw();

		if (tmpRecord - mainLoop.lastRecord > 999 ){
			mainLoop.lastRecord = tmpRecord;
			console.log("APS: " + mainLoop.aps + " | FPS: " + mainLoop.fps);
			mainLoop.aps = 0;
			mainLoop.fps = 0;
		}
	},
	stop: function(){

	},
	update: function(){
		mainLoop.aps++;
		move.update();

		player.y += player.vy;
		player.x += player.vx;
		
		player.collision();
		player.gravity();
		player.friction();


		// friccion
	},
	draw: function(){
		mainLoop.fps++;
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		grid.update();
		player.draw();
	}
};
