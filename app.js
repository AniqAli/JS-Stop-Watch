var hours = 0;
var minutes = 0;
var seconds = 0;
var miliSeconds = 0;

var takeHour = document.getElementById('hour');
var takeMin = document.getElementById('min');
var takeSec = document.getElementById('sec');
var takeMiliSec = document.getElementById('milisec');

var inter;

function timeFunc() {
    miliSeconds++
    takeMiliSec.innerHTML = miliSeconds;
    if (miliSeconds >= 100) {
        seconds++
        takeSec.innerHTML = seconds
        miliSeconds = 0    
    }
    else if(seconds >= 60){
        minutes++
        takeMin.innerHTML = minutes
        seconds = 0
    }
    else if(minutes >= 60){
        hours++
        takeHour.innerHTML = hours
        minutes = 0
    }
}

function start() {
    inter = setInterval(timeFunc,10)   
}

function pause() {
    clearInterval(inter)
}

function reset() {
    hours = '00';
    minutes = '00';
    seconds = '00';
    miliSeconds = '00';
    takeHour.innerHTML = hours
    takeMin.innerHTML = minutes
    takeSec.innerHTML = seconds
    takeMiliSec.innerHTML = miliSeconds
    stop()
}


