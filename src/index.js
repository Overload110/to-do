import {format } from 'date-fns';
import {soonList, futureList, addItem, removeItem} from "./todo-list";
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

document.getElementById("todoForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const desc = document.getElementById("desc").value;
  const due = document.getElementById("dueDate").value;
  console.log(due);
  const priority = document.getElementById("priority").value;

  let newTodo = new Todo(title, desc, due, priority);
  addItem(newTodo);
  showLists();

  dialog.close(); // Close the dialog after adding a task
});

function showLists(){
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
    itemDiv.id = todo.id;

  const task = document.createElement('h4');
  task.classList.add('task');
  task.innerHTML = todo.title;

  const description = document.createElement('p');
  description.classList.add('description');
  description.innerHTML = todo.desc;

  const dateDue = document.createElement('p');
  dateDue.innerHTML = format(todo.dueDate, 'MMM dd, yyyy');
  dateDue.classList.add('dueDate');

  const priority = document.createElement('p');
  priority.innerHTML = todo.priority;
  priority.classList.add('priority');

  const remove = document.createElement('button');
  remove.innerHTML = "Remove";
  remove.addEventListener('click', function() {
    removeItem(todo);
    itemDiv.remove();
  });

  itemDiv.appendChild(task);
  itemDiv.appendChild(description);
  itemDiv.appendChild(dateDue);
  itemDiv.appendChild(priority);
  itemDiv.appendChild(remove);

  return itemDiv;
}

showLists();