var video;
var snapshots = [];
var button;

function setup() {
  createCanvas(320, 240);
  background(51);
  video = createCapture(VIDEO);
  video.size(320, 240);
  button = createButton("snap");
  button.mousePressed(takesnap);
}

function takesnap() {
  snapshots.push(video.get());
}

function draw() {

  image(video, 0, 0);

}