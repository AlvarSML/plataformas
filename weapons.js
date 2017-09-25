function genade(){
  this.x = player.x + 2;
  this.y = player.y + 5;
  this.color = "rgb(0,0,0)";
  this.draw = function(){
    ctx.fillRect(this.x,this.y,10,10);
    ctx.fillStyle = this.color;
    ctx.stroke();
  }

}
