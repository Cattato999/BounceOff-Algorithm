var fixedRect, movingRect;

function setup() {
  createCanvas(1600,1200);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "GREEN";
  movingRect = createSprite(400, 300, 50, 50);
  movingRect.shapeColor = "BLUE";
}

function draw() {
  background(255,255,255);  

  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;
  movingRect.velocityY = -5;
  fixedRect.velocityY = 5;
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2&&
  fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2&&
    movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2&&
    fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
    fixedRect.shapeColor = "RED";
    movingRect.shapeColor = "RED";
  }else{
    fixedRect.shapeColor = "GREEN";
    movingRect.shapeColor = "BLUE";         

  }
  
  bounceOff(movingRect, fixedRect);
  
  drawSprites();
}

