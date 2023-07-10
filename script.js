// var today = new Date();
// var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();


let block = document.querySelector(".block")


function callTime(){
    let refreash=1000
    let myTime=setTimeout(`displayTime()`,refreash)
    

}

function displayTime(){
    let today = new Date()
let time =`${today.getHours()}: ${today.getMinutes()}: ${today.getSeconds()}`

    block.innerHTML=`${time}`
    callTime()
}

callTime()