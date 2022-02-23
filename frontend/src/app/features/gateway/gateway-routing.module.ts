import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GatewayAddComponent } from './components/gateway-add/gateway-add.component';
import { GatewayComponent } from './gateway.component';

const routes: Routes = [
  { 
    path: '', component: GatewayComponent 
  },
  {
    path: 'add/:id', component: GatewayAddComponent    
  },
  {
    path: 'add', component: GatewayAddComponent    
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GatewayRoutingModule { }
