
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer, stone, rubber, ground, sand1, sand2, sand3, sand4, sand5, sand6, sand7, sand8, sand9, sand10, iron;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600, height-10, 1200, 10 );
	
	hammer = new Hammer(100,100, 100, 40);

	stone = new Stone(100, 500, 60, 60);

	rubber = new Rubber(1000, 500, 40);

	sand1 = new Sand(100,500, 10);
	sand2 = new Sand(150,500, 10);
	sand3 = new Sand(200,500, 10);
	sand4 = new Sand(250,500, 10);
	sand5 = new Sand(300,500, 10);
	sand6 = new Sand(350,500, 10);
	sand7 = new Sand(400,500, 10);
	sand8 = new Sand(450,500, 10);
	sand9 = new Sand(500,500, 10);
	sand10 = new Sand(550,500, 10);

	iron = new Iron(1000,500, 70,60);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  ground.display();
  hammer.display();
  stone.display();
  rubber.display();
  
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  sand10.display();
  iron.display();

  drawSprites();
 
}



