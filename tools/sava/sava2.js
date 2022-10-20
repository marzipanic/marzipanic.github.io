let SELECTED_PIECE = null;
let MOUSE_DOWN = false;
let ORIGIN_INDENT = null;
let CURRENT_INDENT = null;


createGame(6);

function createGame(rows) {

    const board = document.getElementById('sava');

    for (let i = 0; i <= rows; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.style.display = 'flex';
        rowDiv.style.justifyContent = 'center';
        board.append(rowDiv);

        for (let j = 0; j < i; j++) {
            const indent = document.createElement('div');
            const indentStyle = {
                display: 'inline-block',
                border: 'solid',
                height: '30px',
                width: '30px',
                borderRadius: '50%',
                margin: '3px'
            }

            Object.keys(indentStyle).forEach(key => {
                indent.style[key] = indentStyle[key];
            })

            indent.setAttribute('id', i + "." + j);

            rowDiv.append(indent);  

            indent.addEventListener('mouseover', ()=>{
                CURRENT_INDENT = indent;
            })

            indent.addEventListener('mouseout',()=>{
                CURRENT_INDENT = null;
            })

            indent.addEventListener('mousedown',()=>{
                ORIGIN_INDENT = indent;
            }) 

            indent.addEventListener('mouseup', (event)=>{
                console.log(checkValidity())
                console.log(event.target.id)
                if(SELECTED_PIECE && event.currentTarget.children.length === 0){
                SELECTED_PIECE.remove();
                populateIndent(event.currentTarget);
                }
            })


            if (i < 6) {
                populateIndent(indent);
            }
        }
    }
}

function populateIndent(indent) {
    const piece = document.createElement('div');

    const pieceStyle = {
        backgroundColor: 'blue',
        border: 'solid',
        height: '25px',
        width: '25px',
        borderRadius: '50%',
        margin: 'auto'
    }

    Object.keys(pieceStyle).forEach(key => {
        piece.style[key] = pieceStyle[key];
    })

    indent.append(piece);

    pieceFunctionality(piece);
}

function pieceFunctionality(piece){

piece.addEventListener('mousedown',()=>{
    SELECTED_PIECE = piece;
    MOUSE_DOWN = true;
})

document.addEventListener('mousemove', (event)=>{
    if(SELECTED_PIECE === piece && MOUSE_DOWN){
    piece.style.position = 'absolute';
    piece.style.top = `${event.clientY}px`,
    piece.style.left = `${event.clientX}px`
    }
})

}


function checkValidity(){
let originRow = Number(ORIGIN_INDENT.id.substring(0,1));
let originColumn = Number(ORIGIN_INDENT.id.substring(2));
let destinationRow = Number(CURRENT_INDENT.id.substring(0,1));
let destinationColumn = Number(CURRENT_INDENT.id.substring(2));

console.log(originRow, originColumn, destinationRow, destinationColumn)

if(destinationRow !== originRow + 1 && destinationRow === originRow - 1){
    return true
}

}

document.addEventListener('mouseup', ()=>{
    MOUSE_DOWN = false;
    
    if(!CURRENT_INDENT){
    SELECTED_PIECE.remove();
    populateIndent(ORIGIN_INDENT);
    }

    SELECTED_PIECE = null;

})


