// --------------------------------------
// TOKEN POSITION CONFIGURATION
const tokenPositions = {
    "I4":"cold-matron"
   ,"H3":"cold-priestess-1"
   ,"J3":"cold-priestess-2"
   ,"H2":"cold-weapon-master-1"
   ,"J2":"cold-weapon-master-2"
   ,"I2":"cold-mage-1"
   ,"I3":"cold-mage-2"
   ,"H1":"cold-orc-1"
   ,"H4":"cold-orc-2"
   ,"G2":"cold-orc-3"
   ,"G3":"cold-orc-4"
   ,"G4":"cold-orc-5"
   ,"J1":"cold-orc-6"
   ,"J4":"cold-orc-7"
   ,"K2":"cold-orc-8"
   ,"K3":"cold-orc-9"
   ,"K4":"cold-orc-10"
   ,"A4":"hot-matron"
   ,"B3":"hot-priestess-1"
   ,"P3":"hot-priestess-2"
   ,"B2":"hot-weapon-master-1"
   ,"P2":"hot-weapon-master-2"
   ,"A2":"hot-mage-1"
   ,"A3":"hot-mage-2"
   ,"B1":"hot-orc-1"
   ,"B4":"hot-orc-2"
   ,"C2":"hot-orc-3"
   ,"C3":"hot-orc-4"
   ,"C4":"hot-orc-5"
   ,"P1":"hot-orc-6"
   ,"P4":"hot-orc-7"
   ,"O2":"hot-orc-8"
   ,"O3":"hot-orc-9"
   ,"O4":"hot-orc-10"
};



// --------------------------------------
// SAVA BOARD SETUP

// Set the canvas
const c = document.getElementById("sava-canvas");
const ctx = c.getContext("2d");
// const w = c.width = window.innerWidth;
// const h = c.height = window.innerHeight;
const w = c.width = 1000;
const h = c.height = 1000;
const mousdown = false;
const hasText = true;

// Function: Clear Canvas of any settings
function clearCanvas() {
    if (hasText) {
        ctx.clearRect(0,0,canvas.width, canvas.height);
        hasText = false;
    }
}

// Set center of the view port as origin
ctx.save();
ctx.translate(w/2, h/2);

// Set drawing variables
const radiusStart = h/10;
const radiusIncrement = radiusStart*.66;
const webLineWeight = radiusStart*.1;
let rmin = radiusIncrement - (radiusIncrement/1.7);
let rmax;

// Font and Lettering settings
ctx.font = `${rmin}px Ariel`;
ctx.textBaseline = "middle";
ctx.textAlign = "center";
const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));

// Set color palette
const COLOR_INNER_WEB = '#1f1f1f';
const COLOR_OUTER_WEB = '#878787';
const COLOR_COOL_PALE = '#0d41d1';
const COLOR_COOL_DARK = '#57a8d4';
const COLOR_HOT_PALE = '#d4172d';
const COLOR_HOT_DARK = '#d96d45';

// // Fill Canvas Background
// ctx.fillStyle = "black";
// ctx.globalCompositeOperation = 'destination-under';
// ctx.fillRect(-c.width, -c.height, c.width*2, c.height*2);

// Draw Bottom Web Lines
for (let i = 1; i < 5; i++) {
	rmin = radiusStart + (radiusIncrement * i);
	drawWebLine(0, 0, rmin, COLOR_OUTER_WEB, webLineWeight);
}
rmax = (radiusStart + (radiusIncrement * 3)) * 2;
drawSupportingWebLines(rmax, rmin, COLOR_OUTER_WEB, webLineWeight);

// Draw Outer Token Rings (A -> P)
rmin = radiusIncrement - (radiusIncrement/1.7);
for (let i = 1; i <= 16; i++) {
	for (let j = 1; j <= 4; j++) {
        rmax = radiusStart + (radiusIncrement * j);
        let ringColorFill = COLOR_INNER_WEB;
        let ringColorStroke = COLOR_OUTER_WEB;
        if (j!= 1) {
            if ([1,2,16].includes(i)) {
                ringColorStroke = COLOR_HOT_PALE;
            } else if ([3,15].includes(i)) {
                ringColorStroke = COLOR_HOT_DARK;
            } else if ([8,9,10].includes(i)) {
                ringColorStroke = COLOR_COOL_PALE;
            } else if ([7,11].includes(i)) {
                ringColorStroke = COLOR_COOL_DARK;
            } 
        }
		drawWebRing(0, rmax, rmin, ringColorFill, ringColorStroke, webLineWeight);
	}
	ctx.rotate((Math.PI/180) * 22.5);
}

// Draw Inner Token Rings (Q,R,S,T)
ctx.rotate((Math.PI/180) * 45);
for (let i = 1; i <= 4; i++) {
	drawWebRing(0, radiusStart * .55, rmin, COLOR_INNER_WEB, COLOR_OUTER_WEB, webLineWeight);
	ctx.rotate((Math.PI/180) * 90);
}
ctx.rotate((Math.PI/180) * -45);

// Draw Innmost Token Ring (Z)
drawWebRing(0, 0, rmin, COLOR_INNER_WEB, COLOR_OUTER_WEB, webLineWeight);

// Draw Top Web Lines
for (let i = 1; i < 5; i++) {
	rmin = radiusStart + (radiusIncrement * i);
    drawWebLine(0, 0, rmin, COLOR_INNER_WEB, webLineWeight/2);
}
rmax = (radiusStart + (radiusIncrement * 3)) * 2;
drawSupportingWebLines(rmax, rmin, COLOR_INNER_WEB, webLineWeight/2);

// Draw Outer Token Lettering (A -> P)
ctx.fillStyle = COLOR_OUTER_WEB;
ctx.strokeStyle = COLOR_OUTER_WEB;
ctx.lineWidth = webLineWeight/6;
rmin = radiusIncrement - (radiusIncrement/1.7);
for (let i = 1; i <= 16; i++) {
	for (let j = 1; j <= 4; j++) {
        rmax = radiusStart + (radiusIncrement * j);
        ctx.fillStyle = COLOR_OUTER_WEB;
        ctx.strokeStyle = COLOR_OUTER_WEB;
        if (j!= 1) {
            if ([1,2,16].includes(i)) {
                ctx.fillStyle = COLOR_HOT_PALE;
                ctx.strokeStyle = COLOR_HOT_PALE;
            } else if ([3,15].includes(i)) {
                ctx.fillStyle = COLOR_HOT_DARK;
                ctx.strokeStyle = COLOR_HOT_DARK;
            } else if ([8,9,10].includes(i)) {
                ctx.fillStyle = COLOR_COOL_PALE;
                ctx.strokeStyle = COLOR_COOL_PALE;
            } else if ([7,11].includes(i)) {
                ctx.fillStyle = COLOR_COOL_DARK;
                ctx.strokeStyle = COLOR_COOL_DARK;
            } 
        }
        let letterStamp = `${alphabet[i-1]}${j}`;
        ctx.fillText(letterStamp, 0, rmax);
        ctx.strokeText(letterStamp, 0, rmax);
	}
	ctx.rotate((Math.PI/180) * 22.5);
}

// Draw Inner Token Lettering  (Q,R,S,T)
ctx.rotate((Math.PI/180) * 45);
ctx.fillStyle = COLOR_OUTER_WEB;
ctx.strokeStyle = COLOR_OUTER_WEB;
for (let i = 16; i <= 19; i++) {
    ctx.save();
    ctx.translate(0, radiusStart * .28);
	ctx.fillText(alphabet[i], 0, radiusStart * .28);
    ctx.strokeText(alphabet[i], 0, radiusStart * .28);
    ctx.restore();
	ctx.rotate((Math.PI/180) * 90);
}
ctx.rotate((Math.PI/180) * -45);

// Draw Innmost Token Lettering (Z)
ctx.fillText("Z", 0, 0);
ctx.strokeText("Z", 0, 0);

// Assemble the tokens on the Sava Board
resetTokens();


// --------------------------------------
// BOARD IMAGE FUNCTION CALLS
function drawWebLine(x, y, radius, color, lineWeight) {
    ctx.beginPath();
	ctx.lineWidth = lineWeight;
	ctx.strokeStyle = color;
	ctx.arc(x, y, radius, 0, Math.PI * 2);
	ctx.stroke();
};

function drawSupportingWebLines(radiusMax, radiusMin, color, lineWeight) {
    let factor = 1.53;
    drawWebLine(radiusMax, 0, radiusMin * factor, color, lineWeight);
    drawWebLine(-radiusMax, 0, radiusMin * factor, color, lineWeight);
    drawWebLine(0, radiusMax, radiusMin * factor, color, lineWeight);
    drawWebLine(0, -radiusMax, radiusMin * factor, color, lineWeight);
};

function drawWebRing(x, y, radius, innerColor, outerColor, lineWeight) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = innerColor;
    ctx.fill();
    ctx.strokeStyle = outerColor;
    ctx.lineWidth = lineWeight/4;
    ctx.stroke();
};


// --------------------------------------
// RESET TOKEN POSITIONS FUNCTION
function resetTokens() {
    // Assemble Tokens on the Sava Board
    const rect = c.getBoundingClientRect();
    const centerX = window.scrollX - 30;
    const centerY = rect.top + window.scrollY;
    console.log(`${centerX}, ${centerY}`);
    let currentX;
    let currentY;
    let position;
    let newXY;
    for (let j = 1; j <= 4; j++) {
        currentX = centerX;
        currentY = centerY + 99 + (((c.height/10)*j)*.66);
        for (let i = 1; i <= 16; i++) {
            newXY = getRotatedXY(centerX, centerY, currentX, currentY, ((i===1)? 0 : 22.49));
            currentX = Math.floor(newXY[0]);
            currentY = Math.floor(newXY[1]);
            position = `${alphabet[i-1]}${j}`;
            if (position in tokenPositions) {
                setTokenStyle(tokenPositions[position], currentX, currentY);
            }
        }
    }
};

// Apply any Token Styles, Animations, Positioning
function setTokenStyle(tokenId, x, y) {
    console.log(tokenId);
    let selectedToken = document.getElementById(tokenId);
    selectedToken.style.position = 'absolute';
    selectedToken.style.left = `${x}px`;
    selectedToken.style.top = `${y}px`;
    selectedToken.style.animationDelay = `${Math.random()}s`;
    dragElement(selectedToken);
};

// Get a rotated X,Y coordinate
function getRotatedXY(centerX, centerY, currentX, currentY, angle) {
    let radians = (Math.PI / 180) * angle,
        cos = Math.cos(radians),
        sin = Math.sin(radians),
        nx = (cos * (currentX - centerX)) - (sin * (currentY - centerY)) + centerX,
        ny = (cos * (currentY - centerY)) + (sin * (currentX - centerX)) + centerY;
    return [nx, ny];
};


