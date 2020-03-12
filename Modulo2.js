// function alerta(string) {
//     alert(string);
// }

// var inputElement = document.querySelector('input[name=nome]');
// var btnElement = document.querySelector('button.botao');

// function criaCaixa() {

//     var randomColor = Math.floor(Math.random() * 16777215).toString(16);

//     /*
//     var elem = document.createElement('div');
//     var criarElemento = document.querySelector('#app');
//     criarElemento.appendChild(elem);
//     elem.setAttribute('class', 'box');
//     elem.setAttribute('id', "a");
//     */

//     var boxElement = document.createElement('div');
//     boxElement.setAttribute('class', 'box');
//     boxElement.setAttribute('style', 'background-color:#' + randomColor + ';');
//     boxElement.setAttribute('id', "a" + randomColor);
//     boxElement.setAttribute("onclick", 'mudarCor(this)');
//     boxElement.style.width = 100;
//     boxElement.style.height = 100;
//     boxElement.style.margin = 10;
//     boxElement.style.backgroundColor = getRandomColor();

//     var criarElemento = document.querySelector('#app');
//     criarElemento.appendChild(boxElement);

// }

// function mudarCor(el) {
//     el.style.backgroundColor = getRandomColor();
// }

// function getRandomColor() {
//     var letters = "0123456789ABCDEF";
//     var color = "#";
//     for (var i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

// /*
// btnElement.onclick = function() {
//     var text = inputElement.value;
//     console.log(text);
// }
// */