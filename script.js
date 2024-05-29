document.addEventListener("DOMContentLoaded", function() {
    const todoForm = document.getElementById("todo-form");
    const todosDiv = document.getElementById("todos");

    function getTodos() {
        const todos = localStorage.getItem("todos");
        return todos ? JSON.parse(todos) : [];
    }

    function saveTodos(todos) {
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    function displayTodos() {
        const todos = getTodos();
        todosDiv.innerHTML = "";
        todos.forEach((todo, index) => {
            const todoItem = document.createElement("div");
            todoItem.className = "todo-item";
            todoItem.innerHTML = `<h3>${todo.title}</h3><p>${todo.description}</p>`;
            todosDiv.appendChild(todoItem);
        });
    }

    function handleAddTodo(event) {
        event.preventDefault();
        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        const todos = getTodos();
        todos.push({ title, description });
        saveTodos(todos);
        displayTodos();
        todoForm.reset();
    }

    todoForm.addEventListener("submit", handleAddTodo);
    displayTodos();
});
