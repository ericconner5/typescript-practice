class Task {
  done: boolean = false;

  constructor(public description: string, public priority: string) {}
}

let tasks: Task[] = [];
tasks.push(new Task('do the dishes', 'medium'));
let job: Task = new Task('eat a pizza', 'extreme');

console.log(job)

tasks.push(job);

console.log(tasks);
