function stateMachine() {

    switch (state) {

    case "INTRO":
        PlayerModel.x = 50;
        PlayerModel.y = 510;
        resetScore();
        resetGameTimer();
        console.log("Intro");
        stage.removeAllChildren();
        build_Title(titleScreen);
        buildCurrentButtons(playBtn, playBtnHover, InstuctionsBtn, InstuctionsBtnHover);
        playBtn.on("click", function (evt) {
            state = "STARTGAME";
            playBtnClick();
        });
        InstuctionsBtn.on("click", function (evt) {
            state = "INSTRUCT";
            playBtnClick();
        });
        break;
    case "INSTRUCT":
        console.log("Instruct");
        stage.removeAllChildren();
        build_Instuctions(infoScreen);
        buildCurrentButtons(playBtn, playBtnHover, MainMenuBtn, MainMenuBtnHover);
        playBtn.on("click", function (evt) {
            state = "STARTGAME";
            playBtnClick();
        });
        MainMenuBtn.on("click", function (evt) {
            state = "INTRO";
            playBtnClick();
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
        build_Gameover(gameoverScreen);
        addScore();
        buildSingleButton(MainMenuBtn, MainMenuBtnHover);
        MainMenuBtn.on("click", function (evt) {
            playBtnClick();
            state = "INTRO";
        });
        break;
    case "WINGAME":
        console.log("WinGame");
        stage.removeAllChildren();
        build_Gameover(Win);
        addScore();
        buildSingleButton(MainMenuBtn, MainMenuBtnHover);
        MainMenuBtn.on("click", function (evt) {
            playBtnClick();
            state = "INTRO";
        });
        break;
    }
    stage.update();
}