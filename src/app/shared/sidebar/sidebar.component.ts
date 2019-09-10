import { Component, OnInit } from '@angular/core';
import { SidebardService } from '../../services/service.index';
import { UsuarioService } from '../../services/usuario/usuario.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  constructor( 
    public _sidebar: SidebardService,
    public _usuarioService: UsuarioService
    
    ) { }

  ngOnInit() {
  }

}
