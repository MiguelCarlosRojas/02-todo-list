import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../interfaces/task.interface';
import { take } from 'rxjs';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.css']
})

export class TaskInputComponent {
  @Output() createTask: EventEmitter<any> = new EventEmitter<any>();
  public newTask: string = '';
  addTask(): void {
    const task: Task = {
      title: this.newTask,
      completed: false,
    };
    this.createTask.emit(task);
  }
}
