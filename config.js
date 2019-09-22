const $button = document.querySelector('button');
const $body = document.querySelector('body');
const $audio = document.querySelector('audio');


function activeBday() {
    $button.remove();

    const title = createBdayTitle();
    $body.appendChild(title);
    $body.classList.add('blink-screen');
    $body.classList.remove('ballon')
    $body.classList.add('banana');

    $audio.play();
}



function createBdayTitle() {
    const title = document.createElement('h1');
    title.textContent = 'Parabéns Vitinho';
    title.classList.add('blink-title');

    return title;
}
