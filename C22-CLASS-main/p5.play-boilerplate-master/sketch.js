const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;ball

function setup() 
{
  var canvas = createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var option = 
  {
    isStatic : true
  }
  ground = Bodies.rectangle(200,390,400,20, option);
  World.add(world, ground)
  var star = {

   restitution:1.3
   
  }
  ball = Bodies.circle(200,100,20,star);
    
  World.add(world,ball)
  
}

function draw() 
{
  background("lightyellow");

  Engine.update(engine)
 fill("lightblue")
rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
   fill("lightgreen")
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
}



























