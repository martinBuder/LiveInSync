import { Component } from '@angular/core';
import { NewHomeComponent } from '../../dialogs/new-home/new-home.component';
import { NewHomeUtilService } from '../../../services/utils/new-home-util.service';
import { CommonModule } from '@angular/common';
import { AddHomeComponent } from '../../dialogs/add-home/add-home.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NewHomeComponent, AddHomeComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  constructor(protected newHomeUtilService: NewHomeUtilService) {}
}
