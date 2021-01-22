
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
    rock = new Stone(200,400,20);
	
	
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

  groundObject.display();
}
