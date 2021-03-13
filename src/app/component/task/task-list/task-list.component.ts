import { Component, OnInit } from '@angular/core';
import { Task } from '../../../model/task';
import { TaskService } from '../../../service/task/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[]
  newTask: Task

  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit() {
    this.taskService.findAll().subscribe(data => this.tasks = data);
    this.newTask = new Task();
  }

  changeCompleted(task: Task) {
    console.log(task.completed);
    this.taskService.update(task);
  }

  add() {
    console.log(this.newTask.description);
    this.taskService.create(this.newTask);
    window.location.reload();
  }

}
