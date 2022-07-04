function criaHoradosSegundos (segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer; 

function iniciarRelogio() {
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = criaHoradosSegundos(segundos);
    }, 1000);
}

iniciar.addEventListener('click', function (event) {
    clearInterval(timer);
    iniciarRelogio();
});

pausar.addEventListener('click', function (event) {
   clearInterval(timer);
   relogio.style.color = 'red';
 });

 zerar.addEventListener('click', function (event) {
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;
    relogio.style.color = 'black'
 });
 
 
