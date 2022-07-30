
// Here is our list of ToDos that have been entered into our list
let toDoItems = [];
let ToDolistItems = document.querySelector('.toDoListItems');
let 

const submitButton = document.getElementById('js-adding-todo')
submitButton.addEventListener('click', addNewFunction)
// function to add  new item and necessary buttons into the list
function addNewFunction(){
    
  // get data from "myinput" text box
  const input = document.getElementById("js-ToDo-input").value;
  
  const newListItem = document.getElementById('js-list');
  
  const newItem = input.createElement('li')
  newItem.innerHTML = input
  newListItem.appendChild(newItem);

  
  
  //get data from ul
  // Now we are trying to build a function? to be able to always push text to list.
  // we declare a variable called todo (this what we will send)
  
  
 


  //toDoItems.push(todo)
  //push new data into list

  // push radio, edit and delete buttons into the list




  


}



