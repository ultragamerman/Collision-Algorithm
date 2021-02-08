var object7, object8,object3,object4,object5,object6;

function setup() {
  createCanvas(1200,800);
  object7 = createSprite(400,200,80,30);
  object7.shapeColor = "green";
  object7.debug = true;
  object8 = createSprite(300,200,80,30);
  object8.shapeColor = "green";
  object8.debug = true;
  object3 = createSprite(200,200,80,30);
  object3.shapeColor = "green";
  object3.debug = true;
  object4 = createSprite(100,200,80,30);
  object4.shapeColor = "green";
  object4.debug = true;
  object5 = createSprite(500,200,80,30);
  object5.shapeColor = "green";
  object5.debug = true;
  object6 = createSprite(600,200,80,30);
  object6.shapeColor = "green";
  object6.debug = true;
}

function draw() {
  background(0,0,0);  
  object7.x = World.mouseX;
  object7.y = World.mouseY;
  isTouching(object7,object8);
  drawSprites();
}
