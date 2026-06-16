class Task {
    public title: string;
    public description: string;
    private _createdBy: string;
    public completed: boolean = false;

    constructor(title: string, description: string, createdBy: string, completed: boolean = false) {
        this.title = title;
        this.description = description;
        this._createdBy = createdBy;
        this.completed = completed;
    }

    public get createdBy(): string {
        return this._createdBy;
    }

    public toggleStatus(): void {
        this.completed = !this.completed;
    }

    public getDetails(): string {
        // const isCompleted = this.completed === true ? 'Completed' : 'Pending';
        return `Task: ${this.title} - ${this.description} - ${this.completed ? 'Completed' : 'Pending'}`;
    }

    static createSampleTasks(): Task[] {
        const tasks: Task[] = [
            new Task ('Buy groceries', 'Milk, eggs, bread', 'Alice'),
            new Task('Finish homework', 'Math exercises page 42', 'Bob')
        ];

        return tasks;
    }
}

const tasks = Task.createSampleTasks();
tasks.forEach(task =>
    console.log(task.getDetails()));