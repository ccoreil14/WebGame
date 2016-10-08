function addTimer() {
    timer = new createjs.Text(gameTimer, "30px Arial", "#000");
    timer.x = 10;
    timer.y = 50;
    stage.addChild(timer);
}

function resetGameTimer() {
    gameTimer = 0;
    frameCount = 0;
}

function runGameTimer() {
    frameCount += 1;
    stage.clear();
    if (frameCount % (FPS / 10) === 0) {
        gameTimer = frameCount / (FPS);
//        walk.x += 3;
        
        if (gameTimer === 2 || gameTimer === 4) {
            score++;
            updateScore();
        }

        if (gameTimer === 100) {
            state = "ENDGAME";
            resetGameTimer();
        }
    }
}

function gameStuff() {
    timer.text = gameTimer;
    trackMouse();
    xycords.text = xyString;
    runGameTimer();
}

function loop() {
    //    circle.x += 1;
    //    rect.rotation += 5;
    //    console.log(timer);
    stateMachine(state);
    stage.update();
}

function startLoop() {
    createjs.Ticker.addEventListener('tick', loop)
    createjs.Ticker.setFPS(FPS);
}