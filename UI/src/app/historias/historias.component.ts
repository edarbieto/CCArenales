import { Component, OnInit } from '@angular/core';
import { Historia } from 'app/model/historia';
import { HistoriaService } from 'app/historia.service';
import { Usuario } from 'app/model/usuario';
import { AppService } from 'app/app.service';

@Component({
  selector: 'app-historias',
  templateUrl: './historias.component.html',
  styleUrls: ['./historias.component.css']
})
export class HistoriasComponent implements OnInit {

  historias: Historia[];
  usuario: Usuario;
  nuevaHistoria: Historia;

  constructor(private historiaService: HistoriaService, private appService: AppService) { 
    this.nuevaHistoria = {
      id: null,
      fecha: null,
      usuario: null,
      picUri: null,
      titulo: '',
      historia: ''
    }
  }

  ngOnInit() {
    this.historiaService.getHistorias().then(historias => {
      this.historias = historias;
    })
    this.appService.usuario$.subscribe(usuario => {
      this.usuario = usuario;
    })
  }

  publicar(){
    if (this.nuevaHistoria.titulo === '' || this.nuevaHistoria.historia === ''){
      alert('Faltan datos para la nueva historia')
      return;
    }
    var hoy = new Date();
    this.nuevaHistoria.fecha = hoy.getTime().toString();
    this.nuevaHistoria.usuario = this.usuario;
    this.nuevaHistoria.picUri = 'https://loremflickr.com/320/240/japan,anime,jpop,kpop,korea';
    this.historiaService.createHistoria(this.nuevaHistoria).then(historia => {
      alert('registro completado')
    })
  }
}
