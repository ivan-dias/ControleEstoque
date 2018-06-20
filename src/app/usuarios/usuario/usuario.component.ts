import { Component, OnInit } from '@angular/core';
import { usuarioService } from '../shared/usuario.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Usuarios } from '../shared/usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  constructor(private usuarioService: usuarioService, private tostr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(usuarioForm: NgForm) {
    if (usuarioForm.value.$id_usuario == null)
      this.usuarioService.insertusuarios(usuarioForm.value);
    else
      this.usuarioService.updateusuarios(usuarioForm.value);
    this.resetForm(usuarioForm);
    this.tostr.success('Cadastro finalizado', 'Usuario Registrado');
  }

  resetForm(usuarioForm?: NgForm) {
    if (usuarioForm != null)
    usuarioForm.reset();
    this.usuarioService.selectedusuario = {
      $id_usuario: '',
      nome_usuario: '',
      funcao_usuario: '',
    }
  }

}