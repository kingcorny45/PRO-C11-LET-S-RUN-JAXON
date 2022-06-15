var runner
var runnerAnimation
var power
var powerimg
var path
var eg
var egimg
var coin
var coinimg
var bomb
var bombimg
var pathimg
var xs,ys
function preload(){
  runnerAnimation = loadAnimation("Runner-1.png","runner-2.png")
  powerimg = loadImage("power.png")
  bombimg = loadImage("bomb.png")
  coinimg = loadImage("coin.png")
  egimg = loadImage("energyDrink.png")
  pathimg = loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200)
  path.addImage(pathimg)
  path.velocityY = 4
  path.scale = 1.2
  runner = createSprite(200,300)
  runner.addAnimation("running",runnerAnimation)
  runner.scale = 0.1
  xs = createSprite(-50,300)
  ys = createSprite(450,300)
  
  
}

function draw() {
  runner.x = mouseX
  runner.y = 300
  runner.collide(xs)
  runner.collide(ys)
  background(0);
  if(path.y>400){
    path.y = height/2
  }
  drawSprites()
}
