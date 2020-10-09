
const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
    console.log('Breathe in');
    text.innerText = 'Breathe in';
    container.className = 'container grow';

    setTimeout(() => {
        console.log('Hold');
        text.innerText = 'Hold';

        setTimeout(() => {
        console.log('Breathe out');
        text.innerText = 'Breathe out';
        container.className = 'container shrink';

        }, holdTime)
    }, breatheTime)
}

setInterval(breathAnimation, totalTime);