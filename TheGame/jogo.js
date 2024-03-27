(function(){

    var cnv = document.querySelector("canvas");
    var ctx = cnv.getContext("2d");
    var LEFT = 37, RIGHT = 39, UP = 38, DOWN = 40;
    var mvleft = mvUp = mvRight = mvDown = false;
    var tileSize = 32;

    var player = {
        x : tileSize + 2,
        y : tileSize + 2,
        with : 28,
        height: 28
    }

var maze = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1],
    [1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1],
    [1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1],
    [1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1],
    [1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1],
    [1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1],
    [1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1],
    [1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1],
    [1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1],
    [1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1],
    [1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1],
    [1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1],
    [1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1],
    [1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1],
    [1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1],
    [1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1],
    [1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1],
    [1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]  

];
window.addEventListener("keydown", keydownHandler, false);
window.addEventListener("keyup", keyuphandler, false);


function keydownHandler(e){
    var key = e.keycode;
    switch(key){
        case LEFT: true;
        break;
        case UP:
            mvUp = true;
        break;
        case RIGHT:
            mvRight = true;
        break;
        case DOWN:
            mvDown = true;
        break;

    }
}

function keyuphandler(e){
    var key = e.keyCode;
    switch
}

function update(){
    
}

function render(){
    ctx.save();
    for(var row in maze){
        for(var column in maze[row]){
            var tile = maze[row][column];
            if(tile === 1){
                var x = column * tileSize;
                var y = row * tileSize;
                ctx.fillRect(x, y, tileSize, tileSize);
            }
        }
    }
    ctx.fillStyle = "red";
    ctx.fillRect(player.x, player.y, player.with, player.height);
    ctx.restore();
}

function loop(){
    update();
    render();
}
requestAnimationFrame(loop,cnv);

}());

