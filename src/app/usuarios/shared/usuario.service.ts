import { Injectable } from '@angular/core';
 
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { Usuarios} from './usuario.model';
@Injectable()

export class usuarioService {
  selectedusuario: { $id_usuario: string; nome_usuario: string; funcao_usuario: string; };
  usuarioList: AngularFireList<any>;
  selectedusuarios: Usuarios = new Usuarios();
  constructor(private firebase :AngularFireDatabase ) { }
 
  getData(){
    this.usuarioList = this.firebase.list('usuarios');
    return this.usuarioList;
  }
 
  insertusuarios(usuario : Usuarios)
  {
    this.usuarioList.push({
      nome_usuario: usuario.nome_usuario,
      funcao_usuario: usuario.funcao_usuario,
    });
  }
 
  updateusuarios(usuarios : Usuarios){
    this.usuarioList.update(usuarios.$id_usuario,
      {
        nome_usuario: usuarios.nome_usuario,
        funcao_usuario: usuarios.funcao_usuario,
      });
  }
 
  deleteusuarios($id_usuario : string){
    this.usuarioList.remove($id_usuario);
  }
 
}
