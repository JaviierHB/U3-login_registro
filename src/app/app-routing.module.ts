import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importamos los componentes
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Inicio de sesion' }
  },
  {
    path: 'registro',
    component: RegistroComponent,
    data: { title: 'Registro de usuarios' }
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
