const botao = document.getElementById('botao');
const texto = document.getElementById('texto');

botao.addEventListener('click', function() {
    texto.textContent = 'Olá Mundo!'
})