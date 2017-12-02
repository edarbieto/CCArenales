import { Component, OnInit } from '@angular/core';
import { Producto } from 'app/model/producto';
import { ProductoService } from 'app/producto.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AppService } from 'app/app.service';
import { Usuario } from 'app/model/usuario';
import { PedidoService } from 'app/pedido.service';
import { PedidoProductoService } from 'app/pedidoproducto.service';
import { Pedido } from 'app/model/pedido';
import { PedidoProducto } from 'app/model/pedidoproducto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  producto: Producto;
  usuario: Usuario;
  cantidad: number;

  constructor(private productoService: ProductoService, private route: ActivatedRoute,
    private pedidoService: PedidoService, private pedidoProductoService: PedidoProductoService,
    private location: Location, private appService: AppService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.usuario = null;
    this.producto = null;
    this.cantidad = 1;
    this.productoService.getProducto(id).then(producto => {
      this.producto = producto;
    })
    this.appService.usuario$.subscribe(usuario => {
      this.usuario = usuario;
    })
  }

  back() {
    this.location.back();
  }

  comprar() {
    var hoy = new Date();
    var pedido: Pedido = {
      id: null,
      fechaPedido: hoy.getTime().toString(),
      fechaEntrega: null,
      usuario: this.usuario,
    }
    this.pedidoService.createPedido(pedido).then(pedido => {
      var pedidoProducto: PedidoProducto = {
        id: null,
        cantidad: this.cantidad,
        producto: this.producto,
        pedido: pedido,
      }
      this.pedidoProductoService.createPedido(pedidoProducto);
    });
  }
}
