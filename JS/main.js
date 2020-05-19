// SELECTORS
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const inputContainer = document.querySelector(".todo-input-box");
const select = document.querySelector(".select-todo");
const infoBtn = document.querySelector(".fa-info-circle");
const children = todoList.querySelectorAll("li");
// EVENT LISTENERS
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", crossOrDelete);
select.addEventListener("click", selectTodo);

// FUNCTIONS

//Add new Todo
function addTodo(e) {
  e.preventDefault();

  //Grab the input Value
  const newTodo = todoInput.value;
  const errorMsg = document.querySelector(".error");

  if (!newTodo) {
    errorMsg.textContent = "Please add an Item!";
    errorMsg.style.transform = "scale(1)";
    return;
  }
  errorMsg.textContent = " ";
  errorMsg.style.transform = "scale(0)";

  //create list-item
  const newItem = document.createElement("li");
  newItem.classList.add("todo");

  //append to ul
  todoList.appendChild(newItem);

  //print the text from the input field
  newItem.innerText = newTodo;

  //clear the input field
  todoInput.value = "";

  //Add remove button
  const removeBtn = document.createElement("button");
  removeBtn.classList.add("removeBtn");
  removeBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
  newItem.appendChild(removeBtn);
}

//Mark the todo as completed or delete it
function crossOrDelete(e) {
  e.preventDefault();
  const item = e.target;

  if (item.classList[0] === "removeBtn") {
    item.parentElement.classList.add("slide");
    item.parentElement.addEventListener("transitionend", function () {
      item.parentElement.remove();
    });
  } else {
    item.classList.toggle("cross");
  }
}

function selectTodo(e) {
  // select the value of the option
  let selection = e.target.value;

  // display all the tasks in the list-item
  if (selection === "all") {
    for (let i = 0; i < children.length; i++) {
      children[i].style.display = "block";
    }
  } // display only the completed tasks
  else if (selection === "completed") {
    for (let i = 0; i < children.length; i++) {
      let childrenClass = children[i].classList;
      console.log(childrenClass);
      if (childrenClass.contains("cross")) {
        children[i].style.display = "block";
      } else {
        children[i].style.display = "none";
      }
    }
  } else {
    // display only the not completed tasks
    for (let i = 0; i < children.length; i++) {
      let childrenClass = children[i].classList;
      if (!childrenClass.contains("cross")) {
        children[i].style.display = "block";
      } else {
        children[i].style.display = "none";
      }
    }
  }
}

/*   */
