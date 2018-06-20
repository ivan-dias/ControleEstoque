import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../shared/produto.service';
import { Produto } from '../shared/produto.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {
  produtoService: any;
  produtoList: any;
  mesaList = [];
  constructor(private ProdutoService: ProdutoService, private tostr: ToastrService) { }

  ngOnInit() {
    
  }

  onEdit(emp: Produto) {
    this.produtoService.selectedproduto = Object.assign({}, emp);
  }

  getData(){
    let x = this.produtoService.getData();
    console.log('aqui');
    x.snapshotChanges().subscribe(item => {
      item.forEach(element => {
        let y = element.payload.toJSON();
        y["$key"] = element.key;
        console.log(y);
        this.produtoList.push(y);
      });
    });
  }


  onDelete(key: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.produtoService.deleteproduto(key);
      this.tostr.warning("Deleted Successfully", "produto register");
    }
  }

}