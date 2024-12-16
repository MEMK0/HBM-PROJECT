let todo = document.getElementById("todoInput");
let doDateInput = document.getElementById("do-date");
let addBtn = document.getElementById("add-todo-btn");

// Retrieve or initialize the todo list from localStorage
let todoList = JSON.parse(localStorage.getItem('todolist')) || [];

// Event listener for adding todos
addBtn.addEventListener("click", () => {
    if (todo.value.trim() === "" || doDateInput.value.trim() === "") {
        alert("Please enter a valid todo and date!");
        return;
    }
    addToDo();
    displayToDo();
    clearInputs();
});

// Function to display todos
function displayToDo() {
    let todoListHTML = '';
    todoList.forEach((item, index) => {
        const { todo, doDate } = item;
        todoListHTML += `
        <div class = "todo-items">
            <span>${todo}</span>
            <span>${doDate}</span>
            <button data-index="${index}" class="delete-btn">Delete</button>
        </div>`;
    });

    const output = document.querySelector("#output");
    output.innerHTML = todoListHTML;

    // Add event listeners to delete buttons
    document.querySelectorAll(".delete-btn").forEach((btn) => {
        btn.addEventListener("click", (event) => {
            const index = event.target.getAttribute("data-index");
            todoList.splice(index, 1);
            localStorage.setItem('todolist', JSON.stringify(todoList));
            displayToDo();
        });
    });
}

// Function to add a todo
function addToDo() {
    let todoValue = todo.value.trim();
    let doDateValue = doDateInput.value.trim();
    todoList.push({
        todo: todoValue,
        doDate: doDateValue,
    });
    localStorage.setItem('todolist', JSON.stringify(todoList));
}

// Function to clear input fields
function clearInputs() {
    todo.value = '';
    doDateInput.value = '';
}

// Display todos on page load
displayToDo();