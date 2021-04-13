var helecopterIMG,helecopterSprite,packageSprite,packageIMG;
var packagebody,ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
    
    helecopterIMG=loadImage("helicopter.png")
    packageIMG=loadImage("package.png")
}

function setup() {
    createCanvas(800,700);
    rectMode(CENTER);
    packageSprite=createSprite(width/2,80,10,10);
    packageSprite.addImage(packageIMG)
    packageSprite.scale=0.2

    helecopterSprite=createSprite(width/2,200,10,10);
    helecopterSprite.addImage(helecopterIMG)
    helecopterSprite.scale=0.6

    


    groundSprite=createSprite(width/2,height-35,width,10);
    groundSprite.shapeColor=color(225)

    engine=Engine.create();
    world=engine.world;
    

   packagebody=Bodies.circle(width/2,200,5,{restution:04,isStatic:true});
   World.add(world,packagebody)
   

  ground=Bodies.rectangle(width/2,650,width,10,{isStatic:true});
  World.add(world,ground) ;
     Engine.run(engine);
}

boxPosition=width/2-100 ;
    box.Y=610;
    boxleftSprite=createSprite(boxPosition, boxY, 20,100);
    boxleftSprite.shapeColor=color(255,0,0);
    boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
     World.add(world, boxLeftBody);
     boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
     boxBase.shapeColor=color(255,0,0);
     boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
     World.add(world, boxBottomBody);
     boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
     boxleftSprite.shapeColor=color(255,0,0);
     boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
     World.add(world, boxRightBody);

function draw() {
    rectMode(CENTER);
    background(0);
    packageSprite.x=packagebody.position.x
    packageSprite.y=packagebody.position.y
    drawSprites();
}

function keyPressed() {
    
           if (keyCode === DOWN_ARROW) { 
               Matter.Body.setStatic(packageBody,false); 
               
        
        } 
        }
    
   
   