function hitWall() {
    if (collisionMethod(backgroundScreen, PlayerModel, 0, canvas) !== false) {
        speedModifier = -speedModifier;
        PlayerModel.scaleX = charSizeX;
        charSpeed = (charSpeed * -1);
        if (CharacterState === "Jumping") {
            vArc = 1
            speedModifier = 3;
        }
    } else {
        vArc = 0.2;
        speedModifier = 4;
    }
}

function teleport() {
    if (collisionMethod(Portal1, PlayerModel, 0, canvas) !== false) {
        //        console.log("Hit portal 1");
        PlayerModel.x = Portal2.x;
        PlayerModel.y = Portal2.y + 30;
        CharacterState = "Running";
    } else if (collisionMethod(Portal3, PlayerModel, 0, canvas) !== false) {
        PlayerModel.x = Portal4.x;
        PlayerModel.y = Portal4.y + 30;
        CharacterState = "Running";
    }
}


function ifDie() {
    if (isInJMode === false) {
        if (collisionMethod(BadArea, PlayerModel, 0, canvas) !== false || collisionMethod(BadArea2, PlayerModel, 0, canvas) !== false || collisionMethod(BadArea3, PlayerModel, 0, canvas) !== false) {
            state = "ENDGAME";
        }
    }
}

function ifWin() {
    if (collisionMethod(Door, PlayerModel, 0, canvas) !== false) {
        playHurt();
        state = "ENDGAME";
    }
}