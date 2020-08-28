
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var b1, b2, b3, b4, b5;
var s1, s2, s3, s4, s5;
var ruuf;
var bDia;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	bDia = 30;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ruuf = new Ruf(400,250,150,20);

	b1 = new Bob(400,350);
	b2 = new Bob(370,350);
	b3 = new Bob(430,350);
	b4 = new Bob(340,350);
	b5 = new Bob(460,350);

	s1 = new String(b1.body,ruuf.body,0);
	s2 = new String(b2.body,ruuf.body,-1);
	s3 = new String(b3.body,ruuf.body,1);
	s4 = new String(b4.body,ruuf.body,-2);
	s5 = new String(b5.body,ruuf.body,2);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  Engine.update(engine);
  
  ruuf.display();

  s1.display();
  s2.display();
  s3.display();
  s4.display();
  s5.display();
  
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();

  drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(b4.body,b4.body.position,{x:-100,y:0});
  
	}
}