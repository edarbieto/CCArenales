import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe, PipeTransform } from '@angular/core';

import { AppComponent } from './app.component';
import { DxBoxModule, DxButtonModule, DxTextBoxModule, DxSlideOutViewModule, DxGalleryModule, DxScrollViewModule, DxPopupModule, DxFormModule, DxListModule, DxTextAreaModule, DxSliderModule, DxDataGridModule } from "devextreme-angular";
import { ProductoService } from 'app/producto.service';
import { HttpModule } from '@angular/http';
import { HistoriaService } from 'app/historia.service';
import { PedidoProductoService } from 'app/pedidoproducto.service';
import { PedidoService } from 'app/pedido.service';
import { TiendaService } from 'app/tienda.service';
import { UsuarioService } from 'app/usuario.service';
import { AppRoutingModule } from './app-routing.module';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { InicioComponent } from './inicio/inicio.component';
import { AppService } from 'app/app.service';
import { ProductoComponent } from './producto/producto.component';
import { TiendaComponent } from './tienda/tienda.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { HistoriasComponent } from './historias/historias.component';
import { HistoriaComponent } from './historia/historia.component';
import { PerfilComponent } from './perfil/perfil.component';


@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent,
    InicioComponent,
    ProductoComponent,
    TiendaComponent,
    PedidosComponent,
    HistoriasComponent,
    HistoriaComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    DxDataGridModule,
    DxSliderModule,
    DxBoxModule,
    DxTextAreaModule,
    DxButtonModule,
    DxTextBoxModule,
    DxSlideOutViewModule,
    DxGalleryModule,
    DxScrollViewModule,
    DxPopupModule,
    DxFormModule,
    HttpModule,
    AppRoutingModule,
    DxListModule
  ],
  providers: [ProductoService, HistoriaService, PedidoProductoService, PedidoService, TiendaService, UsuarioService, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
