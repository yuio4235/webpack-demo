import _ from "lodash";

function component() {
    const element = document.createElement('div');

    const button = document.createElement('button');

    const br = document.createElement('br');

    button.innerHTML = 'Click me and look at the console!';

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.appendChild(br);
    element.appendChild(button);

    //Note that becoz a network request is involved, some indicating
    // of loading would be shown in a production-level site/app.
    button.onclick = 
        (e) => import(/* webpackChunkName: "print" */ './print')
                .then((module) => {
                    const print = module.default;
                    print();
                })
                .catch(err => console.log(err));

    return element;                
}

document.body.appendChild(component());