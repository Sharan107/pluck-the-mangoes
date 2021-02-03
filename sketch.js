
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1060,100,30);
	mango2= new mango(1200,150,25);
	mango3= new mango(930,230,30);
	mango4= new mango(1050,250,35);
	mango5= new mango(990,170,30);
	mango6= new mango(1070,180,28);
	mango7= new mango(1250,220,30);
	mango8= new mango(1150,200,25);
	mango9= new mango(900,150,26)
	mango10= new mango(1000,50,35)
	mango11= new mango(1130,50,30)
	
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
  rock = new Stone(240,415,40);
  rope= new Attachment(rock.body,{x:240,y:415});
	
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  rock.display();
  rope.display();

  detectCollision(rock,mango1)
  detectCollision(rock,mango2)
  detectCollision(rock,mango3)
  detectCollision(rock,mango4)
  detectCollision(rock,mango5)
  detectCollision(rock,mango6)
  detectCollision(rock,mango7)
  detectCollision(rock,mango8)
  detectCollision(rock,mango9)
  detectCollision(rock,mango10)
  detectCollision(rock,mango11)


  groundObject.display();
}

function mouseDragged(){
   Body.setPosition(rock.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  rope.fly();
}

function detectCollision(stone,mango){
stonepos=stone.body.position;
mangopos=mango.body.position;

var distance=dist(stonepos.x,stonepos.y,mangopos.x,mangopos.y);

if(distance<=mango.r+stone.r){
  Body.setStatic(mango.body,false);
}
}

function keyPressed(){
  if (keyCode===32){
    Body.setPosition(rock.body,{x:240,y:415});
    rope.attach(rock.body);
  }
}
