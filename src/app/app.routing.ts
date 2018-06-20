import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PainelComponent } from './painel/painel.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioComponent } from './usuarios/usuario/usuario.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { AngularFireModule } from 'angularfire2';

const APP_ROUTES: Routes = [
  {path:'painel', component: PainelComponent },
  {path:'usuarios', component: UsuariosComponent },
  {path:'usuario', component: UsuarioComponent },
  {path:'produtos', component: ProdutosComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
