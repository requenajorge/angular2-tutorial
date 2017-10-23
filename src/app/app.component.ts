import { Component } from '@angular/core';

const pi = 3.14;


@Component({
  selector: 'app-root',
//  templateUrl: './app.component.html',
  template: '<input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//  title = 'AppWorks';
//  nombre = 'Jorge Requena';
//  radio = 1;
//  circunferencia: number = 2 * pi * this.radio;
  email = 'jarg44@gmail.com';
  onKeyUp() {
    console.log(this.email);
  }
}
