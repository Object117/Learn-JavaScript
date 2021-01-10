const todoForm = document.querySelector(".js-todoForm"),
    todoInput = todoForm.querySelector("input"),
    todoList = document.querySelector(".js-todoList");

const TODOS_LS = `toDos`;

let toDos = [];

function loadTodo() {
    const loadedTodos = localStorage.getItem(TODOS_LS);
    if(loadedTodos !== null) {
        const parseTodos = JSON.parse(loadedTodos);
        parseTodos.forEach(function(todo) {
            printTodo(todo.text);
        });
    }


}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function deleteBtn(event) {
    const btn = event.target;
    const li = btn.parentNode;
    todoList.removeChild(li);

    const cleanTodo = toDos.filter(function(todo) {
//    console.log(`todo.id is %d`, todo.id);
//    console.log(`li.id is %d`, parseInt(li.id));
 
        return todo.id !== parseInt(li.id);
    });

    toDos = cleanTodo;
    saveToDos();
}

function printTodo(toDo) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;

    span.innerText = toDo;
    delBtn.innerHTML = "X";
    delBtn.addEventListener("click", deleteBtn);
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    todoList.appendChild(li);
    const todoObj = {
        text: toDo,
        id: newId
    };
    toDos.push(todoObj);
    saveToDos();

}

function handleSubmit(event) {
    event.preventDefault();
    const currentTodo = todoInput.value;
    printTodo(currentTodo);
    todoInput.value = "";
}

function init() {
    loadTodo();
    todoForm.addEventListener("submit", handleSubmit);
}

init();