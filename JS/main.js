// SELECTORS
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const inputContainer = document.querySelector(".todo-input-box");


// EVENT LISTENERS
todoButton.addEventListener("click", addTodo);

// FUNCTIONS
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
          //print the text from the input field
          newItem.innerText = newTodo;
          //clear the input field
          todoInput.value = "";



          const todoItem = document.querySelector(".todo");
          todoItem.addEventListener("click", crossItem);

    }

}

function crossItem(){
   this.classList.add("cross");
   
}

