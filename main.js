song = "";

function preload(){
    song = loadSound("Courtesy Call.mp3");
}
function setup(){
    canvas = createCanvas(600,450);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,600,450);
}
function play(){
    song.play();
}
function stop(){
    song.stop();
}