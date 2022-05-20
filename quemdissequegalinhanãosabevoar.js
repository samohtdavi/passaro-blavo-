class Quemdissequegalinhanãosabevoar {
    constructor(bodyA, pointB) {
      var options = {
          bodyA:bodyA,
          pointB:pointB,
          stiffness: 0.04,
          length: 12
      }
      this.body = Matter.Constraint.create(options);
      this.sling1= loadImage('sling1.png')
      this.sling2= loadImage('sling2.png')
      this.sling3= loadImage('sling3.png') 
      World.add(world, this.body);
    }
    jorgevaipraseucantoagr(body){
      this.body.bodyA=body
      
      }
    fire(){
      this.body.bodyA=null           
    }
    
    display(){
      image (this.sling1, 205,260)
      image (this.sling2, 177,260)
      if (this.body.bodyA){

      
      var pontoA =this.body.bodyA.position;
      var pontoB=this.body.pointB
stroke (48,22,8)
      strokeWeight (6)
      line (pontoA.x,pontoA.y,pontoB.x,pontoB.y)
      line (pontoA.x,pontoA.y,pontoB.x+30,pontoB.y-3)
       
      
  
    }
      
      
    }
  };