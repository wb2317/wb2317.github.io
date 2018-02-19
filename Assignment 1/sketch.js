function setup() {
  createCanvas(500, 500);
}

function draw() {
  background('yellow');

   var h = hour();
   var m = minute();
   var s = second();

   var t = map(s,0,500,0,500)
  //head
  //fill(252,252,252);
  //stroke(0);
  //ellipseMode(CENTER);
  //ellipse(s+50,s+50,50,50);

  //righteye
  fill(0,0,0);
  stroke(0,0,0);
  ellipse(s+100,150,30,30);

  //lefteye
  fill(0,0,0);
  ellipse(s+100,0,width,0);
  //line between left and right eye
  fill(0,0,0);
  strokeWeight(2); 
  line(s+100,150,400,150);

  
  //leftblush
  //fill(255,201,160);
  //stroke(255,201,160);
  //ellipse(s,180,20,10);
  //rightblush
  //fill(255,201,160);
  //stroke(255,201,160);
  //ellipse(s,180,20,10);
  //body
  fill(252,252,252);
  stroke(s,252,252);

  ellipse(250,400,380,400);
  //port
  fill(252,252,252);
  stroke(0,0,0);
  ellipse(340,300,50,50);
  line(317,300,330,300);
  line(330,300,330,290);
  line(330,290,350,290);
  line(350,290,350,300);
  line(350,300,365,300);
  //text
  fill(252,252,252);
  textSize(10);


  text('"Hello World" hour:\n'+ h,340,80);
  text('minute: \n' + m, 340, 120) 
  angleMode(DEGREES);
  rotate(map(second(), 0, 60, 0, 360));
 }
 
 


