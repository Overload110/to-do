import {compareAsc, format, addWeeks} from "date-fns";

const soonList = [];
const futureList = [];

function addItem(todo){
    const monthAhead = addWeeks(new Date(), 4);
    if(compareAsc(todo.dueDate, monthAhead)){
        futureList.push(todo);
    }else{
        soonList.push(todo);
    }
};

function removeItem(todo){
    soonList = soonList.filter(todo);
    futureList = futureList.filter(todo);
}

export {soonList, futureList, addItem, removeItem};