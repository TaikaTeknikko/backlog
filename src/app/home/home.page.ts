import { Component, OnInit } from '@angular/core';
import { Task } from 'src/task';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  inprogress = Array<Task>();
  todo = Array<Task>();
  finished = Array<Task>();

  constructor(public tasksService: TasksService) {}

  ngOnInit() {
    this.todo = this.tasksService.todo;
    this.inprogress = this.tasksService.inprogress;
    this.finished = this.tasksService.finished;
  }

  doReorder(ev: any) {
    ev.detail.complete();
  }
}
