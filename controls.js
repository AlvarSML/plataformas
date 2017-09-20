document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

var up = false,down = false,left = false,rigth = false;

function keyDownHandler(e) {
   switch(e.keyCode) {
      case 19,38,87:
        up = true;
        break;
      case 37,65:
        left = true;
        break;
      case 39,68:
        rigth = true;
        break;
      case 40:
        down = true;
        break;
    }
  };


function keyUpHandler(e) {
    switch(e.keyCode) {
      case 19,38,87:
        up = false;
        break;
      case 37,65:
        left = false;
        //apaño
        player.vx=0;
        break;
      case 39,68:
        rigth = false;
        //apaño
        player.vx=0;
        break;
      case 40:
        down = false;
        break;
    }
  };

var move = {
  jump : function() {
    console.log("salto");
    player.vy -= 1;
  },
  left : function() {
    if(player.vx>-0.7)player.vx -= 0.4
  },
  rigth : function() {
    if(player.vx<0.7)player.vx += 0.4
  },
  update : function() {
    if (up) {
      move.jump();
    };
    if (left) {
      move.left();
    };
    if (rigth) {
      move.rigth();
    };
  }
}
