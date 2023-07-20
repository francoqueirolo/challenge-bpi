import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'challenge-bpi';
  users = [
    {
      name: 'Juan',
      lastname: 'Perez',
      age: 30,
    },
    {
      name: 'Ramon',
      lastname: 'Vega',
      age: 52,
    },
  ];

  constructor() {
    console.log(
      '%c commit: ',
      'background: #6559f1; color: white',
      environment.commit
    );
    console.log(
      '%c buildDate: ',
      'background: #6559f1; color: white',
      environment.buildDate
    );
  }

  onSave(event: any) {
    console.log(event.detail);
  }
}
