import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),   
  },
  {
    path: 'gateway', loadChildren: () => import('./features/gateway/gateway.module').then(m => m.GatewayModule)
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
