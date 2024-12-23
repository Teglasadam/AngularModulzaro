import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TokenModel } from './token-model';
import { LoginModel } from './login-model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  missedLogins: number = 0;

  constructor(private router: Router, private http: HttpClient) {}

  login(username: string, password: string) {
    let loginData: LoginModel = new LoginModel();
    loginData.username = username;
    loginData.password = password;
    this.http
      .post<TokenModel>('https://siposm.hu/developerAPI/login', loginData)
      .subscribe({
        next: (response) => {
          console.log('::SUCCESS::');
          console.log('LOGIN REQUEST RESULT: ', response);
          this.missedLogins = 0;
          localStorage.setItem('auth-token', response.token);
          this.router.navigate(['list']);
        },
        error: (error) => {
          console.log('::ERROR::');
          console.log('LOGIN REQUEST RESULT: ', error);
          this.missedLogins += 1;
          console.log('Missed LogIns: ' + this.missedLogins);
        },
      });
  }
}
