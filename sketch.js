var bullet, wall,thickness,speed,weight;

function setup() {
  createCanvas(1600,800);
  thickness=random(22,83)
  speed=random(223,321)
  weight=random(30,52)
  wall = createSprite(1200, 200, thickness, height/2);
  wall.debug = true;
  bullet = createSprite(600,200,80,30);
  bullet.shapeColor = "green";
  bullet.velocityX = 3;
  bullet.debug = true;
}

function draw() {
  background(0,0,0);  
if(hasCollided(bullet,wall)){
  bullet.velocityX = 0
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
if(damage>10){
  wall.shapeColor = color(255,0,0)
}
if(damage<10){
  wall.shapeColor = color(0,255,0)
}
}
  drawSprites();
}
function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
return false
}