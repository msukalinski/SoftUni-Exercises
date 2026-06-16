class HomeRenovation {
    constructor(budget) {
        this.budget = Number(budget);
        this.tasks = [];
        this.completedTasks = [];
    }

    addTask(description, cost, priority) {
        cost = Number(cost);
        priority = Number(priority);

        if (cost <= 0) {
            return;
        }

        if (priority <= 0) {
            return;
        }

        if (cost > this.budget) {
            return `Not enough budget to add '${description}' task.`;
        }

        this.tasks.push({ description, cost, priority });
        this.budget -= cost;

        return `The task '${description}' has been successfully added to the renovation plan.`;
    }

    markTaskAsCompleted(description) {
        const findTask = this.tasks.find(task => task.description === description);

        if (!findTask) {
            throw Error(`Task '${description}' not found in the renovation plan.`);
        }

        this.completedTasks.push(findTask);
        this.tasks = this.tasks.filter(task => task.description !== description);

        return `The task '${description}' has been successfully completed.`;
    }

    getPriorityTasksCount(minimalPriority) {
        minimalPriority = Number(minimalPriority);

        if (minimalPriority <= 0) {
            return 'The priority cannot be zero or negative.';
        }

        const filterPriorityTasks = this.tasks.filter(task => task.priority >= minimalPriority);

        if (filterPriorityTasks.length === 0) {
            return `No tasks found with priority ${minimalPriority} or higher.`;
        }

        return `You have ${filterPriorityTasks.length} tasks to prioritize.`;
    }

    renovationSummary() {
        if (this.completedTasks.length === 0) {
            throw Error('No tasks have been completed yet!');
        }

        let outputMsg = [];

        outputMsg.push(`Budget left $${this.budget}.`);
        outputMsg.push(`You have completed ${this.completedTasks.length} tasks.`);
        outputMsg.push('Pending tasks in the renovation plan:');

        this.tasks.forEach(task => {
            outputMsg.push(`${task.description} - Cost: ${task.cost}, Priority: ${task.priority}`);
        });

        return outputMsg.join('\n');
    }
}