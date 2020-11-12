
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var bin1;

function setup() {
	createCanvas(1200, 400);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(400, 200, 50);

	ground = new Ground(600, 370, 1200, 10);

	bin1 = new Dustbin(950, 269, 170, 190);
		 
}


function draw() {
  background(180);
  Engine.update(engine);
  
  paper.display();

  ground.display();

  bin1.display();
     
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position,{x:95,y:-105});
	}
}
