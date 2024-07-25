import { Component } from '@angular/core';
import { UserService } from '../../../Services/user.service';
import { User } from '../../../Models/User';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {
  constructor(private userSvc: UserService) {}
  color: string;
  userList: User[] = this.userSvc.getAllUsers();
  getColor(val: number) {
    if (val % 2 === 0) this.color = '#ff6969';
    else this.color = '#c80036';
    return this.color;
  }
  showUser(user: User) {
    this.userSvc.onUserSelect(user);
  }
}
