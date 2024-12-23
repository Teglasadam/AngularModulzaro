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
    if (this.authService.missedLogins >= 5) {
      return this.authService.resetMissedLogins();
    } else {
      return this.authService.missedLogins < 5;
    }
  }
}
