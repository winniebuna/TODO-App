//SELECTORS
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//EVENT LISTENERS
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

//FUNCTIONS
function addTodo(event) {
  //prevent form from submitting
  event.preventDefault();
  //Todo DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //create LI
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  //CHECK MARK button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  //TRASH CAN button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  //append to ul list
  todoList.appendChild(todoDiv);
  //clear todo input value
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;
  //delete todo item
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    //animation on delete
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
  //check mark itrm
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.dispaly = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.dispaly = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.dispaly = "none";
        }
        break;
    }
  });
}
