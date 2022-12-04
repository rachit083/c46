var ball, blocks, obstacles

function setup(){
  createCanvas(500, 500);
  ball = createSprite(250, 450, 20, 20);
  ball.velocityX = 5;
  ball.velocityY = -4;
  edges = createEdgeSprites();
  
  createBlocks(50, 5);
  createBlocks(75, 4);
  createBlocks(100,3);
  createBlocks(125, 2);
  createBlocks(150, 1);
  
}

function draw(){
  background(ball.x, ball.y, ball.x);

  ball.bounceOff(edges);
 
  



  drawSprites();
}

function createBlocks(y, num){
  for(i=1; i<=num; i=i+1){
    blocks= createSprite(100+i*40, y, 20, 20);
    blocks.velocityY = 0.5
  }
}