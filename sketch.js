const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1260,600);
    engine = Engine.create();
    world = engine.world;
    chaopontocom = new Chao (630,600,1260,30)

    box1 = new Box(700,500,50,50);
    box2 = new Box(920,500,50,50);
    NEWpigmanXDzinho = new Pigboyxd(810,500)
    caixalonga = new caixinha (810,480,300,PI/2)
    box3 = new Box(700,460,50,50);
    box4 = new Box(920,460,50,50);
    box5 = new Box(810,420,50,50)
    NEWpigmanXDzinho2  = new Pigboyxd(810,460)
    caixalonga2 = new caixinha (810,440,300,PI/2) 
    passarinhocarioca= new pasarrobravo(10,10)                  
}
//TESTANDOXDZIHNOS//
function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
   chaopontocom.display();
   box2.display()
   NEWpigmanXDzinho.display()
   caixalonga.display()
   box3.display()
   box4.display()
   NEWpigmanXDzinho2.display()
   caixalonga2.display()
   box5.display()
   passarinhocarioca.display()

   
}