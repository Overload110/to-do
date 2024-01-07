import {compareAsc, format} from "date-fns";

let todoList = JSON.parse(localStorage.getItem("todoList")) || [];

function addItem(todo){
    todoList.push(todo);

    save();
};

function removeItem(todo){
    const indexTodo = todoList.indexOf(todo);
    if (indexTodo > -1) {
        todoList.splice(indexTodo, 1);
    }
    
    save();
};

function save(){
    localStorage.setItem("todoList", JSON.stringify(todoList));
}

function getItemsByDate(date) {
    return todoList.filter(todo => todo.dueDate === format(date, 'yyyy-MM-dd'));
}

export {getItemsByDate, addItem, removeItem, save};