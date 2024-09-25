const botaoum = document.getElementById('botaoum');
const botaodois = document.getElementById('botaodois'); 
let numeroCurtidas = 0;

botaoum.addEventListener('click', function () {
    numeroCurtidas++;
    document.getElementById("contador").innerText = numeroCurtidas;
});

botaodois.addEventListener('click', function () {
    numeroCurtidas--;
    document.getElementById("contador").innerText = numeroCurtidas;
});