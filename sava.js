var c = document.getElementById("sava-canvas");
var ctx = c.getContext("2d");


// Starting Values
var w = c.width = window.innerWidth;
var h = c.height = window.innerHeight;
var x = w/2;
var y = h/2;
var radiusStart = 100;
var radiusIncrement = radiusStart*.66;
var lineWeight = radiusStart*.1;
var r = radiusStart + radiusIncrement;

// Draw Grey Lines
for (let i = 1; i < 5; i++) {
	r = radiusStart + (radiusIncrement * i);
	drawWebLine(x, y, r, 'grey', lineWeight);
}
var rmax = (radiusStart + (radiusIncrement * 3)) * 2;
drawWebLine(x + rmax, y, r * 1.53, 'grey', lineWeight);
drawWebLine(x - rmax, y, r * 1.53, 'grey', lineWeight);
drawWebLine(x, y + rmax, r * 1.53, 'grey', lineWeight);
drawWebLine(x, y - rmax, r * 1.53, 'grey', lineWeight);

// Draw Rings
ctx.save();
ctx.translate(x, y);
r = radiusIncrement - (radiusIncrement/1.7);
drawWebRing(0, 0, r, 1);
ctx.font = "48px sans-serif";
ctx.textBaseline = "middle";
ctx.strokeText("Z", -15, 2);
for (let i = 1; i <= 16; i++) {
	for (let j = 1; j <= 4; j++) {
		drawWebRing(0, radiusStart + (radiusIncrement * j), r, i);
	}
	ctx.rotate((Math.PI/180) * 22.5);
}
ctx.rotate((Math.PI/180) * 45);
for (let i = 1; i <= 4; i++) {
	drawWebRing(0, radiusStart * .55, r, i);
	ctx.rotate((Math.PI/180) * 90);
}
ctx.restore();


// Draw Black Lines
x = w/2;
y = h/2;
var r = 0;
for (let i = 1; i < 5; i++) {
	var r = radiusStart + (radiusIncrement * i);
    drawWebLine(x, y, r, 'black', lineWeight/2);
}
rmax = (radiusStart + (radiusIncrement * 3)) * 2;
drawWebLine(x + rmax, y, r * 1.53, 'black', lineWeight/2);
drawWebLine(x - rmax, y, r * 1.53, 'black', lineWeight/2);
drawWebLine(x, y + rmax, r * 1.53, 'black', lineWeight/2);
drawWebLine(x, y - rmax, r * 1.53, 'black', lineWeight/2);


// --------------------------------------
// FUNCTION CALLS
function drawWebLine(x, y, r, color, width) {
    ctx.beginPath();
	ctx.lineWidth = width;
	ctx.strokeStyle = color;
	ctx.arc(x, y, r, 0, Math.PI * 2);
	ctx.stroke();
};

function drawWebRing(x, y, r, canvasOffset) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.strokeStyle = 'grey';
    ctx.lineWidth = lineWeight/3;
    ctx.stroke();
};

function drawRingsForDirection(direction, skew) {
	for (let i = 1; i <= 4; i++) {
      x = w/2;
      y = h/2 + radiusStart + (radiusIncrement * i);
      r = radiusIncrement - (radiusIncrement/1.7);
      drawWebRing(x, y, r);
  }
};
