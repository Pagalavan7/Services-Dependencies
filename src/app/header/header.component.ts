import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { SubscribeService } from '../Services/subscribe.service';
import { LoggerService } from '../Services/logger';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, CommonModule, HomeComponent, AdminComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  providers: [SubscribeService, LoggerService],
})
export class HeaderComponent {
  selectedTab: string = 'home';
  isLinkActive: boolean = false;

  //When HOME Link is clicked
  HomeClicked() {
    this.selectedTab = 'home';
    this.isLinkActive = !this.isLinkActive;
  }

  //When Admin Link is clicked
  AdminClicked() {
    this.selectedTab = 'admin';
    this.isLinkActive = !this.isLinkActive;
  }
  constructor(private subService: SubscribeService) {}
  onSubscribe() {
    this.subService.onSubscribeClicked('monthly');
  }
}
