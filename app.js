function loadTodos() {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

function saveTodos(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function renderTodos() {
    const todos = loadTodos();
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${todo}</span>
            <button class="delete-btn" onclick="deleteTodo(${index})"></button>
        `;
        todoList.appendChild(li);
    });
}

function addTodo() {
    const input = document.getElementById('todoInput');
    const todoText = input.value.trim();
    if (!todoText) {
        alert('Please enter a todo item!');
        return;
    }
    const todos = loadTodos();
    todos.push(todoText);
    saveTodos(todos);
    input.value = '';
    renderTodos();
}

function deleteTodo(index) {
    const todos = loadTodos();
    todos.splice(index, 1);
    saveTodos(todos);
    renderTodos();
}

window.onload = renderTodos;