let changedig=document.getElementById("change-el")
let changedig2=document.getElementById("change-el2")
let score=0
let gscore=0

function increase1(){
    score+=1
    changedig.textContent=score
}

function increase2(){
    score+=2
    changedig.textContent=score
}

function increase3(){
    score+=3
    changedig.textContent=score
}

function increase1g(){
    gscore+=1
    changedig2.textContent=gscore
}

function increase2g(){
    gscore+=2
    changedig2.textContent=gscore
}

function increase3g(){
    gscore+=3
    changedig2.textContent=gscore
}

function reset(){
    changedig.textContent=0
    changedig2.textContent=0
    score=0
    gscore=0
}