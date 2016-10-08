function trackMouse(){
    stage.on("stagemousemove", function(evt) {
    mouseX = Math.floor(evt.stageX);
    mouseY = Math.floor(evt.stageY);
    });
    xyString = "MouseX:"+mouseX+"    MouseY:"+mouseY;
}

function addXYCords(){
    xycords = new createjs.Text(xyString, "15px Arial", "#000"); 
    xycords.x = 500;
    xycords.y = 50;
    stage.addChild(xycords);
}