import { Injectable, EventEmitter } from '@angular/core';
import { User } from '../Models/User';
import { LoggerService } from './logger';

@Injectable()
export class UserService {
  constructor(private logService: LoggerService) {}

  users: User[] = [
    new User('Pagal', 'Male', 'Monthly', 'Active'),
    new User('Udhay', 'Male', 'Quarterly', 'InActive'),
    new User('Vetri', 'Male', 'Yearly', 'Active'),
  ];
  event: EventEmitter<User> = new EventEmitter<User>();
  getAllUsers() {
    return this.users;
  }
  createUser(name: string, gender: string, subType: string, status: string) {
    let user = new User(name, gender, subType, status);
    this.users.push(user);
    this.logService.logMessage(user.name, user.status);
  }
  onUserSelect(user: User) {
    this.event.emit(user);
  }
}
