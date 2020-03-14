import _ from "lodash";

function component() {
    const element = document.createElement('div');

    const button = document.createElement('button');

    button.innerHTML = 'Click me to change the background color of body';

    const br = document.createElement('br');

    button.onclick = () => {
        $("body").css("background-color", "red");
    };

    element.appendChild(button);

    return element;                
}

document.body.appendChild(component());