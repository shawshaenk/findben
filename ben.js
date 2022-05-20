var sound = document.getElementById("myAudio");
var yes = new Audio("bensayingyes.mp3");
var movecheck = true;
var x = 300;
var y = 300;
var x2;
var y2;
var mousex = 0;
var mousey = 0;
var bounds;
var pos = false;
var foundcheck = false;

function moveBen() {
    while (x <= 300 || y <= 300){
        x = Math.random() * 1000;
        x = Math.round(x);
        y = Math.random() * 500;
        y = Math.round(y);
    }
    document.getElementById("ben").style.left=x+'px';
    document.getElementById("ben").style.top=y+'px';
    x2 = x;
    y2 = y;
    pos = true;
    x = 300;
    y = 300;
}

function start(){
    (document.getElementById("startimage")).setAttribute("style", "display:none;")
    if(movecheck == true || foundcheck == true){
        moveBen();
        movecheck = false;
        foundcheck = false;
    }
    sound.loop = true;
    sound.autoplay = true;
    sound.volume = 0.5;
    sound.load();
}

function end(){
    sound.loop = false;
    sound.autoplay = false;
    sound.load();
    movecheck = false;
}

function benFound(){
    end();
    (document.getElementById("startimage")).setAttribute("style", "")
    movecheck = true;
    foundcheck = true;
    yes.play();
}

onmousemove = function(event){
    bounds = (document.getElementById("ben")).getBoundingClientRect();
    if(pos){
        if((Math.abs(mousex - 0) > Math.abs((event.clientX - bounds.left) - 0)) && (Math.abs(mousey - 0) > Math.abs((event.clientY - bounds.top)) - 0)){
            if(sound.volume < 0.9){
                sound.volume += 0.03;
                sound.load();
            }
        }else if((Math.abs(mousex - 0) < Math.abs((event.clientX - bounds.left) - 0)) && (Math.abs(mousey - 0) < Math.abs((event.clientY - bounds.top)) - 0)){
            if(sound.volume > 0.1){
                sound.volume -= 0.03;
                sound.load();
            }
        }else if((Math.abs(mousex - 0) > Math.abs((event.clientX - bounds.left) - 0)) || (Math.abs(mousey - 0) > Math.abs((event.clientY - bounds.top)) - 0)){
            if(sound.volume < 0.9){
                sound.volume += 0.01;
                sound.load();
            }
        }else if((Math.abs(mousex - 0) < Math.abs((event.clientX - bounds.left) - 0)) || (Math.abs(mousey - 0) < Math.abs((event.clientY - bounds.top)) - 0)){
            if(sound.volume > 0.1){
                sound.volume -= 0.01;
                sound.load();
            }
        }
        mousex = event.clientX - bounds.left;
        mousey = event.clientY - bounds.top;
    }
}