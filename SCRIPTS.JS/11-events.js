let shootBtn = document.getElementById("shoot-btn")
let reloadBtn = document.getElementById("reload-btn")
let output = document.querySelector('.js-bullet-display')

//logic for the shoot btn
let maxBullets = 20;
output.innerHTML = `Bullets: ${maxBullets}`
shootBtn.addEventListener('click', function shootandreload () {
    if(maxBullets > 0) {
        maxBullets--;
        output.innerHTML = `Bullets: ${maxBullets}`
    }
    else if(maxBullets === 0) {
        alert("you just ran out of bullets click the red button to reload")
        return maxBullets;
    }
})

reloadBtn.addEventListener('click', function reloadBtn () {
    if(maxBullets === 0) {
        maxBullets = 20;
        output.innerHTML= `Bullets: ${maxBullets}`
    }})

    //keyboard events
    let inputfield = document.getElementById('inputfield') 
        inputfield.addEventListener('keypress', function displaytext(e) {
            console.log(e.key)
        })

    
    