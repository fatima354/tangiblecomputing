
let angle = 0;

let pinkflower;

function preload(){
pinkflower = loadImage('textures/pinkflower.jpg');
    
}
function setup() {
  createCanvas(400, 300, WEBGL);
}

function draw() {

   // let dx = mouseX - width / 2;
  // let dy = mouseY - height / 2;
  // let v = createVector(dx,dy,0);
//v.div(100);

ambientLight(255);
    //directionalLight(255,0,0,v);
    
  background(175);
  


rotateX(angle*0.1);
rotateY(angle*0.1);
rotateZ(angle*0.1);

 texture(pinkflower);
  noStroke();
plane(200,200);

  angle += 0.1;
}