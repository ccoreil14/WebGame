function addScore() {
    scoreObj = new createjs.Text("Score:" +score, "30px Arial", "#000");
    scoreObj.x = 350;
    scoreObj.y = 20;
    stage.addChild(scoreObj);
}

function updateScore() {
    scoreObj.text = "Score:"+score;
}

function resetScore(){
    score = 0;
}