import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAddComponent } from './user-add/user-add.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';

const routes: Routes = [
  { path: 'user/add', component: UserAddComponent },       
  { path: 'user/list', component: UserListComponent },      
  { path: 'user/update', component: UserUpdateComponent },  
  
  { path: '', redirectTo: '/user/list', pathMatch: 'full' }
];

@NgModule({
    
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
