export class Todo{
    static idCounter = 0;

    constructor(title, desc, due, priority){
        this.id = ++TodoItem.idCounter;
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
