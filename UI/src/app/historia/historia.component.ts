import { Component, OnInit } from '@angular/core';
import { Historia } from 'app/model/historia';
import { HistoriaService } from 'app/historia.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.css']
})
export class HistoriaComponent implements OnInit {

  historia: Historia;
  fecha: Date;

  constructor(private historiaService: HistoriaService, private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.historiaService.getHistoria(id).then(historia => {
      this.historia = historia;
      this.fecha = new Date(historia.fecha);
    })
  }

  back() {
    this.location.back();
  }
}
