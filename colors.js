var colP = {
  paleta : ["#363333","#272121","#e16428","#000000" ],
  color : function(){
    for (var y = 0; y < 40; y ++){
			for (var x = 0; x < 40; x ++){
				grid.mesh[x][y].color = colP.paleta[Math.floor(Math.random() * 4)];
			}
		}
  }
}
