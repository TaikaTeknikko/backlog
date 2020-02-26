import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  title: string;
  text: string;

  constructor(public router: Router, public taskService: TasksService) {}

  ngOnInit() {
  }

  save() {
    this.taskService.addTask(this.title, this.text);
    this.router.navigateByUrl('/home');
  }
  close() {
    this.router.navigateByUrl('/home');
  }
}
