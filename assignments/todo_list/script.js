let button = document.querySelectorAll('button')[0];
let input = document.querySelectorAll('input')[0];
let list = document.getElementsByClassName('todos')[0];

let keyCount = 0 
button.addEventListener('click', function(){
    var paragraph = document.createElement('p')
    paragraph.innerHTML= input.value;
    paragraph.setAttribute('key',keyCount)
    list.appendChild(paragraph)
    keyCount+=1
    paragraph.addEventListener('click', function(){
        list.removeChild(paragraph)
    })
})