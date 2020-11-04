  var bg,bow,red,pink,green,blue,arrow;
  var bgImage,bowImage,redImage,greenImage,blueImage,pinkImage;



function preload()
{
 //loaded image here
  bgImage = loadImage("background0.png");
  bowImage = loadImage("bow0.png");
  redImage = loadImage("red_balloon0.png");
  pinkImage = loadImage("pink_balloon0.png");
  greenImage = loadImage("green_balloon0.png");
  blueImage = loadImage("blue_balloon0.png");
  arrowImage = loadImage("arrow0.png")
}

function setup() 
//createing Background,bow and balloon.
{
  createCanvas(600, 600);
  bg = createSprite(200,200,400,600);
  bg.addImage("bg",bgImage);
  bg.x = bg.width /2;
  bg.scale = 2
  
  bow = createSprite(400,250,25,100);
  bow.addImage(bowImage);
  bow.scale = 1;

  
}
function draw() 
{
redBalloon();
//pinkBalloon();
  
bg.velocityX = -3;
  
  if(bg.x < 0){
    bg.x = bg.width/2;
  }
  
//making bow move
bow.y = World.mouseY

if(keyDown("space")){
 var temp_arrow = createArrow();
  temp_arrow.addImage(arrowImage);
  temp_arrow.y = bow.y;                                       
}
 drawSprites();  
}

function createArrow(){
  arrow = createSprite(360,100,5,10);
  arrow.velocityX = -6;
  arrow.scale=0.3;
  arrow.lifetime = 100 ;  
  return arrow;
}
function redBalloon() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
  var red = createSprite(0,Math.round(random(20,370)),10,10);
    red.addImage(redImage);
    red.velocityX = 3;
    red.lifetime = 150;
    red.scale = 0.1; 
}
}
//  function pinkBalloon() {
  //write code here to spawn the clouds
  //if (frameCount % 60 === 0) {
 // var red = createSprite(0,Math.round(random(20,370)),10,10);
  //  pink.addImage(pinkImage);
   // pink.velocityX = 4;
   // pink.lifetime = 150;
//pink.scale = 1.2; 
//}
//}





