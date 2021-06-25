var balloon,balloonImage1,balloonImage2;
var dataBase; 
var locLoon;
var height;
var texty = "-_- Use arrows to wander around.";

// create database and position variable here

function preload(){

   backSky = loadImage("BackWorkSky.png");
   loonImage = loadAnimation("HotAirBalloon.png","HotAirBalloon.png","HotAirBalloon.png","HotAirBalloon.png","HotAirBalloon.png","HotAirBalloon.png","HotAirBalloon.png","HotAirBalloon.png","HotAirBalloon.png","HotAirBalloon2.png","HotAirBalloon2.png","HotAirBalloon2.png","HotAirBalloon2.png","HotAirBalloon2.png","HotAirBalloon2.png","HotAirBalloon2.png","HotAirBalloon2.png","HotAirBalloon2.png");

  }

//Function to set initial environment
function setup() {

  dataBase = firebase.database();

  createCanvas(1276,640);

  locLoon  = dataBase.ref("loon/height");
  locLoon.on("value",readPos,showErr);

  balloon = createSprite(250,450,150,150);
  balloon.addAnimation("excitingRide",loonImage);
  balloon.scale = 0.2;

}

// function to display UI
function draw() {

  background(backSky);

  if(keyDown(LEFT_ARROW)){

    balloon.x += -5

  }
  else if(keyDown(RIGHT_ARROW)){

    balloon.x += 5;
  }
  else if(keyDown(UP_ARROW)){

    balloon.y -= 5;
  }
  else if(keyDown(DOWN_ARROW)){

    balloon.y -= -5;
  }

  drawSprites();

  fill("#fbee00");
  textSize(20);
  text(texty,40,40);
  noFill();

}

function readPos(data){

height = data.val();
balloon.x = height.x;
balloon.y = height.y;

}

function showErr(){

console.log("error");

}