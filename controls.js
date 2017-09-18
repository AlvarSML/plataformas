document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

var up = false,down = false,left = false,rigth = false;

function keyDownHandler(e) {
   switch(e.keyCode) {
      case 19,38,87:
      console.log("Tecla up true");
        up = true;
        break;
      case 37:
      console.log("Tecla left true");
        left = true;
        break;
      case 39:
      console.log("Tecla rigth true");
        rigth = true;
        break;
      case 40:
      console.log("Tecla down true");
        down = true;
        break;
    }
  };


function keyUpHandler(e) {
    switch(e.keyCode) {
      case 19,38,87:
      console.log("Tecla up false");
        up = false;
        break;
      case 37:
      console.log("Tecla left false");
        left = false;
        break;
      case 39:
      console.log("Tecla rigth false");
        rigth = false;
        break;
      case 40:
      console.log("Tecla down false");
        down = false;
        break;
    }
  };
