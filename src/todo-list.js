import {compareAsc, addWeeks} from "date-fns";

const soonList = [];
const futureList = [];

function addItem(todo){
    const monthAhead = addWeeks(new Date(), 4);
    if(compareAsc(todo.dueDate, monthAhead) <= 0){
        futureList.push(todo);
    }else{
        soonList.push(todo);
    }
};

function removeItem(todo){
    const indexSoon = soonList.indexOf(todo);
    if (indexSoon > -1) {
        soonList.splice(indexSoon, 1);
    }
    const indexFuture = futureList.indexOf(todo);
    if (indexFuture > -1) {
        futureList.splice(indexFuture, 1);
    }
}

export {soonList, futureList, addItem, removeItem};