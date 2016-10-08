function buildCurrentButtons(btn1, btn1H, btn2, btn2H){
    stage.addChild(btn1);
    stage.addChild(btn1H);
    stage.addChild(btn2);
    stage.addChild(btn2H);
    
    btn1.x = 10;
    btn1.y = 400;
    btn1H.x = 10;
    btn1H.y = 400;
    btn2.x = 400;
    btn2.y = 400;
    btn2H.x = 400;
    btn2H.y = 400;
    
    btn1H.visible = false;
    btn2H.visible = false;
}

function buildSingleButton(btn,btnH){
    stage.addChild(btn);
    stage.addChild(btnH);
    
    btn.x = 200;
    btn.y = 450;
    btnH.x = 200;
    btnH.y = 450;
    
    btnH.visible = false;
}