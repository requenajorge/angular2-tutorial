import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesComponent } from './clientes.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [ClientesComponent],
  exports: [ClientesComponent]
})
export class ClientesModule { }
