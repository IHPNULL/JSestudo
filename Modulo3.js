var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');


var todos = [
    'Fazer cafe',
    'dormir',
    'dormir',
    'estudar',
    'fazer robos'
];


function renderTodos() {
    listElement.innerHTML = '';

    for (todo of todos) {
        var todoElement = document.createElement('li');
        var excluirTodo = document.createElement('a');
        var todoText = document.createTextNode(todo);
        var cont = todos.indexOf(todo);

        excluirTodo.setAttribute(" Excluir");
        excluirTodo.setAttribute('#');
        excluirTodo.setAttribute('onclick', 'deleteTodo(' + cont + ')');

        todoElement.appendChild(todoText);
        todoElement.appendChild(excluirTodo);
        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo() {
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
}