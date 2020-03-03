let shapeList = [];
let pos = 0;
let value = 0;
let timer = 0;
let S_KEY = 83;

function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
}

function draw() {
  background(128, 128, 128);
  for( let i = 0; i < pos; i++ ){
    shapeList[i].move();
    shapeList[i].display();
    shapeList[i].changeSize();
  }

  if( (mouseX  < 500 && mouseX > 300) && (mouseY < 500 && mouseY > 300)){
    if( (timer != 0) && (timer % 2 == 0) && (mouseX  < 500 && mouseX > 300) && (mouseY < 500 && mouseY > 300)){
      shapeList[pos] = new RectShape();
      pos++;
      timer = 0;
    }
  }

  if( frameCount % 30 == 0){
    timer++;
  }
}

function mouseClicked(){
  shapeList[pos] = new CircleShape();
  pos++;
}


function keyPressed(){
  if( keyCode == S_KEY){
    saveCanvas( "ArtSnapshot", "png");
  }
}


class RectShape{
  constructor() {
    this.degStart = map( random(0, 10), 0, 10, 0, 10);
    this.degreeSpeed = map( random(0, 10), 0, 10, -5, 5);
    this.rectColor = random(0, 255);
    this.dim = random(1, 800);
    this.bool = true;
    this.resizeSpeed = random(0, 10);
  }

  move() {
    this.degStart+=this.degreeSpeed;
  }

  display() {
    push();
    translate (width/2,height/2);
    rotate (radians (this.degStart));
    stroke( 255, 165, this.rectColor);
    noFill();
    rect (0, 0,this.dim,this.dim);
    pop();
  }

  changeSize(){
    if( this.bool == true){
      this.dim = this.dim - this.resizeSpeed;
      if( this.dim < 0){
        this.bool = false;
      }
    }

    if( this.bool == false){
      this.dim = this.dim + this.resizeSpeed;
      if( this.dim > 800){
        this.bool = true;
      }
    }
  }
}


class CircleShape {
  constructor() {
    this.degStart = map( mouseY, 0, height, 0, 10);
    this.degreeSpeed = map( mouseX, 0, width, -5, 5);
    this.lineColor = random(0, 255);
    this.dim = random(0, 100);
    this.distFromCenter = random(0, 400);
    this.circleColor = random( 0, 255);
  }

  move() {
    this.degStart+=this.degreeSpeed;
  }

  display() {
    push();
    translate (400,400);
    rotate (radians (this.degStart));
    fill( 0, this.circleColor, 255);
    ellipse (this.distFromCenter, this.distFromCenter,this.dim,this.dim);
    stroke(this.lineColor, 0, 255);
    line(400, 400, 50, 50);
    pop();
  }

  changeSize(){
    //DO NOTHING
  }
}
