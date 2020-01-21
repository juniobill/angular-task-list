import { Component, OnInit, Input } from '@angular/core';

import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css']
})
export class TaskNewComponent implements OnInit {

  /* sem provider de servico*/
  // @Input()
  // tasks;


  task: Task = {
    name: '',
    value: 0,
    date_launch: '2018-08-05'
  };

  tasks: Array<Task>;


  constructor(private taskService: TaskService) {
    this.tasks = taskService.tasks;
  }

  ngOnInit() {
  }

  add() {
    const task = Object.assign({}, this.task);
    this.tasks.push(task);
  }

}
