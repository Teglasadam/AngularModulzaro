import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass',
})
export class LoginComponent {
  loginIsFailed: boolean = false;
  username: string = '';
  password: string = '';

  constructor(public authService: AuthService) {}

  buttonDisabled() {
    if (this.authService.missedLogins >= 5) {
      this.loginIsFailed = false;
      return this.authService.resetMissedLogins();
    } else {
      this.loginIsFailed = true;
      return this.authService.missedLogins < 5;
    }
  }
}
