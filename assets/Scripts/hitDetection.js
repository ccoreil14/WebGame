function hitWall(){
    if(PlayerModel.x > 750 || PlayerModel.x < 5){
        speedModifier = -speedModifier; 
        PlayerModel.scaleX = charSizeX;
        charSpeed = (charSpeed * -1);
        if(CharacterState === "Jumping"){
            vArc = 6;
            speedModifier = 3;
        }else{
            vArc = 2;
            speedModifier = 4;
        }
    }
}

//function hitFloor(){
//    
//}