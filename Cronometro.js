function getTimeFromSeconds (segundos) {
    const data = new Date(segundos*1000)
    return data.toLocaleTimeString('pt-BR', { 
     hour12:false,
     timeZone:'UTC'}
)}
    
console.log(getTimeFromSeconds(40))

const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausa')
const resetar = document.querySelector('.resetar')

let segundos = 0;
let timer;

function iniciarelogio() {
     timer = setInterval(function(){
        segundos ++;
        relogio.innerHTML= getTimeFromSeconds(segundos)
    },1000)
}

iniciar.addEventListener('click',function(event) {
    relogio.classList.remove('pausado')
    clearInterval(timer)
    iniciarelogio();
});

pausar.addEventListener('click',function(event) {
    clearInterval(timer)
    relogio.classList.add('pausado')
});

resetar.addEventListener('click',function(event) {
    clearInterval(timer);
    relogio.classList.remove('pausado')
    relogio.innerHTML = '00:00:00'
    segundos = 0
});