let body = document.querySelector('body')
let btn = document.querySelector('.button')
let text = document.querySelector('.text-linear')
let audio  = document.querySelector('.audio')
let value = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f'
]

function runColor(){
    function randomColor() {
        let color = '#'
        for (let i = 0; i < 6; i++) {
            let random = Math.floor(Math.random() * value.length)
            color += value[random]
        }
        return color
    }
    
    let color1 = randomColor()
    let color2 = randomColor()
    let color3 = randomColor()
    let number  = Math.floor(Math.random()*360)
    body.style.background = `linear-gradient(${number}deg, ${color1}, ${color2}, ${color3})`
    text.textContent = `linear-gradient(${number}deg, ${color1}, ${color2}, ${color3})`
}
runColor()

btn.addEventListener('click', runColor)

let audioPlay = true
audio.addEventListener('click', ()=>{
    let audio = new Audio('Hippie Sabotage - Devil Eyes.mp3')
    if(audioPlay){
        audio.play()
    }else{
        audio.paused()
    }
    audioPlay = !audioPlay
})