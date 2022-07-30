
// Global variables

let toDoItems = [];
let ToDolistItems = document.querySelector('.toDoListItems');


// Submit Button
const submitButton = document.getElementById('js-adding-todo');
submitButton.addEventListener('click', addNewFunction);

// function to add  new item and necessary buttons into the list
function addNewFunction(){

  const newRadio = '<input type="radio"></input>';
  const newIconsDiv = document.createElement('div');
  newIconsDiv.className = 'icon'
  const newIcons = '<img  src="./assets/editIcon.svg" alt="edit" class="editButton"><img  src="./assets/OrangeBin.svg" alt="delete" class="deleteButton">'
  newIconsDiv.innerHTML = newIcons;  


  // get data from "myinput" text box
  const userInput = document.getElementById("js-ToDo-input");
  
  // Build list element
  const ulItem = document.getElementById('js-list');
  const newLiItem = document.createElement('li');
  ulItem.appendChild(newLiItem);
  newLiItem.innerHTML = newRadio;
  console.log(newLiItem);

  const newInput = document.createElement('input');
  newInput.type = 'text';
  newInput.value = userInput.value;
  newInput.disabled = true;

  newLiItem.appendChild(newInput);
  newLiItem.appendChild(newIconsDiv);
  
  //delete input text
  userInput.value = '';
  deleteTaskFunction()
 

  }

   //creat function with onclick event for the edit/delete/archiv
  //click on delet and the task is remove
  const deleteFunction = (event) => {
   event.target.parentElement.parentElement.remove()  
  }
 
  const deleteTaskFunction = () => {
    const deleteTask = document.getElementsByClassName('deleteButton');
  
  console.log(deleteTask)
  for (let i = 0; i<deleteTask.length; i++){
    deleteTask[i].addEventListener('click', deleteFunction); 

  }
  
  }
  deleteTaskFunction()
    
  
  //get data from ul
  // Now we are trying to build a function? to be able to always push text to list.
  // we declare a variable called todo (this what we will send)
  
  
 


  //toDoItems.push(todo)
  //push new data into list

  // push radio, edit and delete buttons into the list




  






