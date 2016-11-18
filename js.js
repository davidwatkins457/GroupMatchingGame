window.onload(generateFaces());

function generateFaces() {
var img = document.getElementById("img");
img.src = "Doge.png";

    document.createElement("img").src = "Doge.png";



}




var numberOfFaces = 5;
var theLeftSide = document.getElementById("leftSide");
var theRightSide = document.getElementById("rightSide");
var theBody = document.getElementsByTagName("body")[0];


leftSideImages = theLeftSide.cloneNode(true);

theLeftSide.lastChild.onclick=
    function nextLevel(event){
    event.stopPropagation();
        numberOfFaces += 5;
        generateFaces();
    };

    theBody.onclick =function gameOver() {
        alert("Game Over!");
        theBody.onclick = null;
        theLeftSide.lastChild.onclick = null;
    };






