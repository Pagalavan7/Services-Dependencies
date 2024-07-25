import { Component } from '@angular/core';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../Services/user.service';


@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [UserDetailComponent, UserListComponent, CommonModule, FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
  providers: [UserService],
})
export class AdminComponent {
  name: string = '';
  gender: string = 'Male';
  subType: string = 'Yearly';
  status: string = 'Active';
  constructor(private createService: UserService) {}
  onClick() {
    this.createService.createUser(
      this.name,
      this.gender,
      this.subType,
      this.status
    );
  }
}
