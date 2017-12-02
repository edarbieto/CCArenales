import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from 'app/inicio/inicio.component';
import { BusquedaComponent } from 'app/busqueda/busqueda.component';
import { ProductoComponent } from 'app/producto/producto.component';
import { TiendaComponent } from 'app/tienda/tienda.component';
import { HistoriasComponent } from 'app/historias/historias.component';
import { HistoriaComponent } from 'app/historia/historia.component';
import { PedidosComponent } from 'app/pedidos/pedidos.component';
import { PerfilComponent } from 'app/perfil/perfil.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'busqueda', component: BusquedaComponent },
  { path: 'producto/:id', component: ProductoComponent },
  { path: 'tienda/:id', component: TiendaComponent },
  { path: 'historias', component: HistoriasComponent },
  { path: 'historia/:id', component: HistoriaComponent },
  { path: 'pedidos', component: PedidosComponent },
  { path: 'perfil', component: PerfilComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
