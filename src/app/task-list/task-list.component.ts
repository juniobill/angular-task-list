import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  // tasks = [];

  /* foi criado servico e colocadno no providers*/
  // @Input()
  // tasks;


  tasks: Array<Task>;

  constructor(private taskService: TaskService) {
    this.taskService.tasks.push({
      name: 'junio',
      value: 18,
      date_launch: '2018-08-08'
    });
    this.tasks = this.taskService.tasks;
  }


  ngOnInit() {
  }

}
