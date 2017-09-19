document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

var up = false,down = false,left = false,rigth = false;

function keyDownHandler(e) {
   switch(e.keyCode) {
      case 19,38,87:
        up = true;
        break;
      case 37:
        left = true;
        break;
      case 39:
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
      case 37:
        left = false;
        break;
      case 39:
        rigth = false;
        break;
      case 40:
        down = false;
        break;
    }
  };

var move = {
  jump : function() {
    console.log("salto");
    //player.y -= 10;
    player.vy -= 1;
  },
  left : function() {

  },
  rigth : function() {

  },
  update : function() {
    if (up) {
      move.jump();
    };
    if (left) {

    };
    if (rigth) {

    };
  }
}
