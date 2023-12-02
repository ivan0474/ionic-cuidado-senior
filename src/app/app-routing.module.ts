import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },

  {
    path: 'inicio',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },

  {
    path: 'login',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'principal',
    redirectTo: 'principal',
    pathMatch: 'full'
  },

  {
    path:'enfermeros',
    redirectTo:'enfermeros',
    pathMatch: 'full'
  },

  {
    path:'administrador',
    redirectTo:'administrador',
    pathMatch: 'full'
  },

  {
    path:'perfil',
    redirectTo: 'perfil',
    pathMatch: 'full'
  },

  {
    path: 'agendar',
    redirectTo: 'agendar',
    pathMatch: 'full'
  },
  
  {
    path: 'adcita',
    redirectTo: 'adcita',
    pathMatch: 'full'
  },

  {
    path: '**',
    redirectTo: 'e404',
    pathMatch: 'full'
  },


  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },

  {
    path: 'principal',
    loadChildren: () => import('./pages/principal/principal.module').then( m => m.PrincipalPageModule),
  },

  {
    path: 'enfermeros',
    loadChildren: () => import('./pages/enfermeros/enfermeros.module').then( m => m.EnfermerosPageModule)
  },

  {
    path: 'administrador',
    loadChildren: () => import('./pages/administrador/administrador.module').then( m => m.AdministradorPageModule)
  },

    {
    path: 'e404',
    loadChildren: () => import('./pages/e404/e404.module').then( m => m.E404PageModule)
  },

  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },

  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
 
  {
    path: 'agendar',
    loadChildren: () => import('./pages/agendar/agendar.module').then( m => m.AgendarPageModule)
  },
  {
    path: 'adcita',
    loadChildren: () => import('./pages/adcita/adcita.module').then( m => m.AdcitaPageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]

})

export class AppRoutingModule { }