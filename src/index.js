
const {file ,parse} = require('./globals.js');

function component() {
    const element = document.createElement('div');

    const button = document.createElement('button');

    button.innerHTML = 'Click me to change the background color of body';

    const br = document.createElement('br');

    button.onclick = () => {
        console.log('file: ' + file);
        
        console.log("------> call parse(): ");
        parse();
    };

    element.appendChild(button);

    return element;                
}

document.body.appendChild(component());