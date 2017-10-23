import { ClientesModule } from './../clientes/clientes.module';
import { SharedModule } from './../shared/shared.module';
import { MovimientosComponent } from './movimientos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevoComponent } from './nuevo/nuevo.component';
import { ListaComponent } from './lista/lista.component';

@NgModule({
  imports: [CommonModule, SharedModule, ClientesModule],
  declarations: [MovimientosComponent, NuevoComponent, ListaComponent],
  exports: [MovimientosComponent]

})
export class MovimientosModule { }
