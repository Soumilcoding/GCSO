var car,car2,car3,wall

var line1,line2

var speed,weight

function setup() {
  createCanvas(1600,400);
car = createSprite(50, 150, 50, 25);
car2 = createSprite(50, 310, 50, 25);
car3 = createSprite(50, 45, 50, 25);

line1 = createSprite(200,95,1500,10);
line1.shapeColor = color("white");

line2 = createSprite(200,230,1500,10);
line2.shapeColor = color("white");

wall = createSprite(900,200,20,400);
wall.shapeColor = color(80,80,80);

speed1 = random(55,90);
speed2 = random(55,90);
speed3 = random(55,90);

weight = random(400,1500);

}

function draw() {
  background("black");
  
 car.velocityX = speed1;
 car2.velocityX = speed2;
 car3.velocityX = speed3;


 if(wall.x-car.x < (car.width + wall.width/2)){

  car.velocityX = 0;
  var deformation = 0.5 * weight * speed1 * speed1/22509;

  if(deformation>180){
  car.shapeColor=color(255,0,0);
  }

  if(deformation<180 && deformation>100){
  car.shapeColor=color(230,230,0);
  }

  if(deformation<100){
  car.shapeColor=color(0,255,0);
  }
  }

  if(wall.x-car2.x < (car2.width + wall.width/2)){

    car2.velocityX = 0;
    var deformation2 = 0.5 * weight * speed2 * speed2/22509;
  
    if(deformation2>180){
    car2.shapeColor=color(255,0,0);
    }
  
    if(deformation2<180 && deformation2>100){
    car2.shapeColor=color(230,230,0);
    }
  
    if(deformation2<100){
    car2.shapeColor=color(230,230,0);
    }
    }

    if(wall.x-car3.x < (car3.width + wall.width/2)){

    car3.velocityX = 0;
    var deformation3 = 0.5 * weight * speed3 * speed3/22509;
    
    if(deformation3>180){
    car3.shapeColor=color(255,0,0);
    }
    
    if(deformation3<180 && deformation3>100){
    car3.shapeColor=color(230,230,0);
    }
    
    if(deformation3<100){
    car3.shapeColor=color(230,230,0);
    }
    }

  drawSprites();
}