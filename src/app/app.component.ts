import { Component } from '@angular/core';

const pi = 3.14;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
//  template: '<input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mostar: Boolean = false;
  title = 'AppWorks';
  nombre = 'Jorge Requena';
  radio = 2;
  circunferencia: number = 2 * pi * this.radio;
  email = 'jarg44@gmail.com';

  calcularCircunferencia = function(valorEvento){
    this.radio = valorEvento;
    this.circunferencia = 2 * pi * this.radio;
    console.log('se recalculó el beta');
  };
}
