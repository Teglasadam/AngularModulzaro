import { Injectable, Output } from '@angular/core';
import { Developer } from './developer';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DeveloperService {

  ApiURL: string = 'https://siposm.hu/developerAPI/'
  developers: Developer[] = [];

  constructor(private http: HttpClient) {
    this.loadDevelopers();
  }

  loadDevelopers() {
    this.http
      .get<Developer[]>(this.ApiURL + 'getDevelopers')
      .subscribe((devData) => {
        this.developers = devData.map(
          (dev) => Object.assign(new Developer(), dev)
        );
      });
  }

  loaded(): boolean {
    return this.developers.length > 0
  }
}
