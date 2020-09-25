
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var box1,box2,box3;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();		
	world = engine.world;

	box1= new Box(1200,height-20,200,20);
	box2= new Box(1100,height-60,20,100);
	box3= new Box(1300,height-60,20,100);

	ground = new ground(800,height,1600,20)
  ball = new Ball(200,450,40);
    var render = Render.create({ 
      element: document.body, engine: engine,
      options: { width: 1200, height: 700, wireframes: false } 
       });
	Engine.run(engine);
} 


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(0);
  drawSprites();
  ground.display();
  ball.display();
  box1.display();
  box2.display();
  box3.display();

 

}

function keyPressed() {

   if(keyCode === UP_ARROW) {
	  
	  Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
   }

}

