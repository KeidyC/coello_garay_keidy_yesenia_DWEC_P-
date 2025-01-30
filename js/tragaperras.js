const frutas = [
    { index: 1, nombre: 'Cereza', simbolo: '🍒' },
    { index: 2, nombre: 'Limón', simbolo: '🍋' },
    { index: 3, nombre: 'Sandía', simbolo: '🍉' },
    { index: 4, nombre: 'Uva', simbolo: '🍇' },
    { index: 5, nombre: 'Plátano', simbolo: '🍌' }
];


function jugar(){
    indicesFrutas = generarTresNumerosAleatorios();
    for(let i = 0; i < frutas.length; i++){
        if(frutas[i].index == indicesFrutas){
            let slot = document.getElementById('slot')
        }
    }
}

function generarTresNumerosAleatorios() {
    let numeroAleatorio = Math.random() * 3;
    return numeroAleatorio;
}



document.getElementById('play-button').addEventListener('click', function(){
    jugar();
})