var mapa,mapaimg
var zumcalvo,zumcalvoimg
var jose,joseimg
function preload(){


joseimg = loadImage("New Piskel (5).png")
mapaimg = loadImage("New Piskel (2).png")


}

function setup(){
  createCanvas(windowWidth,windowHeight);

jose = createSprite(750,350,10,10)
jose.addImage("jose",joseimg)
jose.scale = 5
jose.debug = true
}

function draw() {
  background(mapaimg);
    KeyControls()

    drawSprites();
}

function KeyControls() {
  if(keyCode === 32){
    jose.VelocityY = jose.VelocityY + 1
    console.log("funfou")
}
}