
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
  const newIcons = '<img  src="./assets/editIconGray.svg" alt="archiv"><img  src="./assets/lightOrangeBin.svg" alt="delete">'
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




  
  //get data from ul
  // Now we are trying to build a function? to be able to always push text to list.
  // we declare a variable called todo (this what we will send)
  
  
 


  //toDoItems.push(todo)
  //push new data into list

  // push radio, edit and delete buttons into the list




  


}



