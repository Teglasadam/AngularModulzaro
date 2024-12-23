import { Guid } from 'guid-typescript';

export class Developer {
  id: string = Guid.create().toString();
  name: string = '';
  email: string = '';
  job: string = '';
  age: number | null = null;
  salary: number | null = null;
  image: string = '';
  skills: string[] = [];

  getFormattedSalary() {
    return this.salary!.toLocaleString('hu-HU', {
        style: 'currency',
        currency: 'HUF',
        maximumFractionDigits: 0
    })
}
}

