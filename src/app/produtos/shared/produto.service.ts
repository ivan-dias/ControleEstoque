import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { Produto } from './produto.model';
@Injectable()
export class ProdutoService {
  selectedproduto: { $key: any; descricao: string; quantidade: string; valor: string; };
  produtoList: AngularFireList<{}>;
  mesaList: AngularFireList<any>;
  selectedmesa: Produto = new Produto();
  constructor(private firebase :AngularFireDatabase ) { }

  getData(){
    this.produtoList = this.firebase.list('produto');
    return this.produtoList;
  }

  insertproduto(produto : Produto)
  {
    this.produtoList.push({
      descricao: produto.descricao,
      quantidade: produto.quantidade,
      valor: produto.valor

    });
  }

  updateproduto(produto : Produto){
    this.produtoList.update(produto.$key,
      {
        descricao: produto.descricao,
        quantidade: produto.quantidade,
        valor: produto.valor,
      });
  }

  deleteproduto($key : string){
    this.produtoList.remove($key);
  }

}