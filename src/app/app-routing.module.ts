import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './component/task/task-list/task-list.component';
import { UserFormComponent } from './component/user/user-form/user-form.component';
import { UserListComponent } from './component/user/user-list/user-list.component';

const routes: Routes = [
  { path: 'users', component: UserListComponent},
  { path: 'addUser', component: UserFormComponent},
  { path: 'tasks', component: TaskListComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
