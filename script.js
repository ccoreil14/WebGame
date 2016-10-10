var stage;
var circle, rect;
var frameCount = 0;
var FPS = 30;
var gameTimer = 0;
var state = "INTRO";
var CharacterState = "Falling";
var xycords;
var xyString;
var mouseX = 0,
    mouseY = 0;
var score = 0;
var charSizeX = 0.4;
var charSizeY = 0.7;
var collisionMethod;
var canvas;

var manifest = [
    {
        src: "Images/Title.jpg",
        id: "Title"
    },
    {
        src: "Images/gameOver.jpg",
        id: "gameover"
    },
    {
        src: "Images/coin.png",
        id: "coin"
    },
    {
        src: "Images/BadArea.png",
        id: "bad"
    },
    {
        src: "Images/info.jpg",
        id: "instuctions"
    },
    {
        src: "Images/BasicLevel3.png",
        id: "background"
    },
    {
        src: "Images/round1.png",
        id: "round1"
    },
    {
        src: "Images/InstuctionsBtn.png",
        id: "InstuctionsBtn"
    },
    {
        src: "Images/InstuctionsBtnHover.png",
        id: "InstuctionsBtnHover"
    },
    {
        src: "Images/Portal.png",
        id: "portal"
    },
    {
        src: "Images/playBtn.png",
        id: "playBtn"
    },
    {
        src: "Images/playBtnHover.png",
        id: "playBtnHover"
    },
    {
        src: "Images/MainMenuBtn.png",
        id: "MainMenuBtn"
    },
    {
        src: "Images/MainMenuBtnHover.png",
        id: "MainMenuBtnHover"
    },
    {
        src: "Images/d.png",
        id: "door"
    },
    {
        src: "Images/BadArea.png",
        id: "badArea"
    },
    {
        src: "Images/floor.png",
        id: "floor"
    },
    {
        src: "Images/d.png",
        id: "door"
    },
    {
        src: "Images/Wall.png",
        id: "wall"
    },
    {
        src: "Images/Player.png",
        id: "player"
    },
    {
        src: "Scripts/build_Title.js"
    },
    {
        src: "Scripts/build_playarea.js"
    },
    {
        src: "Scripts/build_gameover.js"
    },
    {
        src: "Scripts/game_timer.js"
    },
    {
        src: "Scripts/buttonControls.js"
    },
    {
        src: "Scripts/init.js"
    },
    {
        src: "Scripts/keyClicks.js"
    },
    {
        src: "Scripts/stateMachine.js"
    },
    {
        src: "Scripts/mouseInfo.js"
    },
    {
        src: "Scripts/animation.js"
    },
    {
        src: "Scripts/characterStateMachine.js"
    },
    {
        src: "Scripts/ndgmr.Collision.js"
    },
    {
        src: "Scripts/hitDetection.js"
    },
    {
        src: "Scripts/score.js"
    }
];

var queue;


createjs.Sound.alternateExtensions = ["mp3"];

function loadFiles() {
    queue = new createjs.LoadQueue(true, "assets/");
    queue.on("complete", loadComplete, this);
    queue.loadManifest(manifest);
}

function loadComplete(evt) {
    if (!createjs.Sound.initializeDefaultPlugins()) {
        document.getElementById("error").style.display = "block";
        document.getElementById("content").style.display = "none";
        return;
    }
    var audioPath = "assets/Sounds/";
    var sounds = [
        {
            id: "Jump",
            src: "Jump.wav"
        },
        {
            id: "Dead",
            src: "hurt.wav"
        },
        {
            id: "BtnClick",
            src: "ButtonClick.wav"
        }
        ];
    createjs.Sound.addEventListener("fileload", loadComplete);
    createjs.Sound.registerSounds(sounds, audioPath);
    titleScreen = new createjs.Bitmap(queue.getResult("Title"));
    gameoverScreen = new createjs.Bitmap(queue.getResult("gameover"));
    infoScreen = new createjs.Bitmap(queue.getResult("instuctions"));
    backgroundScreen = new createjs.Bitmap(queue.getResult("background"));
    backgroundScreen.scaleX = 0.993;
    backgroundScreen.scaleY = 1.2;
    backgroundScreen.y = -10;
    levelFrame = new createjs.Bitmap(queue.getResult("round1"));
    InstuctionsBtn = new createjs.Bitmap(queue.getResult("InstuctionsBtn"));
    InstuctionsBtnHover = new createjs.Bitmap(queue.getResult("InstuctionsBtnHover"));
    playBtn = new createjs.Bitmap(queue.getResult("playBtn"));
    playBtnHover = new createjs.Bitmap(queue.getResult("playBtnHover"));
    MainMenuBtn = new createjs.Bitmap(queue.getResult("MainMenuBtn"));
    MainMenuBtnHover = new createjs.Bitmap(queue.getResult("MainMenuBtnHover"));
    
    BadArea = new createjs.Bitmap(queue.getResult("bad"));
    BadArea.scaleX = 0.3;
    BadArea.scaleY = 0.3;
    BadArea.x = 230;
    BadArea.y = 580;
    
    BadArea2 = new createjs.Bitmap(queue.getResult("bad"));
    BadArea2.scaleX = 0.3;
    BadArea2.scaleY = 0.3;
    BadArea2.x = 430;
    BadArea2.y = 580;
    
    BadArea3 = new createjs.Bitmap(queue.getResult("bad"));
    BadArea3.scaleX = 0.3;
    BadArea3.scaleY = 0.3;
    BadArea3.x = 300;
    BadArea3.y = 360;
    
    Coin1 = new createjs.Bitmap(queue.getResult("coin"));
    Coin1.scaleX = 0.3;
    Coin1.scaleY = 0.3;
    Coin1.x = 200;
    Coin1.y = 460;
    
    Coin2 = new createjs.Bitmap(queue.getResult("coin"));
    Coin2.scaleX = 0.3;
    Coin2.scaleY = 0.3;
    Coin2.x = 400;
    Coin2.y = 460;
    
    Coin3 = new createjs.Bitmap(queue.getResult("coin"));
    Coin3.scaleX = 0.3;
    Coin3.scaleY = 0.3;
    Coin3.x = 300;
    Coin3.y = 240;
    
    Coin4 = new createjs.Bitmap(queue.getResult("coin"));
    Coin4.scaleX = 0.3;
    Coin4.scaleY = 0.3;
    
    Coin5 = new createjs.Bitmap(queue.getResult("coin"));
    Coin5.scaleX = 0.3;
    Coin5.scaleY = 0.3;
    
    Door = new createjs.Bitmap(queue.getResult("door"));
    Door.y = 200;
    Door.x = 740;
    Door.scaleY = 0.5;
    Door.scaleX = 0.3;

    Portal1 = new
    createjs.Bitmap(queue.getResult("portal"));
    Portal1.scaleX = 0.5;
    Portal1.x = 750;
    Portal1.y = 500;

    Portal2 = new createjs.Bitmap(queue.getResult("portal"));
    Portal2.scaleX = 0.5;
    Portal2.y = 350;

    Portal3 = new createjs.Bitmap(queue.getResult("portal"));
    Portal3.scaleX = 0.5;
    Portal3.x = 750;
    Portal3.y = 350;

    Portal4 = new createjs.Bitmap(queue.getResult("portal"));
    Portal4.scaleX = 0.5;
    Portal4.y = 200;


    Ceiling = new createjs.Bitmap(queue.getResult("floor"));
    Ceiling.scaleX = 1.55;


    BottomFloor = new createjs.Bitmap(queue.getResult("floor"));
    BottomFloor.scaleX = 1.55;
    BottomFloor.y = 596;

    Floor1 = new createjs.Bitmap(queue.getResult("floor"));
    Floor1.y = 150;
    Floor1.scaleX = 1.55;

    Floor2 = new createjs.Bitmap(queue.getResult("floor"));
    Floor2.y = 300;
    Floor2.scaleX = 1.55;



    Floor3 = new createjs.Bitmap(queue.getResult("floor"));
    Floor3.y = 450;
    Floor3.scaleX = 1.55;


    PlayerModel = new createjs.Bitmap(queue.getResult("player"));
    PlayerModel.scaleX = charSizeX;
    PlayerModel.scaleY = charSizeY;
    PlayerModel.x = 50;
    PlayerModel.y = 510;

    collisionMethod = ndgmr.checkPixelCollision;

    startLoop();

}

function setupCanvas() {
    canvas = document.getElementById('game');
    canvas.width = 800;
    canvas.height = 600;
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver();
}


(function main() {
    setupCanvas();
    loadFiles();
})();


function playJump(event) {
    createjs.Sound.play("Jump");
}

function playHurt(event) {
    createjs.Sound.play("Dead");
}

function playBtnClick(event) {
    createjs.Sound.play("BtnClick");
}




//    var walkSheet = new createjs.SpriteSheet({
//        images: [queue.getResult("mySprites")],
//        frames: [[160,0,19,49,0,10.05,48.6],[179,0,34,44,0,17.05,43.6],[213,0,22,46,0,9.05,45.6],[235,0,17,49,0,8.05,48.6],[0,49,25,49,0,10.05,48.6],[25,49,31,46,0,14.05,45.6],[56,49,33,44,0,16.05,43.6],[89,49,30,44,0,17.05,43.6],[119,49,28,46,0,17.05,45.6],[147,49,19,49,0,10.05,48.6],[166,49,23,49,0,14.05,48.6],[189,49,31,46,0,16.05,45.6],[220,49,34,44,0,17.05,43.6],[0,98,19,49,0,9.05,48.6],[19,98,34,44,0,17.05,43.6],[53,98,22,46,0,13.05,45.6],[75,98,17,49,0,9.05,48.6],[92,98,25,49,0,15.05,48.6],[117,98,31,46,0,17.05,45.6],[148,98,33,44,0,17.05,43.6],[181,98,30,44,0,13.05,43.6],[211,98,28,46,0,11.05,45.6],[0,147,19,49,0,9.05,48.6],[19,147,23,49,0,9.05,48.6],[42,147,31,46,0,15.05,45.6],[73,147,34,44,0,17.05,43.6]],
//        animations: {
//            standRight: [0, 0, "standRight"],
//            walkRight: [1, 12, "walkRight", .5],
//            standLeft: [13, 13, "standLeft"],
//            walkLeft: [14, 25, "walkLeft", .5]
//        }     
//    });
//    
//    walk = new createjs.Sprite(walkSheet);  //create a sprite from the frame and animation data
//    walk.x=100;
//    walk.y=500;
//    walk.gotoAndPlay("walkRight");  //loops through the animation frames (1-12) as defined above

//function addCircle() {
//    circle = new createjs.Shape();
//    //^ becomes global variable without var 
//    circle.graphics.beginFill('#a77').drawCircle(0, 0, 40);
//    circle.x = circle.y = 50;
//    stage.addChild(circle);
//
//}
//
//function addRect() {
//    rect = new createjs.Shape();
//    rect.graphics.beginFill('#77a').drawRect(-40, -40, 80, 80);
//    rect.x = 200;
//    rect.y = 200;
//    stage.addChild(rect);
//}