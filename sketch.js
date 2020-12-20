var car, wall;
var speed, weight;


function setup() {
  createCanvas(1600,400);
  
  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50,200,50,50);
  car.debug = true;
  wall = createSprite(1500,800,400,1600);
  wall.debug = true;

}

function draw() {
  background("red");  



  car.velocityX = speed;
  

  if(wall.x - car.x < (wall.width + car.width)/2){
    car.velocityX = 0;
    var deformation = (0.5*weight*speed*speed)/22500;

    if(deformation > 180){
      car.shapeColor = "red";
    }
    if(deformation > 99 && deformation < 181){
      car.shapeColor = "yellow";
    }
    if(deformation < 100){
      car.shapeColor = "green";
    }
  }

  drawSprites();
}