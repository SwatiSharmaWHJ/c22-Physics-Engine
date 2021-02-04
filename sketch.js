
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;




function setup(){
  var canvas=createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

  var ball_options={
   restitution:1.0
  }
  

  ball=Bodies.circle(200,20,30,ball_options)
  World.add(world,ball)

var grnd_options={
  isStatic:true
}


  ground=Bodies.rectangle(200,390,400,10,grnd_options)
 World.add(world,ground)
  console.log(ball)
}
function draw()
{
  background(0);
  Engine.update(engine)
  ellipseMode(RADIUS);
   ellipse(ball.position.x,ball.position.y,30,30);
  
  rectMode(CENTER);
   rect(ground.position.x,ground.position.y,400,10);
}
