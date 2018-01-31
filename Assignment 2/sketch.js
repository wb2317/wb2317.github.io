 function setup() {
   createCanvas(480, 480);
   angleMode(DEGREES);
 }

 function draw() {
   background(204);   
   

   var h = hour();
   var m = minute();
   var s = second();
  
   noStroke();
   fill(255,0,0,150)
   arc1 = map(s, 0, 60, 0, 360);
   arc(width/2, height/2, 300, 300, 0, arc1); 


   fill(255, 255, 0,150);
   arc2 = map(m, 0, 60, 0, 360);
   arc(width/2, height/2, 280, 280, 0, arc2);


   fill(0, 0, 250,150);
   arc3 = map(h, 0, 12, 0, 360);
   arc(width/2, height/2, 260, 260, 0, arc3);
  
   fill(255);
   noStroke();
   text('The time right now is :\n'+ h + ':' + m + ':' + s, 160,50);

 }
