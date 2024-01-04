import { add, format } from 'date-fns';
import {soonList, futureList} from "./todo-list";
import { Todo } from './todo-item';

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
  refreshLists();

  dialog.close(); // Close the dialog after adding a task
});

function refreshLists(){
  shortTerm.innerHTML = '';
  longTerm.innerHTML = '';
  soonList.forEach((element) => {
    shortTerm.appendChild(createTodoDiv(element));
  });
  futureList.forEach((element) => {
    longTerm.appendChild(createTodoDiv(element));
  });
}

function createTodoDiv(todo){
  const itemDiv = document.createElement('div');
    itemDiv.classList.add('todo', todo.priority);

  const task = document.createElement('h4');
  task.classList.add('task');
  task.innerHTML = todo.title;

  const description = document.createElement('p');
  description.classList.add('description');
  description.innerHTML = todo.desc;

  const dateDue = document.createElement('p');
  dateDue.innerHTML = format(todo.dueDate);
  dateDue.classList.add('dueDate');

  const priority = document.createElement('p');
  priority.innerHTML = todo.priority;
  priority.classList.add('priority');

  itemDiv.appendChild(task);
  itemDiv.appendChild(description);
  itemDiv.appendChild(dateDue);
  itemDiv.appendChild(priority);

  return itemDiv;
}