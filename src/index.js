import { add } from 'date-fns';
import {soonList, futureList} from "./todo-list";

const shortTerm = document.getElementById('short-term');
const longTerm = document.getElementById('long-term');
const addButton = document.getElementById('addTask');
const closeButton = document.getElementById('cancel');
const dialog = document.getElementById('todoForm');

addButton.addEventListener('click', () => {
    dialog.showModal();
  });

  closeButton.addEventListener('click', () => {
    dialog.close();
  });


function showLists(soon, future){
    soon.array.forEach(element => {
        
    });
}

document.getElementById("todoForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const desc = document.getElementById("desc").value;
  const due = document.getElementById("dueDate").value;
  const priority = document.getElementById("priority").value;

  let newTodo = new Todo(title, desc, due, priority);
  addItem(newTodo);

  dialog.close(); // Close the dialog after adding a task
});