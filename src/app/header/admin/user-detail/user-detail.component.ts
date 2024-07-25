import { Component, inject } from '@angular/core';
import { User } from '../../../Models/User';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../Services/user.service';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css',
})
export class UserDetailComponent {
  selectedUser: User;
  userService = inject(UserService);

  ngOnInit() {
    this.userService.event.subscribe((user: User) => {
      this.selectedUser = user;
      console.log(user.gender);
    });
  }
}
