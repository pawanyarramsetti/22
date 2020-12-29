
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var ball;
var rect;
var engine,world;
var object;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;


  var options = {
    isStatic:true
  }

  object = Bodies.rectangle(200,390,400,100,options);
  World.add(world,object);
var balloptions={
restitution:0.7
}
  
  
  ball=Bodies.circle(200,200,10,balloptions);


  World.add(world,ball);



  console.log(object);


}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x,object.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20)


}