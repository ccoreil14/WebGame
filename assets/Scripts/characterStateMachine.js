var speedModifier = 4;
var vArc = 2;
var jumpTime = 1;

function characterAnimation() {
    hitWall();
    switch (CharacterState) {

    case "Running":
        //          console.log("Run "+ PlayerModel.x);
        PlayerModel.x += charSpeed;
        break;
    case "Sliding":
        PlayerModel.x += charSpeed;
        PlayerModel.y = 590;
        PlayerModel.rotation = -90;
        break;
    case "Jumping":
            PlayerModel.y -= vArc;
            PlayerModel.x += charSpeed - speedModifier;
            if(gameTimer - timeOfAction === jumpTime){
                CharacterState = "Falling";
            }

        break;
    case "Falling":
        if (collisionMethod(backgroundScreen, PlayerModel, 0, canvas) !== false) {
            CharacterState = "Running";
        } else {
            PlayerModel.y += vArc;
            PlayerModel.x += charSpeed - speedModifier;
            break;
        }
    }
    //    console.log("yo");
    stage.update();
}