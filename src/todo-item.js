export class Todo{
    static get idCounter() {
        return parseInt(localStorage.getItem('idCounter')) || 0;
    }

    static set idCounter(value) {
        localStorage.setItem('idCounter', value);
    }

    constructor(title, desc, due, priority){
        this.id = ++Todo.idCounter;
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
