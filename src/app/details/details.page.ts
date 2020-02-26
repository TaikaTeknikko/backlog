import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  title: string;
  text: string;

  constructor(public activatedRoute: ActivatedRoute, public taskService: TasksService) {

  }

  ngOnInit() {
    const id: number = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    let display: any = this.taskService.getElement(id);

    this.title = display.title;
    this.text = display.text;
  }

}
