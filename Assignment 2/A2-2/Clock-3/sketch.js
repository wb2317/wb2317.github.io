 function setup() {
   createCanvas(480, 500);
   angleMode(DEGREES);
   rotate(-90)
 }

 function draw() {
   background(204);   

   var h = hour();
   var m = minute();
   var s = second();
  
   strokeWeight();
   fill(255,0,0,150)//red
   arc1 = map(s, 0, 60, 0, 360);
   triangle(width/2, height/2, 300, 250, 0, arc1); 


   fill(255, 255, 0,150);//yellow
   arc2 = map(m, 0, 60, 0, 360);
   triangle(width/2, height/2, 280, 250, 0, arc2);


   fill(0, 0, 250,150);//blue
   arc3 = map(h, 0, 12, 0, 360);
   triangle(width/2, height/2, 260, 250, 0, arc3);
  
   fill(255);
   noStroke();
   text('TIME :\n'+ h + ':' + m + ':' + s, 160,50);

 }
