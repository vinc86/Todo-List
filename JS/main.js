// SELECTORS
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const inputContainer = document.querySelector(".todo-input-box");


// EVENT LISTENERS
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", crossItem);

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
          removeBtn.innerText= "Delete";
          newItem.appendChild(removeBtn);

    }

}

//Mark the todo as completed
function crossItem(e){
    e.preventDefault();
    if(e.target.innerHTML === "Delete"){
        return;
    } else {
        e.target.classList.toggle("cross");
    }
   
}

