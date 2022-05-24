class pasarrobravo extends Box {
    constructor(x, y) {
      super(x,y,50, 50)
     this.image=loadImage("bird.png"); 
     this.SMOKEimage=loadImage("smoke.png")
     this.tragetoria=[] 
    }
 display (){

    super.display()
    if(this.body.velocity.x>10 && this.body.position.x>200){
      
    
    var pos = [this.body.position.x, this.body.position.y]
    this.tragetoria.push(pos)
   }
    for (var I=0;I<this.tragetoria.length;I++){
       image (this.SMOKEimage,this.tragetoria[I][0],this.tragetoria[I][1]) 
      
    }
 }
  };