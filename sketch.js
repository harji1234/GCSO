var car
var wall
var speed;
var weight;

function setup() {
createCanvas(1200,400)
speed = random(55,90);
weight=random(400,1500)
car=createSprite(10,200,50,50)
car.velocityX=speed
wall=createSprite(1000,200,60,height/2);
wall.shapeColor= "cyan"
}

function draw () {
  background("black");
  console.log(wall.x);
  console.log(wall.x);
  if(wall.x - car.x < (car.width/2+wall.width/2)){
    car.velocityX = 0;
    var deformation = (0.5* weight* speed* speed)/22500;
    if(deformation>180)
          {
             car.shapeColor=color(255, 0, 0);
         }
         else  if(deformation<180 && deformation>100)
          {
                car.shapeColor = color(230, 230, 0);
          }
           else  if(deformation<100)
          {
                car.shapeColor = color(0, 255, 0);
          }
        
  }
  drawSprites();
}