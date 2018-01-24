function setup() {
  createCanvas(500, 500);
  background('rgba(0,255,0, 0.25)');
}

function draw() {
  //head
  fill(252,252,252);
  stroke(252,252,252);
  ellipseMode(CENTER);
  ellipse(250,150,220,150);
  //righteye
  fill(0,0,0);
  stroke(0,0,0);
  ellipse(mouseX+200,mouseY+150,30,30);
  //lefteye
  fill(0,0,0);
  ellipse(mouseX+300,mouseY+150,30,30);
  //line between left and right eye
  fill(0,0,0);
  strokeWeight(2); 
  line(200,150,300,150);
  //leftblush
  fill(255,201,160);
  stroke(255,201,160);
  ellipse(mouseX+180,mouseY+180,20,10);
  //rightblush
  fill(255,201,160);
  stroke(255,201,160);
  ellipse(mouseX+320,mouseY+180,20,10);
  //body
  fill(252,252,252);
  stroke(252,252,252);
  ellipse(mouseX+250,mouseY+400,380,400);
  //port
  fill(252,252,252);
  stroke(0,0,0);
  ellipse(mouseX+340,mouseY+300,50,50);
  line(317,300,330,300);
  line(330,300,330,290);
  line(330,290,350,290);
  line(350,290,350,300);
  line(350,300,365,300);
  //text
  fill(252,252,252);
  textSize(25)
  text("Hello World!",340,100);
 }
 


