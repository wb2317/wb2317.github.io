var headlines = [];
var hitwords = [
  "could",
  "or",
  "the",
  "on",
  "a",
  "an",
  "in",
  "into",
  "of",
  "for",
  "from",
  "you",
  "out",
  "both",
  "can"
];



function preload() {

  // Assemble url for API call
  var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
  var apikey = "458896467f0048b7a1ecc61cd02f52ac"; // see: https://developer.nytimes.com
  url += "?api-key=" + apikey;

  nytResponse = loadJSON(url);
  // loadJSON() is asynchronous, but calling it inside preload() guarantees
  // we'll have a response before setup() and draw() is run.
}

function setup() {
  createCanvas(600,800);
  background(255);
  frameRate(20);

  textSize(15);
  textAlign(LEFT);
  
 

  extractHeadlines();
}

function draw() {
  
  textSize(15);

  var d = floor(random(255));
  var e = floor(random(255));
  var f = floor(random(255));

  var lineheight = 24;
  var rectheight = 8;
  var margin = 13;
  translate(margin, margin);

  background(255);
  fill(0)
  rect(mouseX,mouseY,100,30);

  
  

  for (var i = 0; i < headlines.length; i++) {

    

    var words = split(headlines[i], ' ');

    // console.log(words);

  
    var nextX = 0;

    
    for (var j = 0; j < words.length; j++) {
      if (hitwords.includes(words[j].toLowerCase())) {
        fill(f,d,e);
        textSize(15); 
        strokeWeight(20);
        stroke("yellow");

      } else {
        fill(255);
        textSize(13)
        noStroke();
      }

      text(words[j]+' ', nextX, i*lineheight);
      nextX += textWidth(words[j]+' ');

    }
  }
}


function extractHeadlines() {

  // console.log(nytResponse); // take a look at the full API response structure

  for (var i = 0; i < nytResponse.results.length; i++) {
    var h = nytResponse.results[i].title;

   
    
    append(headlines, h);

    
  }


  // console.log(headlines); // make sure counted data looks as expected
}