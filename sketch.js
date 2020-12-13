var movingrec
var fixedrec





function setup() {
  createCanvas(800,400);
  
  movingrec=createSprite(200,200,100,100);
  fixedrec=createSprite(200,200,100,100);
}

function draw() {
  background("Orange");  
  drawSprites();
  movingrec.x= mouseX
  movingrec.y=mouseY

  console.log(movingrec.x - fixedrec.x)
  console.log(fixedrec.width/2 + movingrec.width/2)

  if(movingrec.x - fixedrec.x < fixedrec.width/2 + movingrec.width/2 &&
     fixedrec.x - movingrec.x < fixedrec.width/2 + movingrec.width/2 &&
      movingrec.y - fixedrec.y < fixedrec.width/2 + movingrec.width/2 &&
      fixedrec.y - movingrec.y < fixedrec.width/2 + movingrec.width/2){
      movingrec.shapeColor="red";
      fixedrec.shapeColor="red";
  }
  else{
    movingrec.shapeColor="green";
    fixedrec.shapeColor="green";
  }
}
