var stage;
var SIZE = 50;
		
function init() {
  //resize canvas to full width and height
  var canvas = document.getElementsByTagName('canvas')[0];
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  stage = new createjs.Stage("canvas");
  
  addCircle(canvas.width/2 - (SIZE * 2.5), canvas.height/2, SIZE, "#e74c3c");
  addStar(canvas.width/2, canvas.height/2, SIZE, "#f1c40f");
  addRoundedSquare(canvas.width/2 + (SIZE * 2.5), canvas.height/2, SIZE * 2, 5, "#9b59b6");

  stage.update();
}

function addCircle(x, y, r, fill) {
  var circle = new createjs.Shape();
  circle.graphics.beginFill(fill).drawCircle(0, 0, r);
  circle.x = x;
  circle.y = y;
  circle.name = "circle";
  circle.on("pressmove",drag);
  stage.addChild(circle);
}

function addStar(x, y, r, fill) {
  var star = new createjs.Shape();
  star.graphics.beginFill(fill).drawPolyStar(0, 0, r, 5, 0.6, -90);
  star.x = x;
  star.y = y;
  star.name = "star";
  star.on("pressmove",drag);
  stage.addChild(star);
}

function addRoundedSquare(x, y, s, r, fill) {
  var square = new createjs.Shape();
  square.graphics.beginFill(fill).drawRoundRect(0, 0, s, s, r);
  square.x = x - s/2;
  square.y = y - s/2;
  square.name = "square";
  square.on("pressmove",drag);
  stage.addChild(square);
}

function drag(evt) {
  // target will be the container that the event listener was added to
  if(evt.target.name == "square") {
    evt.target.x = evt.stageX - SIZE;
    evt.target.y = evt.stageY - SIZE;
  }
  else  {
    evt.target.x = evt.stageX;
    evt.target.y = evt.stageY;
  }

  // make sure to redraw the stage to show the change
  stage.update();   
}