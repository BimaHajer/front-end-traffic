import { Component ,OnInit} from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router'; 
export interface User {
  id?: number;
  name: string;
  email: string;
}
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  users: any[] = [];  

  constructor(
    private router: Router, 
    private userService: UserService 
  ) {}

  ngOnInit(): void {
    this.getUsers();  
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(
      (data: any[]) => {
        this.users = data;  
      },
      error => {
        console.error('Error fetching users', error);  
      }
    );
  }

  updateUser(userId: number): void {
    this.router.navigate(['/user-update', userId]);  
  }

  deleteUser(userId: number): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(userId).subscribe(
        () => {
          this.getUsers();  
        },
        error => {
          console.error('Error deleting user', error);  
        }
      );
    }
  }
}
