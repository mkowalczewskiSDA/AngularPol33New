import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './component/user/user-form/user-form.component';
import { UserListComponent } from './component/user/user-list/user-list.component';

const routes: Routes = [
  { path: 'users', component: UserListComponent},
  { path: 'addUser', component: UserFormComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
