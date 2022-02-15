console.log ('Ahoj')

// let element = document.querySelector('.text')

function setBold (className, weight){
    console.log("Tady budu zvětšovat");
    //element.style.fontWeight="bold"
    document.querySelector (className).style.fontWeight=weight;
}

function setNormal (className, weight){
    console.log("Tady budu zmenšovat");
    //element.style.fontWeight="normal"
    document.querySelector (className).style.fontWeight=weight;
}

