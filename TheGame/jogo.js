(function(){

    var cnv =document.querySelector("canvas");
var ctx = cnv.getContext("2d");

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

function update(){}

function render(){
    for(var i in maze){
        for(var j in maze[i]){
            var tile = maze[i][j];
            if(tile === 1){
                var x = j*32;
                var y = i*32;
                ctx.fillRect(x, y, 32, 32);
            }
        }
    }
}

function loop(){
    update()
    render()
    requestAnimationFrame(loop, cnv);
}
requestAnimationFrame(loop,cnv);

}());

//////////////////////////--------player--------///////////////////////////

 //variaveis//
 var dx;
 var dy;
 var px;
 var py;
 var obj;
 var tmp;
 var vel;
 //função-01//
 function iniciar(){
     dx = 0;
     dy = 0;
     px = 644;///gambiarra
     py = 42;///gambiarra
     obj = document.getElementById("personagem");
     document.addEventListener("keydown", teclaDw);
     document.addEventListener("keyup", teclaUp);
     tmp = setInterval(updateframe, 20);
     vel = 10;
 }
 //função-02//
 function teclaDw(){
     var tecla = event.keyCode;
     if(tecla == 37){
         dx = -1;
     } else if (tecla == 38){
         dy = -1;
     } else if(tecla ==39){
         dx = 1;
     } else if(tecla == 40){
         dy = 1;
     }
 }
 //função-03//
 function teclaUp(){
     var tecla = event.keyCode;
     if(tecla == 37){
         dx = 0;
     } else if(tecla == 38){
         dy = 0;
     } else if(tecla == 39){
         dx = 0;
     } else if(tecla == 40){
         dy = 0;
     }
 }
 //fução-04//
 function updateframe(){
     px += dx * vel;
     py += dy * vel;
     obj.style.left = px + "px";
     obj.style.top = py + "px";
 }
 window.addEventListener("load", iniciar);
