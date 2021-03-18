var initialPosX;
var initialPosY;

var currentDiv;

var mouseDown = false;

function createNewElement(event) {
    console.log(event);

    initialPosX = event.pageX;
    initialPosY = event.pageY;
    currentDiv = document.createElement("div");
    currentDiv.setAttribute("style", "border-style: solid; border-width: 2px; border-color: black; position: absolute; left:"+ initialPosX+ "px; top:"+ initialPosY+ "px;")
    document.body.appendChild(currentDiv);  

    mouseDown = true;
}
function updateElement(event) {
    if (mouseDown) {
        var currentWidth =  Math.abs(initialPosX - event.pageX);
        var currentHeight = Math.abs(initialPosY - event.pageY);
        currentDiv.style.height = currentHeight +"px";
        currentDiv.style.width = currentWidth +"px";
    }
}
function finishElement(event) {
    mouseDown = false;
}

var body = document.querySelector("body");

var windowHeight = window.screen.height;

console.log(windowHeight);

body.style.height = windowHeight+"px";

body.addEventListener("mousedown", createNewElement);

body.addEventListener("mousemove", updateElement);

body.addEventListener("mouseup", finishElement);

document.addEventListener("keyup", function(e) {
    if (e.ctrlKey && e.keyCode === 90) {
        e.preventDefault();
        if (body.lastChild.nodeName === "DIV")
            body.removeChild(body.lastChild);
    } else if (e.keyCode === 40) {
        e.preventDefault();
        var bodyHeight = body.style.height.substr(0, body.style.height.length -1);
        body.style.height = body.style.height + windowHeight;
    }
})



//document.querySelector("body").addEventListener("drag", );

