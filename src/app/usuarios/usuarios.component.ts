import { Component, OnInit } from '@angular/core';
import { usuarioService } from './shared/usuario.service'

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  providers :[usuarioService]
})
export class UsuariosComponent implements OnInit {
    constructor(private usuarioService : usuarioService) { }


  ngOnInit() {
  }

}
