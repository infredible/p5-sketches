var r, g, b




function setup() {
  var color1 = color(170,174,157);
  var color2 = color(248,247,207);
  var color3 = color(247,185,139);
  var color4 = color(123,87,86);
  var color5 = color(35,33,38);

  var colors = [color1, color2, color3, color4, color5];

  createCanvas (window.innerWidth, window.innerHeight);
  background(color5);

  for (i = 0; i < 8; i++) {
    var rectWidth = 100;
    var rectHeight =100;
    var selectColor = random(5);


    var randomColor = colors[selectColor];
    fill(randomColor);

    rect(800,800,rectWidth,rectHeight);

  }




}


function draw() {


}
