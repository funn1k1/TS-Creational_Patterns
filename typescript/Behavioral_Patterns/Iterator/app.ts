class Task {
  constructor(public priority: number) {}
}

class TaskList {
  private tasks: Task[] = [];

  public addTask(task: Task) {
    this.tasks.push(task);
  }

  public getTasks() {
    return this.tasks;
  }

  public count() {
    return this.tasks.length;
  }

  public sortByAsc() {
    this.tasks = this.tasks.sort((a, b) => a.priority - b.priority);
  }

  public getIterator() {
    return new PriorityTaskIterator(this);
  }
}

interface IIterator<T> {
  current(): T;
  next(): T;
  prev(): T;
  index(): number;
}

class PriorityTaskIterator implements IIterator<Task> {
  private position: number = 0;
  private taskList: TaskList;

  constructor(taskList: TaskList) {
    taskList.sortByAsc();
    this.taskList = taskList;
  }

  current(): Task {
    return this.taskList.getTasks()[this.position];
  }

  next(): Task {
    const length = this.taskList.count();
    if (this.position < length - 1) {
      this.position += 1;
    }
    return this.taskList.getTasks()[this.position];
  }

  prev(): Task {
    if (this.position > 0) {
      this.position -= 1;
    }
    return this.taskList.getTasks()[this.position];
  }

  index(): number {
    return this.position;
  }
}

const taskList = new TaskList();
taskList.addTask(new Task(2));
taskList.addTask(new Task(1));
taskList.addTask(new Task(3));
const iterator = taskList.getIterator();
console.log(iterator.current());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.prev());
console.log(iterator.prev());