class caixinha extends Box {
    constructor(x, y,higth, angle) {
      super(x,y,20, higth, angle)
      Matter.Body.setAngle(this.body,angle)
      this.image=loadImage("wood2.png");
    }
 
  }