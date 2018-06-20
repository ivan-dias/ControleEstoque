import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../shared/produto.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

 

  constructor(private produtoService: ProdutoService, private tostr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(produtoForm: NgForm) {
    if (produtoForm.value.$key == null)
      this.produtoService.insertproduto(produtoForm.value);
    else
      this.produtoService.updateproduto(produtoForm.value);
    this.resetForm(produtoForm);
    this.tostr.success('Submitted Succcessfully', 'Produto Registrada');
  }

  resetForm(produtoForm?: NgForm) {
    if (produtoForm != null)
    produtoForm.reset();
    this.produtoService.selectedproduto = {
      $key: null,
      descricao: '',
      quantidade: '',
      valor: '',
    }
  }

}