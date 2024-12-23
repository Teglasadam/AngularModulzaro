import { Component } from '@angular/core';
import { DeveloperService } from '../developer.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.sass',
})
export class StatisticsComponent {
  averageSalary: number | null = 0;
  maxSalary: number = 0;
  minSalary: number = 0;

  constructor(public devService: DeveloperService) {}

  avgSalary(): number {
    if (this.devService.loaded()) {
      let sum = this.devService.developers
        .map((x) => x.salary)
        .reduce((a, b) => a! + b!);
      this.averageSalary = Math.round(sum! / this.devService.developers.length);
      return this.averageSalary;
    }
    return 0;
  }

  hiSalary(): number {
    if (this.devService.loaded()) {
      this.devService.developers.map((dev) => {
        if (dev.salary! > this.maxSalary!) {
          this.maxSalary! = dev.salary!;
        }
      });
    }
    return this.maxSalary;
  }

  lowSalary(): number {
    if (this.devService.loaded()) {
      this.devService.developers.map((dev) => {
        if (this.minSalary === 0) {
          this.minSalary! = dev.salary!;
        } else if (dev.salary! < this.minSalary!) {
          this.minSalary! = dev.salary!;
        }
      });
    }
    return this.minSalary;
  }
}
