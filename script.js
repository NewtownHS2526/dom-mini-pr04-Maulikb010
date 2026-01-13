console.log("Script Running");


const changepos = (item, pos) => (pos <= 6 ? item.style.setProperty('grid-column', pos) : null);


let pos1 = 1;
let pos2 = 1;
let pos3 = 1;


const btn1 = document.querySelector("#tux-button");
const penguin1 = document.querySelector("#tux-penguin");
const btn2 = document.querySelector("#daisy-button");
const penguin2 = document.querySelector("#daisy-penguin");
const btn3 = document.querySelector("#rocky-button");
const penguin3 = document.querySelector("#rocky-penguin");
const winner = document.querySelector("#winner");


function movepenguin1 () {
    pos1 += 1;
    changepos (penguin1,pos1);
}
function movepenguin2 () {
    pos2 += 1;
    changepos (penguin2,pos2);
}
function movepenguin3 () {
    pos3 += 1;
    changepos (penguin3,pos3);
}


function checkwinner1 () {
    if (pos1 > 5) {
        winner.textContent = `tux won!`
    }
}
function checkwinner2 () {
    if (pos2 > 5) {
        winner.textContent = `daisy won!`
    }
}
function checkwinner3 () {
    if (pos3 > 5) {
        winner.textContent = `rocky won!`
    }
}


btn1.addEventListener("click",movepenguin1);
btn1.addEventListener("click",checkwinner1);
btn2.addEventListener("click",movepenguin2);
btn2.addEventListener("click",checkwinner2);
btn3.addEventListener("click",movepenguin3);
btn3.addEventListener("click",checkwinner3);
