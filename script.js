const dino = document.querySelector ('.dino'); /* constante nao pode ser sobescrita*/
const background = document.querySelector('.background');
let isJumping = false;
let position = 0;

function handleKeyUp(event) {
    if (event.keyCode === 32 ) {
        if (!isJumping) {
        jump();
        }
    }
}

function jump() {
    
    isJumping = true;

    let upInterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upInterval);
            //Descendo
            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
                }else {
                position -= 20;
                dino.style.bottom = position + 'px';
                }
            }, 10);
        }else {
        //Subindo
        position += 20;
        dino.style.bottom = position + 'px';
        }
    }, 10);
}
function createCactus(){
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random() * 7000;

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus); 

    let leftInterval = setInterval(() => {
        if (cactusPosition < -60) {
            clearInterval(leftInterval);
            background.removeChild(cactus);
        } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60){
            //GameOver
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Fim de Jogo</h1>';
        }else{

        
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20);

    setTimeout(createCactus, randomTime); //recursivo, chamando uma função dentro dela

}

createCactus(); //quando o jogo começa, ja cria o cacto


document.addEventListener('keyup', handleKeyUp);
