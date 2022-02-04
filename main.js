function preload(){ 

}

function setup(){
   canvas = createCanvas(350, 350);
   canvas.center();
   camera1 = createCapture(VIDEO);
   camera1.hide();
   red = "255";
   blue = "0";
   green = "139";
}

function draw(){
   image(camera1, 0, 0, 350, 350);
   fill(red, green, blue);
   stroke(red, green, blue);
   rect(5, 10, 10, 330)
   fill(red, green, blue);
   stroke(red, green, blue);
   rect(5, 5, 337, 10)
   fill(red, green, blue);
   stroke(red, green, blue);
   rect(332, 10, 10, 330)
   fill(red, green, blue);
   stroke(red, green, blue);
   rect(5, 330, 337, 10)
}

function apply_filter1(){
    red = document.getElementById("input1").value;
    green = document.getElementById("input2").value;
    blue = document.getElementById("input3").value;
}

function take_snapshot(){
    save("myImg.png");
}