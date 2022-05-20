class Pigboyxd extends Box {
    constructor(x, y) {
      super(x,y,50, 50)
      this.image=loadImage("enemy.png");
      this.tint=255
    }
 display(){
  if (this.body.speed>6){
   World.remove(world,this.body)
   push()
   this.tint=this.tint-4
   tint(255,this.tint)
   image(this.image,this.body.position.x,this.body.position.y,50,50)
   pop()

  }
  else{
    super.display()
  }
 }
 
  };
  