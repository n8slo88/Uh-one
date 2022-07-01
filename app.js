const grid = document.querySelector('.grid')
let square = document.createElement('div')
let body = document.querySelector('body')
let title = document.createElement('div')
let titlediv = document.createElement('div')
let audio = document.createElement('audio')
let houdini = document.createElement('audio')

title.innerHTML='<h1>UH</h1>'
title.classList.add('title')

audio.src = 'sound/floop.mp3';
houdini.src = 'sound/houdini.mp3'
square.classList.add('square')
grid.appendChild(square)
square.appendChild(title)

body.style.backgroundColor='#4C3A51'

let colorArray = ['4C3A51','774360','B25068','E7AB79']

let redvalue = 255
let greenvalue = 0
let bluevalue = 0

body.style.backgroundColor='#4C3A51'


/// play houdini audio

function houdiniPlay(){
    houdini.play();
}

setTimeout(houdiniPlay, 5000);
setInterval(houdiniPlay, 45000);


//play background audio

function playAudio(){
    audio.currentTime = 0;
    audio.play();
}
document.body.addEventListener('mousemove', ()=>{
    playAudio();
})

setInterval(playAudio, 14000);

//change background color


function randomColor(){
   let bcolor = Math.floor(Math.random() * 4)
   console.log(colorArray[bcolor])
   body.style.backgroundColor = "#"+`${colorArray[bcolor]}`
}

function backTimer(){
    setInterval(randomColor, 4000)
}

backTimer()

//change circle color

function goBlue(){
    function subtract(){
        if (bluevalue>0){
            bluevalue --
            square.style.backgroundColor=`rgb(${redvalue}, ${greenvalue}, ${bluevalue})`    
    }
    else{
        goUp()
    }
    }
        
    function add(){
        if (bluevalue <255){
            bluevalue ++
            square.style.backgroundColor=`rgb(${redvalue}, ${greenvalue}, ${bluevalue})`
    }
    else{
        goDown()
    }
    }

    function goDown(){
            setInterval(subtract, 30);
    }

    function goUp(){
            setInterval(add, 300);
    }

    switch (redvalue){
        case 0:
            goUp();
            break;
        case 255:
            goDown()
            break;
    }
}
goBlue()

function goGreen(){
    function subtract(){
        if (greenvalue>0){
            greenvalue --
            square.style.backgroundColor=`rgb(${redvalue}, ${greenvalue}, ${bluevalue})`
    }
    else{
        goUp()
    }
    }
        
    function add(){
        if (greenvalue <255){
            greenvalue ++
            square.style.backgroundColor=`rgb(${redvalue}, ${greenvalue}, ${bluevalue})`
    }
    else{
        goDown()
    }
    }

    function goDown(){
            setInterval(subtract, 30);
    }

    function goUp(){
            setInterval(add, 300);
    }

    switch (greenvalue){
        case 0:
            goUp();
            break;
        case 255:
            goDown()
            break;
    }
}
goGreen()

function goRed(){
    function subtract(){
        if (redvalue>0){
            redvalue --
            square.style.backgroundColor=`rgb(${redvalue}, ${greenvalue}, ${bluevalue})`
    }
    else{
        goUp()
    }
    }
        
    function add(){
        if (redvalue <255){
            redvalue ++
            square.style.backgroundColor=`rgb(${redvalue}, ${greenvalue}, ${bluevalue})`
    }
    else{
        goDown()
    }
    }

    function goDown(){
            setInterval(subtract, 30);
    }

    function goUp(){
            setInterval(add, 30);
    }

    switch (redvalue){
        case 0:
            goUp();
            break;
        case 255:
            goDown()
            break;
    }
}
goRed()