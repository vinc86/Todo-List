// SELECTORS
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const inputContainer = document.querySelector(".todo-input-box");

// EVENT LISTENERS
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", crossOrDelete);

// FUNCTIONS

//Add new Todo
function addTodo(e) {
  e.preventDefault();

  //Grab the imput Value
  const newTodo = todoInput.value;
  const errorMsg = document.querySelector(".error");

  if (!newTodo) {
    errorMsg.textContent = "Please add an Item!";
    errorMsg.style.transform = "scale(1)";
  } else {
    errorMsg.textContent = " ";
    errorMsg.style.transform = "scale(0)";

    //create list-item
    const newItem = document.createElement("li");
    newItem.classList.add("todo");

    //append to ul
    todoList.appendChild(newItem);

    //print the text from the input fieconsole.log(removeBtn);ld
    newItem.innerText = newTodo;

    //clear the input field
    todoInput.value = "";

    //Add remove button
    const removeBtn = document.createElement("button");
    removeBtn.classList.add("removeBtn");
    removeBtn.innerText = "Delete";
    newItem.appendChild(removeBtn);
  }
}

//Mark the todo as completed or delete it
function crossOrDelete(e) {
  e.preventDefault();
  const item = e.target;
  /* Alternative 
        if(item.classList[0]==="removeBtn"){
            item.parentElement.remove();
        }
    */
  if (item.innerHTML === "Delete") {
    item.parentElement.classList.add("slide");
    item.parentElement.addEventListener("transitionend", function () {
      item.parentElement.remove();
    });
  } else {
    item.classList.toggle("cross");
  }
}
