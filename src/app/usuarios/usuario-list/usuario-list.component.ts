import { Component, OnInit } from '@angular/core';
import { usuarioService } from '../shared/usuario.service';
import { Usuarios } from '../shared/usuario.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {
  usuarioList: Usuarios[];
  constructor(private usuarioService: usuarioService, private tostr: ToastrService) { }

  ngOnInit() {
    var x = this.usuarioService.getData();
    x.snapshotChanges().subscribe(item => {
      this.usuarioList = [];
      item.forEach(element => {
        console.log("element");
        console.log(element);
        //var y = element.payload.toJSON();
      //  y["$id_usuario"] = element.key;
       // this.usuarioList.push(y as Atendentes);
      });
    });
  }

  onEdit(emp: Usuarios) {
    this.usuarioService.selectedusuarios = Object.assign({}, emp);
  }

  onDelete(id_usuario: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.usuarioService.deleteusuarios(id_usuario);
      this.tostr.warning("Deletado com Sucesso", "Employee register");
    }
  }

}