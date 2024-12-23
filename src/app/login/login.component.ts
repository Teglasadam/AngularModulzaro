import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass',
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(public authService: AuthService) {}

  buttonDisabled() {
    return this.authService.missedLogins > 5;
  }
}
