


var video;
function setup() { 
 createCanvas(320,240); 
  canvas.parent('p5container')
  background(51);
 video = createCapture(VIDEO);
    video.size(320,240); 
video.hide();}
    
function draw() { 
    tint('hotpink')
    image(video,mouseX,0);
}