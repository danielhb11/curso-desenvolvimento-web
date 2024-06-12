let botaoA = document.getElementById("aDrum");
let botaoS = document.getElementById("sDrum");
let botaoD = document.getElementById("dDrum");
let botaoG = document.getElementById("gDrum");
let botaoJ = document.getElementById("jDrum");
let botaoK = document.getElementById("kDrum");
let botaoL = document.getElementById("lDrum");

botaoA.addEventListener('click', () =>{
    const som = document.getElementById('audioA');
    console.log(som);
    som.play();
})



botaoS.addEventListener('click', () =>{
    const som = document.getElementById('audioS');
    console.log(som);
    som.play();
})



botaoD.addEventListener('click', () =>{
    const som = document.getElementById('audioD');
    console.log(som);
    som.play();
})

botaoJ.addEventListener('click', () =>{
    const som = document.getElementById('audioJ');
    console.log(som);
    som.play();
})


botaoG.addEventListener('click', () =>{
    const som = document.getElementById('audioG');
    console.log(som);
    som.play();
})



botaoK.addEventListener('click', () =>{
    const som = document.getElementById('audioK');
    console.log(som);
    som.play();
})



botaoL.addEventListener('click', () =>{
    const som = document.getElementById('audioL');
    console.log(som);
    som.play();
})

document.addEventListener('keydown',function(event){
    switch (event.key.toLocaleLowerCase()) {
        case 'a':
            const somA = document.getElementById('audioA');
            console.log(somA);
            somA.play();
            break;
        case 's':
            const somS = document.getElementById('audioS');
            console.log(somS);
            somS.play();
            break;
        case 'd':
            const somD = document.getElementById('audioD');
            console.log(somD);
            somD.play();
            break;
        case 'g':
            const somG = document.getElementById('audioG');
            console.log(somG);
            somG.play();
            break;
        case 'j':
            const somJ = document.getElementById('audioJ');
            console.log(somJ);
            somJ.play();
            break;
        case 'k':
            const somK = document.getElementById('audioK');
            console.log(somK);
            somK.play();
            break;
        case 'l':
            const somL = document.getElementById('audioL');
            console.log(somL);
            somL.play();
            break;
        defalt:
            break;
    }
});
document.addEventListener('DOMContentLoaded', () => {
    // Função para detectar todos os cliques nos botões
    const drums = document.querySelectorAll('.drum');

    drums.forEach(drum => {
        drum.addEventListener('click', () => {
            const sound = drum.getAttribute('data-sound');
            const key = drum.getAttribute('data-key');
            fazerSom(key);
            botaoAnimacao(key);
        });
    });

    // Função para detectar todos os pressionamentos de teclas
    document.addEventListener('keydown', (event) => {
        const key = event.key.toLowerCase();
        fazerSom(key);
        botaoAnimacao(key);
    });
});