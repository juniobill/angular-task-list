import { Component } from '@angular/core';

// import { Task } from './task';
// import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tarefas';
  // tasks: Array<Task>;

  /*
  sem ter criado o serviço:*/
  /*tasks: Array<Task> = [
    {name: 'Cozinhar', value: 50, date_launch: '2018-05-08'}
  ];*/


  constructor() {
    /*let taskService = new TaskService();
    this.tasks = taskService.tasks;

    this.tasks.push(
      {name: 'Por padrao', value: 50, date_launch: '2018-05-08'}
    );*/
  }
}
