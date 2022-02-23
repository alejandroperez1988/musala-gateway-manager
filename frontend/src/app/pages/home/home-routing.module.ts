import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { 
    path: '', component: HomeComponent 
  },
  {
    path: 'gateway', loadChildren: () => import('../../features/gateway/gateway.module').then(m => m.GatewayModule)
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
