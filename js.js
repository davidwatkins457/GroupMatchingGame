var theBody = document.getElementsByTagName("body")[0];
var numberOfFaces = 5;
var theLeftSide = document.getElementById("leftSide");
var theRightSide = document.getElementById("rightSide");
function generateFaces() {
    "use strict";
    while(theLeftSide.firstChild){
        theLeftSide.removeChild(theLeftSide.firstChild)
    }
    while (theRightSide.firstChild) {
        theRightSide.removeChild(theRightSide.firstChild)
    }



    for (var i = 0; i < numberOfFaces; i++ ) {
        var elem_img = document.createElement("img");
        elem_img.src = "doge.png";
        var rnd = Math.floor(Math.random()* 401) + "px";
        //elem_img.style.top = Math.floor(Math.random()* 401) + "px";
        //elem_img.style.left = Math.floor(Math.random()* 401) + "px";
        elem_img.style.top = rnd;
        rnd = Math.floor(Math.random()* 401) + "px";
        elem_img.style.left = rnd;
        theLeftSide.appendChild(elem_img);

    }
    var leftSideImages = theLeftSide.cloneNode(true);
    leftSideImages.removeChild(leftSideImages.lastChild);
    theRightSide.appendChild(leftSideImages);

    theLeftSide.lastChild.onclick=
        function nextLevel(event){
            event.stopPropagation();
            numberOfFaces += 5;
            generateFaces();

        }
    }
generateFaces();

theBody.onclick =function gameOver() {
    alert("Game Over!");
    theBody.onclick = null;
    theLeftSide.lastChild.onclick = null;
};
