function stateMachine() {
    switch (state) {

    case "INTRO":
        console.log("Intro");
        stage.removeAllChildren();
        build_Title(titleScreen);
        buildCurrentButtons(playBtn, playBtnHover, InstuctionsBtn, InstuctionsBtnHover);
        playBtn.on("click", function (evt) {
            state = "STARTGAME"
        });
        InstuctionsBtn.on("click", function (evt) {
            state = "INSTRUCT"
        });
        break;
    case "INSTRUCT":
        console.log("Instruct");
        stage.removeAllChildren();
        build_Instuctions(infoScreen);
        buildCurrentButtons(playBtn, playBtnHover, MainMenuBtn, MainMenuBtnHover);
        playBtn.on("click", function (evt) {
            state = "STARTGAME"
        });
        MainMenuBtn.on("click", function (evt) {
            state = "INTRO"
        });
        break;
    case "STARTGAME":
        console.log("StartGame");
        stage.removeAllChildren();
        build_Background(backgroundScreen);
//        spritewalk();
        characterLoad();
        characterAnimation(CharacterState);
        addScore();
        addXYCords();
        addTimer();
        gameStuff();
        break;
    case "ENDGAME":
        console.log("EndGame");
        stage.removeAllChildren();
        resetScore();
        build_Gameover(gameoverScreen);
        addScore();
        buildSingleButton(MainMenuBtn, MainMenuBtnHover);
        MainMenuBtn.on("click", function (evt) {
            state = "INTRO";
        });
        break;
    }
    stage.update();
}