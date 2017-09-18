var keyboard = {
  keys : Array(),
  keyPress : function(key) {
    keyboard.keys.push(key);
  },
  keyPresed : function(key){
    return (keyboard.keys.indexOf(key) !== -1);
  },
  keyRelease : function() {

  },
  arrRestart : function() {
    keyboard.keys = Array();
  }

};
