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
    document.getElementById('#zvukovaStopa').play();
}