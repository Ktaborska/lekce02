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

function muteAudio(){
    document.querySelector('#zvukovaStopa').volume=0;
}

function replayAudio(){
    document.querySelector('#zvukovaStopa').currentTime=0;
}

function clickBig(){
    document.querySelector('.text').style.fontSize=fontSize + 1;
}

function clickBig(){
    let velikost = parseInt(window.getComputedStyle(document.querySelector('.text')).fontSize)

    console.log(velikost)

    velikost++;

    document.querySelector('.text').style.fontSize = velikost + 'px';
}

