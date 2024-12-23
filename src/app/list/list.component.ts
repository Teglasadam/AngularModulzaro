import { Component } from '@angular/core';
import { DeveloperService } from '../developer.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.sass',
})
export class ListComponent {
  constructor(public devService: DeveloperService, public authService: AuthService) {}
}
