class Quemdissequegalinhanãosabevoar {
    constructor(bodyA, bodyB) {
      var options = {
          bodyA:bodyA,
          bodyB:bodyB,
          stiffness: 0.04,
          length: 10
      }
      this.body = Matter.Constraint.create(options);
      
      World.add(world, this.body);
    }
    display(){
      var pontoA =this.body.bodyA.position;
      var pontoB=this.body.bodyB.position
      line (pontoA.x,pontoA.y,pontoB.x,pontoB.y)
      
      
    }
  };