// const body = document.getElementsByTagName("body")[0]; // [<body>, ...], aí teriamos que acessar pelo indice 0. 
// body.innerHTML = `<h1>Hello World</h1>`

const handleClick = () => {
    const body = document.querySelector("body");
    body.innerHTML = `<h1>Hello World!</h1>
                        <h2>Hello JavaScript!</h2>`;

    body.style.backgroundColor = '#000';
    body.style.color = '#fff';

}

// const el = document.getElementById("btn-start");
// el.addEventListener('click', () => handleClick());




//handleClick está sem () pois se não executa automaticamente sem eu ter clicado.
//a outra opção é colocar dentro de uma arrow function, porém o arrow function só se eu precisasse passar algum argumento pra ela, tipo:
// addEventListener('click', () => handleClick());  e ai o argumento iria dentro do primeiro () para o ultimo () em handleclick

/* funciona tbm fora da convenção:

document.getElementById("btn-start");
addEventListener('click', handleClick);  


*/


const el = document.getElementById("btn-start");
el.addEventListener('mouseover', () => {
    el.style.position = "absolute";
    el.style.top = `${Math.floor(Math.random() * (window.innerHeight - 18))}px`;
    el.style.left = `${Math.floor(Math.random() * (window.innerWidth - 36))}px`;
});