

var fixedRect, movingRect, object1, object2, G01 , G02;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  G01 = createSprite(100,100,50,50);
  G02 = createSprite(500,700,50,50);
  G01.shapeColor = "blue";
  G02.shapeColor = "blue";
  G02.x = World.mouseX;
  G02.y = World.mouseY;
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  bounceOff(fixedRect,movingRect);
  G02.x = World.mouseX;
  G02.y = World.mouseY;
  if(isTouching(G01,G02)){
    G01.shapeColor = "black";
    G02.shapeColor = "black";
  }
  else{
    G01.shapeColor = "blue";
    G02.shapeColor = "blue";
  }
  drawSprites();
}

