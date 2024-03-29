import {format } from 'date-fns';
import {getItemsByDate, addItem, removeItem, save} from "./todo-list";
import { Todo } from './todo-item';
import './style.css';
import * as datedreamer from 'datedreamer';

const listDiv = document.getElementById('list');
const addButton = document.getElementById('addTask');
const closeButton = document.getElementById('cancel');
const submitButton = document.getElementById('submit');
const dialog = document.getElementById('todoDiag');

addButton.addEventListener('click', () => {
    dialog.showModal();
});

closeButton.addEventListener('click', (e) => {
  e.preventDefault();
  const form = document.getElementById("todoForm");

  form.reset();
  dialog.close();
});

dialog.addEventListener('click', function(e) {
  if (e.target === dialog) {
    dialog.close();
  }
});

dialog.addEventListener("submit", function(e) {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const desc = document.getElementById("desc").value;
  const due = document.getElementById("dueDate").value;
  console.log(due);
  const priority = document.getElementById("priority").value;
  const form = document.getElementById("todoForm");
  console.log(!isNaN(new Date(due)));
  if(!isNaN(new Date(due))){
    let newTodo = new Todo(title, desc, due, priority);
    addItem(newTodo);

    form.reset()
    dialog.close(); // Close the dialog after adding a task
  }
});

function showLists(date){
  listDiv.innerHTML = '';
  const dateList = getItemsByDate(date);
  console.log(dateList);
  dateList.forEach((element) => {
    listDiv.appendChild(createTodoDiv(element));
  });
}

function createTodoDiv(todo){
  const itemDiv = document.createElement('div');
    itemDiv.classList.add('todo');
    if(!todo.done){
      itemDiv.classList.add(todo.priority);
    }else{
      itemDiv.classList.add('done');
    }
    itemDiv.id = todo.id;

  const task = document.createElement('h4');
  task.classList.add('task');
  task.innerHTML = `Task: ${todo.title}`;

  const description = document.createElement('p');
  description.classList.add('description');
  description.innerHTML = todo.desc;

  const dateDue = document.createElement('p');
  dateDue.innerHTML = `Due: ${format(new Date(todo.dueDate.replace(/-/g, '/')), 'MMM dd, yyyy')}`;
  dateDue.classList.add('dueDate');

  const priority = document.createElement('p');
  priority.innerHTML = `Priority: ${todo.priority}`;
  priority.classList.add('priority');

  const remove = document.createElement('button');
  remove.innerHTML = "X";
  remove.addEventListener('click', function() {
    removeItem(todo);
    itemDiv.remove();
  });

  const doneBox = document.createElement('input');
  doneBox.type = "checkbox";
  doneBox.id = "doneBox" + itemDiv.id;
  doneBox.checked = todo.done;
  const doneLabel = document.createElement('label');
  doneLabel.setAttribute('for', doneBox.id);
  doneLabel.innerHTML = 'Done: '
  doneBox.addEventListener('change', function() {
    todo.done = this.checked;
    if(todo.done){
      itemDiv.classList.remove(todo.priority);
      itemDiv.classList.add('done');
    }else{
      itemDiv.classList.add(todo.priority);
      itemDiv.classList.remove('done');
    }
    save();
  });

  itemDiv.appendChild(doneLabel);
  itemDiv.appendChild(doneBox);
  itemDiv.appendChild(task);
  itemDiv.appendChild(description);
  itemDiv.appendChild(dateDue);
  itemDiv.appendChild(priority);
  itemDiv.appendChild(remove);

  return itemDiv;
}
new datedreamer.calendar({
  element: "#calendar",
  theme: 'lite-purple',
  onChange: (e) => {
    console.log(format(e.detail, 'MMddyyyy'));
    showLists(e.detail);
  },
  onRender: (e) => {
    console.log(e.detail.calendar);
    showLists(new Date());
  }
})
//change to one list, filter the list and show based on calendar day clicked.