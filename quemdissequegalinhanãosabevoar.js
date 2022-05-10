class Quemdissequegalinhanãosabevoar {
    constructor(bodyA, pointB) {
      var options = {
          bodyA:bodyA,
          pointB:pointB,
          stiffness: 0.04,
          length: 10
      }
      this.body = Matter.Constraint.create(options);
      
      World.add(world, this.body);
    }
    fire(){
      this.body.bodyA=null
    }
    display(){
      if (this.body.bodyA){

      
      var pontoA =this.body.bodyA.position;
      var pontoB=this.body.pointB
      line (pontoA.x,pontoA.y,pontoB.x,pontoB.y)
    }
      
      
    }
  };