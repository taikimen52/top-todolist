class Todo {
    constructor(title, desc = null, dueDate = null, status = null, priority =null) {
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.status = status;
        this.priority = priority;
    }
}

const test = new Todo("testissue");
console.log(test);
