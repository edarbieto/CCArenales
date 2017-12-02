import { Component, OnInit, Inject } from '@angular/core';
import { DxBoxModule, DxTextBoxModule, DxSlideOutViewModule } from 'devextreme-angular';
import { Producto } from 'app/model/producto';
import { Http, HttpModule, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { ProductoService } from 'app/producto.service';
import { Tienda } from 'app/model/tienda';
import { TiendaService } from 'app/tienda.service';
import { HistoriaService } from 'app/historia.service';
import { Historia } from 'app/model/historia';
import { UsuarioService } from 'app/usuario.service';
import { Usuario } from 'app/model/usuario';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  topProductos: Producto[];
  topTiendas: Tienda[];
  historiaDelMes: Historia;

  constructor(private productoService: ProductoService,
    private tiendaService: TiendaService,
    private historiaService: HistoriaService) {
    this.historiaService.getHistoria(this.getRandomInt(0, 10)).then(historia => {
      this.historiaDelMes = historia;
    });
  }

  ngOnInit() {
    this.productoService.getProductos().then(productos => {
      this.topProductos = productos.slice(0, 10);
    });
    this.tiendaService.getTiendas().then(tiendas => {
      this.topTiendas = tiendas.slice(0, 10);
    });
  }
  getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
