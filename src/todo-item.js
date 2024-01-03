export class Todo{
    constructor(title, desc, due, priority){
        this.title = title;
        this.desc = desc;
        this.dueDate = due;
        this.priority = priority;
        this.done = false;
    }

    toggleDone(){
        this.done = !done;
    }

}
