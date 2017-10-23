import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MovimientosModule } from './movimientos/movimientos.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MovimientosModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
