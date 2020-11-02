const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,box1,box2,ground;

function setup() {
 var canvas = createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
 
  box1 = new Box(20,10,50,50);
  box2 = new Box(20,20,30,60);
  
 ground = new Ground(20,390,400,10);


}

function draw() {
  background(25,255,255);  
 
 Engine.update(engine);
 box1.display();
 box2.display();

 ground.display();
  drawSprites();
}