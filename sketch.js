var tom,tomImage1,tomImage2,tomImage3,tomImage4;
var jerry,jerryImage1,jerryImage2,jerryImage3,jerryImage4;
var garden,gardenImage;




function preload() {
    gardenImage=loadImage("images/garden.png");
    jerryImage1=loadAnimation("images/jerryOne.png"); 
     jerryImage2= loadAnimation("images/jerryTwo.png","images/jerryThree.png");
     jerryImage3=loadAnimation("images/jerryFour.png");
      tomImage1= loadAnimation("images/tomOne.png");
       tomImage2=loadAnimation("images/tomTwo.png","images/tomThree.png"); 
        tomImage3= loadAnimation("images/tomFour.png");
}

function setup(){
    createCanvas(1000,800);
    tom = createSprite(870, 600);
    tom.addAnimation("statue",tomImage1);
    tom.scale=0.2;
    jerry = createSprite(200, 600);
    jerry.addAnimation("standing",jerryImage1);
    jerry.scale=0.2;
}

function draw() {
    
    background(gardenImage);
    if(tom.x-jerry.x<(tom.width-jerry.width)/2){
        tom.addAnimation("tomLastImage",tomImage3);
        tom.changeAnimation("tomLastImage");
        tom.velocityX=0;
        jerry.addAnimation("jerryLastImage",jerryImage3);
        jerry.changeAnimation("jerryLastImage");
    }
    drawSprites();
}


function keyPressed(){
    if(keyCode===LEFT_ARROW){
        tom.velocityX=-5;
        tom.addAnimation("tomRunning",tomImage2);
        tom.changeAnimation("tomRunning");
        jerry.addAnimation("jerryTeasing",jerryImage2);
        jerry.changeAnimation("jerryTeasing");
    }


}
