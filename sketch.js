var fixedRect,movingRect, rect1, rect2;

function setup() {
  createCanvas(800,400);

  fixedRect = createSprite(300, 200, 50, 20)
  movingRect = createSprite(100, 200, 70, 30)
  rect1 = createSprite(400, 290, 50, 20)
  rect2 = createSprite(400, 100, 60, 30)

  fixedRect.shapeColor = "green"
  movingRect.shapeColor = "green"

  fixedRect.velocityX = -4
  movingRect.velocityX = 5
  rect1.velocityY = -4
  rect2.velocityY = 4
 
}

function draw() {
  background(0);  
  console.log(movingRect.x - fixedRect.x)
  if (isTouching(rect1, rect2)){
    rect1.shapeColor = "red"
    rect2.shapeColor = "red"
  }else{
    rect1.shapeColor = "green"
    rect2.shapeColor = "green"
  }
  bounce(movingRect, fixedRect)
  
  

  drawSprites();
}

function bounce(o1, o2){
  if (o1.x - o2.x < o1.width/2 + o2.width/2 &&
    o2.x - o1.x < o1.width/2 + o2.width/2 ){

     o2.velocityX = o2.velocityX * (- 1)
     o1.velocityX = o1.velocityX * (- 1)

    }
      
 if (o1.y - o2.y < o1.height/2 + o2.height/2 &&
   o2.y - o1.y < o1.height/2 + o2.height/2){

     o2.velocityY = o2.velocityY * (- 1)
      o1.velocityY = o1.velocityY * (- 1)
  }
}