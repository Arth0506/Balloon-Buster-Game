var bow,bow_moving, background_image,redballoons,greenballoons,pinkballoons,blueballoons, redballoon_image, blueballoon_image, greenballoon_image, pinkballoon_image,
arrow_image, redballoonGroup, greenballoonGroup, blueballoonGroup, pinkballoonGroup, arrowGroup, score;



function preload(){
 //load your images here 
  bow_moving = loadImage("bow0.png");
  background_image = loadImage("background0.png");
  redballoon_image = loadImage("red_balloon0.png");
  blueballoon_image = loadImage("blue_balloon0.png");
  pinkballoon_image = loadImage("pink_balloon0.png");
  greenballoon_image = loadImage("green_balloon0.png");
  arrow_image = loadImage("arrow0.png");
  
}

function setup() {
  createCanvas(580, 550);
  
  //add code here
  scene = createSprite(0,0,580,550);
  scene.addImage("background", background_image);
  scene.scale = 3;
  scene.velocityX = -2;
  scene.x = scene.width /2;
  
  bow = createSprite(500,300,25,25);   
  bow.addImage("moving", bow_moving);
  bow.scale = 1.25;
  
  redballoonGroup = new Group();
  blueballoonGroup = new Group();
  greenballoonGroup = new Group();
  pinkballoonGroup = new Group();
  arrowGroup = new Group();
  
  
  score = 0;
  
}


function draw() {

  //add code here
  
  if(scene.x < 0){
    scene.x = scene.width /2;

  }
  
    
  
  bow.y = World.mouseY; 
  
  if(keyWentDown("space")){
      createArrow();
        }
    if(arrowGroup.isTouching(redballoonGroup)){
      score = score + 1;
      arrowGroup.destroyEach();
      redballoonGroup.destroyEach();
    }
    
      if(arrowGroup.collide(greenballoonGroup)){
      score = score + 3;
      arrowGroup.destroyEach();
      greenballoonGroup.destroyEach();
    }
    
      if(arrowGroup.collide(blueballoonGroup)){
      score = score + 5;
      arrowGroup.destroyEach();
      blueballoonGroup.destroyEach();
      
    }  
    
      if(arrowGroup.collide(pinkballoonGroup)){
      score = score + 10;
      arrowGroup.destroyEach();
      pinkballoonGroup.destroyEach();
      
    }
    
  
  var select_balloon = Math.round(random(1,4));
  
  
  if(World.frameCount % 100 == 0){
    if(select_balloon == 1){
      redBalloon();
      
    }
    else if(select_balloon == 2){
      blueBalloon();
      
    }
     else if(select_balloon == 3){
      greenBalloon();
      
    }
     else if(select_balloon == 4){
      pinkBalloon();
      
    }
  }
  
  drawSprites();
  textSize(20);
  text("Score: "+ score, 270,30);
}
function createArrow(){
  arrow = createSprite(360,100,5,10);
  arrow.velocityX = -6;
  arrow.scale = 0.3;
  arrow.addImage("arrow",arrow_image)
  arrow.y = bow.y;
  arrow.lifetime =55;
  arrowGroup.add(arrow);
    //temp_arrow.debug = true;
  arrowGroup.setColliderEach("rectangle",0,0,300,50)
   return arrow;
}
function redBalloon(){
  var redballoons = createSprite(0,Math.round(random(40,370)),10, 10);
  redballoons.addImage(redballoon_image);
  redballoons.velocityX = 3;
  redballoons.lifetime = 150;
  redballoons.scale = 0.1;
  redballoonGroup.add(redballoons);
  //redballoons.debug = true;
  //redballoonGroup.setColliderEach("circle",0,0,20)
}

function blueBalloon(){
var blueballoons = createSprite(0,Math.round(random(40,370)),10, 10);
  blueballoons.addImage(blueballoon_image);
  blueballoons.velocityX = 3;
  blueballoons.lifetime = 150;
  blueballoons.scale = 0.1;
  blueballoonGroup.add(blueballoons);
  //blueballoons.debug = true;
  //blueballoonGroup.setColliderEach("circle",0,0,20)
}

function greenBalloon(){
var greenballoons = createSprite(0,Math.round(random(40,370)),10, 10);
  greenballoons.addImage(greenballoon_image);
  greenballoons.velocityX = 3;
  greenballoons.lifetime = 150;
  greenballoons.scale = 0.1;
  greenballoonGroup.add(greenballoons);
  //greenballoons.debug = true;
  //greenballoonGroup.setColliderEach("circle",0,0,20)
}

function pinkBalloon(){
var pinkballoons = createSprite(0,Math.round(random(40,370)),10, 10);
  pinkballoons.addImage(pinkballoon_image);
  pinkballoons.velocityX = 3;
  pinkballoons.lifetime = 150;
  pinkballoonGroup.add(pinkballoons);
  //pinkballoons.debug = true;
  //pinkballoonGroup.setColliderEach("circle",0,0,20)
}