var play=false;

function player(){
    play=!play;
    if(play){
        document.getElementsByTagName('video')[0].play();
        // document.getElementsByTagName('video')[0].value='Pause';
        document.getElementById('play').value='Pause';
        
    }else{
        document.getElementsByTagName('video')[0].pause();
        document.getElementById('play').value='Play';
    }
}
var mute=false;
var volume;
function muted(){
    mute=!mute;
    if(mute){
        volume=document.getElementById('rangeVolume').value;
        document.getElementsByTagName('video')[0].muted=true;
        document.getElementById('mute').value='Unmute';
        document.getElementById('rangeVolume').value=0;
    }else{
        document.getElementsByTagName('video')[0].muted=false;
        document.getElementById('mute').value='Mute';
        document.getElementById('rangeVolume').value=volume;
    }
}

function changeSpeed(){
    // console.log(document.getElementById('rangeSpeed'));
    document.getElementsByTagName('video')[0].playbackRate=document.getElementById('rangeSpeed').value;
}

function volumeChange(){
    document.getElementsByTagName('video')[0].volume=document.getElementById('rangeVolume').value;
}

function updateTime(){
    var range=document.getElementById('rangeTime');
    range.max=document.getElementsByTagName('video')[0].duration;
    document.getElementsByTagName('video')[0].currentTime=range.value;
    document.getElementsByTagName('video')[0].currentTime;

}

function fronttime(){
    document.getElementsByTagName('video')[0].currentTime+=10;
}

function backtime(){
    document.getElementsByTagName('video')[0].currentTime-=10;

}
function playing(){
    document.getElementById('rangeTime').max=document.getElementsByTagName('video')[0].duration;
    var time=document.getElementsByTagName('video')[0].currentTime;
    document.getElementById('rangeTime').value=time;
    document.getElementById('duration').innerHTML=parseInt(time/60)+':'+parseInt(time%60)+'/'+parseInt(document.getElementsByTagName('video')[0].duration/60)+':'+parseInt(document.getElementsByTagName('video')[0].duration%60);
}

function volumeChange(){
    document.getElementsByTagName('video')[0].volume=document.getElementById('rangeVolume').value/100;
}

function fullscreen(){
    document.getElementsByTagName('video')[0].requestFullscreen();
}

function changeRed(){
    // "#"+(155).toString(16)+(102).toString(16)+(102).toString(16);
    var red=document.getElementById('rangeRed').value;
    var green=document.getElementById('rangeGreen').value;
    var blue=document.getElementById('rangeBlue').value;
    console.log(red,green,blue);
    document.getElementById('par').style.color='rgb(' + red + ',' + green + ',' + blue + ')';
    // console.log(document.getElementById('par').style);
}