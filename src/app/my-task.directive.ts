import { Directive, ElementRef, HostListener, Input } from '@angular/core';

import { Task } from './task';

@Directive({
  selector: '[myTask]'
})
export class MyTaskDirective {

  private _myTask: Task;

  constructor(private el: ElementRef) {
    this.el.nativeElement.innerHTML += 'conteudo inserido';
  }

  get myTask() {
    return this._myTask;
  }

  @Input()
  set myTask(value: Task) {
    this._myTask = value;
    this.changeColorTask();
  }

  /*@Input()
  myTask: Task;*/

  @HostListener('click')
  onClick() {
    alert(this.myTask.name);
  }

  changeColorTask() {
    this.el.nativeElement.style.color = this.myTask.value > 5 ? 'green' : 'red';
  }
}
