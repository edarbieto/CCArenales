import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductoService } from 'app/producto.service';
import { TiendaService } from 'app/tienda.service';
import { Producto } from 'app/model/producto';
import { Tienda } from 'app/model/tienda';
import { AppService } from 'app/app.service';
import { Historia } from 'app/model/historia';
import { HistoriaService } from 'app/historia.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  prueba: string;
  productos: Producto[];
  tiendas: Tienda[];
  historias: Historia[];
  busqueda: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private productoService: ProductoService,
    private tiendaService: TiendaService,
    private historiaService: HistoriaService,
    private appService: AppService
  ) {


  }

  ngOnInit() {
    this.appService.busqueda$.subscribe(prueba => {
      this.busqueda = prueba;
      this.productos = null;
      this.productoService.getProductos().then(productos => {
        this.productos = productos;
        this.productos = this.productos.filter(producto => {
          return producto.nombre.includes(this.busqueda)
        })
      });
      this.tiendas = null;
      this.tiendaService.getTiendas().then(tiendas => {
        this.tiendas = tiendas;
        this.tiendas = this.tiendas.filter(tienda => {
          return tienda.nombre.includes(this.busqueda)
        })
      });
      this.historias = null;
      this.historiaService.getHistorias().then(historias => {
        this.historias = historias;
        this.historias = this.historias.filter(historia => {
          return historia.titulo.includes(this.busqueda);
        })
      })
    });
  }

}
