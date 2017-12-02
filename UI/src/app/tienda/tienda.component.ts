import { Component, OnInit } from '@angular/core';
import { Usuario } from 'app/model/usuario';
import { Tienda } from 'app/model/tienda';
import { TiendaService } from 'app/tienda.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AppService } from 'app/app.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  usuario: Usuario;
  tienda: Tienda;

  constructor(private tiendaService: TiendaService, private route: ActivatedRoute,
    private location: Location, private appService: AppService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.usuario = null;
    this.tienda = null;
    this.tiendaService.getTienda(id).then(tienda => {
      this.tienda = tienda;
    })
    this.appService.usuario$.subscribe(usuario => {
      this.usuario = usuario;
    })
  }
  back() {
    this.location.back();
  }
}
