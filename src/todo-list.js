import {compareAsc, addWeeks} from "date-fns";

let futureList = JSON.parse(localStorage.getItem("futureList")) || [];
let soonList = JSON.parse(localStorage.getItem("soonList")) || [];

function addItem(todo){
    const monthAhead = addWeeks(new Date(), 4);
    if(compareAsc(todo.dueDate, monthAhead) <= 0){
        futureList.push(todo);
    }else{
        soonList.push(todo);
    }

    // Save to local storage
    localStorage.setItem("futureList", JSON.stringify(futureList));
    localStorage.setItem("soonList", JSON.stringify(soonList));
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

    // Save to local storage
    localStorage.setItem("futureList", JSON.stringify(futureList));
    localStorage.setItem("soonList", JSON.stringify(soonList));
}

export {soonList, futureList, addItem, removeItem};