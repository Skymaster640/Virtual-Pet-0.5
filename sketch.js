//Create variables here
var dog;
var happyDog;
var database;
var foodS;
var foodStock;
var dogImg;

function preload()
{
  //load images here
  dogImg = loadImage("Dog.png");
  happyDog = loadImage("happydog.png");
}

function setup() {
  database = firebase.database();
	createCanvas(500, 500);
  dog = createSprite(250,350,10,10);
  dog.addImage(dogImg);

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }

  drawSprites();
  //add styles here
  textSize(30);
  fill("black");
  stroke("black");
  text(foodStock);

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){


  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }


  database.ref('/').update({
    food:x
  })

}