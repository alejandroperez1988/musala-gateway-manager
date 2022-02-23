import { NgModule } from '@angular/core';
import { GatewayComponent } from './gateway.component';
import { GatewayDetailsComponent } from './components/gateway-details/gateway-details.component';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeModule } from 'src/app/pages/home/home.module';
import { GatewayRoutingModule } from './gateway-routing.module';
import { GatewayAddComponent } from './components/gateway-add/gateway-add.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    GatewayComponent,
    GatewayDetailsComponent,  
    GatewayAddComponent
  ],
  imports: [       
    ReactiveFormsModule,
    GatewayRoutingModule, 
    CommonModule,
    NgbModule,
    HomeModule   
  ],
  exports: [
    GatewayComponent,
    GatewayDetailsComponent
  ]
})
export class GatewayModule { }
