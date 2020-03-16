var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');


var todos = JSON.parse(localStorage.getItem('list_todos')) || [];


function renderTodos() {
    listElement.innerHTML = '';

    for (todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var excluirTodo = document.createElement('a');

        excluirTodo.setAttribute('href', '#');
        var cont = todos.indexOf(todo);

        excluirTodo.setAttribute('onclick', 'deleteTodo(' + cont + ')');
        var excluirtext = document.createTextNode(' Excluir');

        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);
        todoElement.appendChild(excluirTodo);
        excluirTodo.appendChild(excluirtext);
    }
}
renderTodos();

function addTodo() {
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    saveToStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}