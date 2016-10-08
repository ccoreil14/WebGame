var KEYCODE_LEFT = 37;
var KEYCODE_UP = 38;
var KEYCODE_RIGHT = 39;
var KEYCODE_DOWN = 40;

var KEYCODE_W = 87;
var KEYCODE_A = 65;
var KEYCODE_S = 83;
var KEYCODE_D = 68;

var KEYCODE_SPACE = 32;


function handleKeyDown(evt) {
    if (!evt) {
        var evt = window.event;
    } //browser compatibility
    switch (evt.keyCode) {
    case KEYCODE_LEFT:
        console.log(evt.keyCode + " down");
        return false;
    case KEYCODE_RIGHT:
        console.log(evt.keyCode + " down");
        return false;
    case KEYCODE_UP:
        console.log(evt.keyCode + " down");
        return false;
    case KEYCODE_DOWN:
        timeOfAction = gameTimer;
//      run method that slides then back to running    

//        CharacterState = "Sliding"
        console.log(evt.keyCode + " down");
        return false;
    case KEYCODE_W:
        console.log(evt.keyCode + " down");
        return false;
    case KEYCODE_A:
        console.log(evt.keyCode + " down");
        return false;
    case KEYCODE_S:
        console.log(evt.keyCode + " down");
        return false;
    case KEYCODE_D:
        console.log(evt.keyCode + " down");
        return false;
    case KEYCODE_SPACE:
        timeOfAction = gameTimer;
        //      run method that goes up as it loops then down then back to running    
        timeOfAction = gameTimer;
        CharacterState = "Jumping";
        console.log(evt.keyCode + " down");
        return false;
    }
}

function handleKeyUp(evt) {
    if (!evt) {
        var evt = window.event;
    } //browser compatibility
    switch (evt.keyCode) {
    case KEYCODE_LEFT:
        console.log(evt.keyCode + " up");
        break;
    case KEYCODE_RIGHT:
        console.log(evt.keyCode + " up");
        break;
    case KEYCODE_UP:
        console.log(evt.keyCode + " up");
        break;
    case KEYCODE_DOWN:
        console.log(evt.keyCode + " up");
        break;
    case KEYCODE_W:
        console.log(evt.keyCode + " up");
        break;
    case KEYCODE_A:
        console.log(evt.keyCode + " up");
        break;
    case KEYCODE_S:
        console.log(evt.keyCode + " up");
        break;
    case KEYCODE_D:
        console.log(evt.keyCode + " up");
        break;
    case KEYCODE_SPACE:
        console.log(evt.keyCode + " up");
        break;
    }
}

document.onkeydown = handleKeyDown;
document.onkeyup = handleKeyUp;