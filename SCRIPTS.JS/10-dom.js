document.querySelector('.js-container')
let divelem = document.getElementById('js-container')
let container = document.querySelector('#js-container')

//divelem.innerHTML = "this is javascript"
//divelem.style.backgroundcolor = "navy"
//divelem.style.color = "white"

console.log(divelem)
const paragraph = document.createElement ("p")
paragraph.textContent = "javascript ability to manipulate the dom"
console.log(paragraph)
divelem.append(paragraph)
console.log(divelem)
