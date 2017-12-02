import { Component } from '@angular/core';
import { Usuario } from 'app/model/usuario';
import { UsuarioService } from 'app/usuario.service';
import { AppService } from 'app/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'hola'
  isPopupVisible = false;
  inicioSesionData = {
    username: 'rpolley0',
    password: 'IDHm3xmmYgGb',
  };
  busqueda: string = ""
  usuario: Usuario;
  loggeado: boolean;
  estadoMenu: boolean = false;
  usuarios: Usuario[];
  imagenPerfil: string = "../assets/default_user.png";
  constructor(private usuarioService: UsuarioService, private appService: AppService) {
    this.loggeado = false;
  }
  ngOnInit() {
    this.usuarioService.getUsuarios().then(usuarios => {
      this.usuarios = usuarios;
    });
    this.appService.usuario$.subscribe(usuario => {
      this.usuario = usuario;
    })
  }
  ingresar() {
    for (var i = 0; i < this.usuarios.length; ++i) {
      if (this.usuarios[i].username === this.inicioSesionData.username && this.usuarios[i].password === this.inicioSesionData.password) {
        this.appService.postUsuario(this.usuarios[i]);
        this.loggeado = true;
        this.isPopupVisible = false;
        this.inicioSesionData.password = '';
        this.inicioSesionData.username = '';
        return;
      }
    }
    alert('Usuario o password incorrectos');
    this.inicioSesionData.password = '';
    this.inicioSesionData.username = '';
  }
  salir() {
    this.loggeado = false;
    this.appService.postUsuario(null);
    this.clickEnMenuItem();
  }

  clickMenu() {
    this.estadoMenu = !this.estadoMenu;
  }

  clickEnMenuItem() {
    this.estadoMenu = false;
  }

  iniciarSesion() {
    this.isPopupVisible = true;
  }

  buscar() {
    this.appService.postBusqueda(this.busqueda);
  }
}
