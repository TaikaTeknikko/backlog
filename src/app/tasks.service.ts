import { Injectable } from '@angular/core';
import { Task } from 'src/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  inprogress = Array<Task>();
  todo = Array<Task>();
  finished = Array<Task>();

  constructor() {
    this.todo.push(new Task(1, "Task 1", "Some test content..."));
    this.todo.push(new Task(2, "Task 2", "Some test content..."));
    this.todo.push(new Task(3, "Task 3", "Some test content..."));
    this.todo.push(new Task(4, "Task 4", "Some test content..."));
    this.inprogress.push(new Task(5, "Task 5", "Some test content..."));
    this.inprogress.push(new Task(6, "Task 6", "Some test content..."));
    this.inprogress.push(new Task(7, "Task 7", "Some test content..."));
    this.finished.push(new Task(8, "Task 8", "Some test content..."));
    this.finished.push(new Task(9, "Task 9", "Some test content..."));
    this.finished.push(new Task(10, "Task 10", "Some test content..."));
  }

  getElement(id: number) {
    for (const ip of this.inprogress) {
      if (ip.id === id) {
        return ip;
      }
    }
    for (const td of this.todo) {
      if (td.id === id) {
        return td;
      }
    }
    for (const fs of this.finished) {
      if (fs.id === id) {
        return fs;
      }
    }
  }

  addTask(title: string, text: string) {
    const id: number = this.inprogress.length + this.todo.length + this.finished.length;
    this.todo.push(new Task(id, title, text));
  }
}
