import { Component, OnInit } from '@angular/core';
import { Pedido } from 'app/model/pedido';
import { PedidoService } from 'app/pedido.service';
import { Usuario } from 'app/model/usuario';
import { AppService } from 'app/app.service';
import { PedidoProducto } from 'app/model/pedidoproducto';
import { PedidoProductoService } from 'app/pedidoproducto.service';

import DataSource from 'devextreme/data/data_source';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  usuario: Usuario;
  pedidosProducto: PedidoProducto[];
  pp = new DataSource({
    store: this.pedidosProducto,
  })

  constructor(private pedidoService: PedidoService, private appService: AppService, private pedidoProductoService: PedidoProductoService) {
    
  }

  ngOnInit() {
    this.appService.usuario$.subscribe(usuario => {
      this.usuario = usuario;
      this.pedidosProducto = null;
      this.pedidoProductoService.getPedidos().then(pedidos => {
        this.pedidosProducto = pedidos.filter(pedido => {
          return pedido.pedido.usuario == usuario;
        })
      })
    })
  }
}
