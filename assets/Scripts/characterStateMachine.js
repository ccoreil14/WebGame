var speedModifier = 4;
var vArc = 3;
var jumpTime = 0.5;
var charSpeed = 7;
var timeOfAction;



function characterAnimation() {
    //    hitWall();
    teleport();
    ifWin();
    ifDie();
    if (collisionMethod(Coin1, PlayerModel, 0, canvas) !== false || collisionMethod(Coin2, PlayerModel, 0, canvas) !== false || collisionMethod(Coin3, PlayerModel, 0, canvas) !== false) {
        score++;
        updateScore();
    }
    switch (CharacterState) {

    case "Running":
        //          console.log("Run "+ PlayerModel.x);
        PlayerModel.x += charSpeed;
        PlayerModel.rotation = 0;
        break;
    case "Sliding":
        PlayerModel.x += charSpeed;

        if (gameTimer - timeOfAction === jumpTime) {
            console.log("Time");
            PlayerModel.y -= 70;
            PlayerModel.rotation = 0;
            CharacterState = "Running";
        }
        break;
    case "Jumping":
        PlayerModel.y -= vArc;
        PlayerModel.x += charSpeed;

        if (gameTimer - timeOfAction === jumpTime) {
            CharacterState = "Falling";
        }

        break;
    case "Falling":
        if (collisionMethod(BottomFloor, PlayerModel, 0, canvas) !== false || collisionMethod(Floor2, PlayerModel, 0, canvas) !== false || collisionMethod(Floor3, PlayerModel, 0, canvas) !== false) {
            console.log("Floor");
            CharacterState = "Running";
        } else {
            PlayerModel.y += vArc;
            PlayerModel.x += charSpeed;
            break;
        }
    }
    //    console.log("yo");
    stage.update();
}