var helicopter,helicopterImage,packageImage,ground,packageBody
var engine,world,rectBody,pack



const World= Matter.World; //namespacing
const Engine = Matter.Engine //namespacing
const Bodies = Matter.Bodies

var engine,world;
var rectBody;
var packageImage



function setup(){
createCanvas(1600,1600)

engine = Engine.create();
  world = engine.world;

  ground = createSprite(600,600,90000,5)
ground.shapeColor = "red"

helicopter = createSprite(166,59,100,50)
helicopter.shapeColor = "white"

var packageImageOptions = {
    isStatic:true
  }
packageImage = Bodies.rectangle(200,390,200,20,packageImageOptions)


var options = {
    isStatic:true
 
  } //json format
  circleBody = Bodies.circle(200,100,50,options);
  World.add(world,circleBody);
  console.log(rectBody);
}

function draw(){
background("grey")

  Engine.update(engine);
  

if (keyDown("DOWN_ARROW")) {
 Matter.Body.setStatic(packageImage,false)
  
}



drawSprites()
}
