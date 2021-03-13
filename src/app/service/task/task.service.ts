import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../../model/task';

@Injectable()
export class TaskService {

  private tasksUrl: string;
  private tasks: Observable<Task[]>

  constructor(private http: HttpClient) {
    this.tasksUrl = 'http://localhost:8080/api/tasks';
  }

  public findAll(): Observable<Task[]> {
   return this.http.get<Task[]>(this.tasksUrl);   
  }

  public update(task: Task) {
    return this.http.put(this.tasksUrl+"/"+task.id, task).subscribe(() => console.log("task updated"))
  }

  public create(task: Task) {
    return this.http.post<Task>(this.tasksUrl, task).subscribe(() => console.log("task created"))
  }

}
