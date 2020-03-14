const webpackNumbers = require('danny-webpack-numbers-lib');

function component() {
    const element = document.createElement('div');

    const btn = document.createElement('button');

    btn.innerHTML = 'Click me to convert nums to words';

    btn.onclick = () => {
        console.log(webpackNumbers.numsToWord(1));
    };

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());