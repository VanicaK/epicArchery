const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var playerBase,player;
var computerBase,computer;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
  playerBase=new PlayerBase(200,(3*height)/4,200,350);
  computerBase=new ComputerBase(width-200,(3*height)/4,200,350);

  player=new Player(200,3*height/4-225,150,200);
  computer=new ComputerPlayer(width-200,3*height/4-225,150,200);

 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
  playerBase.display();
  computerBase.display();

   //display Player and computerplayer
  player.display();
  computer.display();

}
