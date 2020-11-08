var helicopterIMG, helicopterSprite, packageSprite,packageIMG;

var packageBody,ground,rect1, rect2, rect3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(600, 680, 10,10);
	//packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.21;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	rect1=createSprite(220,570,15,190);
	rect2=createSprite(600,570,15,190);
  rect3=createSprite(410,655,390,10);

  rect2.shapeColor=color('red');
  rect1.shapeColor=color('red');
  rect3.shapeColor=color('red');


	engine = Engine.create();
	world = engine.world;


	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 rect1 = Bodies.rectangle(220,570,15,190, {isStatic:true} );
	 World.add(world, rect1);
	 
	 rect2 = Bodies.rectangle( 600,570,15,190, {isStatic:true} );
	 World.add(world, rect2);
	 
	 rect3 = Bodies.rectangle(410,655,390,10, {isStatic:true} );
 	World.add(world, rect3);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  circle(packageBody.position.x,packageBody.position.y,20 );
  background(0);
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;
  
  

  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    
	Matter.Body.setStatic(packageBody,false);
	Matter.Body.setStatic(rect1,true);
	Matter.Body.setStatic(rect2,true);
	Matter.Body.setStatic(rect3,true);
	packageBody.restitution=0.84;

  }
}



