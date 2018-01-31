 function setup() {
   createCanvas(480, 480);
   angleMode(DEGREES);
 }
   
 function draw() {
   background(204); 
   translate(200,200); 
   rotate(-90);

   let h = hour();
   let m = minute();
   let s = second();

   let arc1 = map(s, 0, 60, 0, 360);
   let arc2 = map(m, 0, 60, 0, 360);
   let arc3 = map(h, 0, 12, 0, 360);

   strokeWeight(10);

   push();
   stroke(255,0,0,150)
   rotate(arc1);
   line(0,0, 90,0)
   pop();


   push();
   stroke(255, 255, 0,150);
   rotate(arc2)
   line(0, 0, 70,0)
   pop();


   push();
   stroke(0, 0, 250,150);
   rotate(arc3)
   line(0, 0, 50,0)
   pop();

   point(width/2,height/2);
  
   fill(255);
   noStroke();
   rotate(90)
   text('The time right now is :\n'+ h + ':' + m + ':' + s, 120,50);

 }
