let order = []
let clickOrder = []
let score = 0
let interval

/**
 * 0 = blue
 * 1 = red
 * 2 - green
 * 3 - yellow
 */

const blue = document.querySelector(".blue")
const red = document.querySelector(".red")
const green = document.querySelector(".green")
const yellow = document.querySelector(".yellow")
const btn_play = document.querySelector(".play")
const btn_compare = document.querySelector(".compare")
const btn_score = document.querySelector(".score")


btn_play.addEventListener("click", ()=>{
    gameSart()
    sequence()
})

btn_compare.addEventListener("click", ()=>{
    let game = compare()
    if (game === true && order.length > 0){
        score = score + 1
        btn_score.innerHTML = `SCORE: ${score.toString()}`
        sequence()
    }
    else{
        alert("FIM DE JOGO")
        btn_score.innerHTML = "SCORE" 
        gameSart()
    }
     
})

blue.addEventListener("click", ()=>{
    clickOrder.push(0)
})
blue.addEventListener("mousedown",()=>{
    blue.classList.add("selected")
})
blue.addEventListener("mouseup",()=>{
    blue.classList.remove("selected")
})


red.addEventListener("click", ()=>{
    clickOrder.push(1)
})

red.addEventListener("mousedown",()=>{
    red.classList.add("selected")
    
})
red.addEventListener("mouseup",()=>{
    red.classList.remove("selected")
    
})

green.addEventListener("click",()=>{
    clickOrder.push(2)
})
green.addEventListener("mousedown",()=>{
    green.classList.add("selected")
})
green.addEventListener("mouseup",()=>{
    green.classList.remove("selected")
})

yellow.addEventListener("click", ()=>{
    clickOrder.push(3)
})

yellow.addEventListener("mousedown",()=>{
    yellow.classList.add("selected")
    
})
yellow.addEventListener("mouseup",()=>{
    yellow.classList.remove("selected")
    
})

function sequence(){
    pushColor()
    executeOrder()
}

function gameSart (){
    order = []
    clickOrder = []
    score = 0
}

function  pushColor(){
    let color = Math.floor(Math.random() * 4) 
    order.push(color)
}


function executeOrder(i = 0){
    let length = order.length - i
    if(length > 0){
        colorOnOff(order[i])
        setTimeout(()=>{
            executeOrder(i+1) 
        }, 2100)    
    }

    clickOrder = []
}

/* SABER PQ ISSO TA ERRADO
let compareOrder = (value, index) => {
     value === clickedOrder[index]
}

console.log(order.every(compareOrder))
*/

function compare (){
    return  order.every((value, index) =>  value === clickOrder[index])
}

function colorOnOff(value){
   
        if(value === 0){
            blue.classList.add("selected")
            setTimeout(()=>{
                blue.classList.remove("selected")
             }, 2000)
        }
        
        if(value === 1){
            red.classList.add("selected")
            setTimeout(()=>{
                red.classList.remove("selected")
            }, 2000)
            
            
        }
        if(value === 2){
            green.classList.add("selected")
            setTimeout(()=>{
                green.classList.remove("selected")
            }, 2000)
            
        }
        if(value === 3){
            yellow.classList.add("selected")
            setTimeout(()=>{
                yellow.classList.remove("selected")
            }, 2000)
            
        }
}







