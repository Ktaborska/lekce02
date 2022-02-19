console.log ('Ahoj')


function setBold (className, weight){
    console.log("Tady budu zvětšovat");
    document.querySelector (className).style.fontWeight=weight;
}

function setNormal (className, weight){
    console.log("Tady budu zmenšovat");
    document.querySelector (className).style.fontWeight=weight;
}

function clickRed(){
    document.querySelector('.text').classList.toggle('textRed');
}

function playAudio(){
    document.querySelector('#zvukovaStopa').play();
}

function stopAudio(){
    document.querySelector('#zvukovaStopa').pause();
}

function volumeHigh(){
    document.querySelector('#zvukovaStopa').volume=1.0;
}

function volumeLow(){
    document.querySelector('#zvukovaStopa').volume=0.5;
}

function mute(){
    document.querySelector('#zvukovaStopa').volume=0;
}



