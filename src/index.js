
function component() {
    const element = document.createElement('div');

    const button = document.createElement('button');

    button.innerHTML = 'Click me to change the background color of body';

    const br = document.createElement('br');

    button.onclick = () => {
        this.alert("wow, I can alert in webpack. I hate console.log().");
    };

    element.appendChild(button);

    return element;                
}

document.body.appendChild(component());