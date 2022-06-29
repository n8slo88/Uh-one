const grid = document.querySelector('.grid')
let square = document.createElement('div')
let body = document.querySelector('body')
let title = document.createElement('div')
let titlediv = document.createElement('div')
let audio = document.createElement('audio')

audio.src = '/sound/loop.wav'
audio.play()
function playAudio(){
    audio.currentTime = 0
    audio.play()
}
setInterval(playAudio, 14000)

title.innerHTML='<h1>UH</h1>'
title.classList.add('title')

square.classList.add('square')
grid.appendChild(square)
square.appendChild(title)

body.style.backgroundColor='#4C3A51'

let colorArray = ['4C3A51','774360','B25068','E7AB79']

function randomColor(){
   let bcolor = Math.floor(Math.random() * 4)
   console.log(colorArray[bcolor])
   body.style.backgroundColor = "#"+`${colorArray[bcolor]}`
   
}

function backTimer(){
    setInterval(randomColor, 4000)
}

backTimer()

body.style.backgroundColor='#4C3A51'


let redvalue = 255
let greenvalue = 0
let bluevalue = 0


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


//  for loop below:

// let array=[]

// for ( let i = 0; i<55; i++){
//    array.push(i)
// }
// console.log(array)

//for of loop

// const names =["harry", "ross", "red", "aark"]
// names.push('gor')
// function go(){
//     for (name of names)  console.log(name);
// }
// go()

//while loop  (will crash)

// let i =0
// while (i<55){
//     console.log(i)
//     add()
// }

// function add(){
//     i++
// }
// let i = 0
// switch (i){
//     case 0:
//         console.log("correct")
//         break;
//     case 255:
//         console.log("okay")
//         break;
//     default:
//         console.log("none")
// }


// setTimeout(okay, 2000)

// function okay(){
//     for (i;i<5;i++){
//         console.log(i)
//     }
// }











