const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object, ground, circle;

function setup() {

  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  object = Bodies.rectangle(100,100,75,50);
  World.add(world,object);
  console.log(object);
  console.log(object.position.x)
  console.log(object.position.y)
  
var options={

  isStatic:true

}

  ground = Bodies.rectangle(400,390,800,20,options);
  World.add(world,ground);
  console.log(ground);

  var ball_options={
    restitution:1
  }
  circle = Bodies.circle(400,10,50,ball_options);
  World.add(world,circle);
}

function draw() {
  
  background(0);  

  Engine.update(engine);

  /*rectMode(CENTER);
  rect(object.position.x,object.position.y,75,50);
  */
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);

  ellipseMode(RADIUS);
  ellipse(circle.position.x,circle.position.y,50);

  drawSprites();

}