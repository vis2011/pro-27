
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5,bobObject6, roofObject
var rope1,rope2,rope3, rope4,rope5,rope6;
var world;
var bird


function preload(){
  bird=loadImage("bird.png");
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(400,250,230,20);
	ball1 = new bob(320,520,40)
	ball2 = new obob(360,520,40)	
	ball3 = new obob(400,520,40)
	ball4 = new obob(440,520,40)
	ball5 = new abob(480,520,40)
	
	rope1=new rope(ball1.body,roofObject.body,-100, 5)
	rope2=new rope(ball2.body,roofObject.body,-50, 5)
	rope3=new rope(ball3.body,roofObject.body,0, 5)
	rope4=new rope(ball4.body,roofObject.body,50, 5)
	rope5=new rope(ball5.body,roofObject.body,100, 5)

	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  roofObject.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


  ball1.display();
   ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
 
}

function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-50,y:-45})
	}
}






