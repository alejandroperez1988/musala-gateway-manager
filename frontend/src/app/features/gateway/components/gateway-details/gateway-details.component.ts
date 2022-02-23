import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Gateway } from 'src/app/core/models/gateway';
import { PeripheralDevice, Status } from 'src/app/core/models/peripheral-device';
import { GatewaysService } from 'src/app/core/services/gateways.service';

@Component({
  selector: 'app-gateway-details',
  templateUrl: './gateway-details.component.html',
  styleUrls: ['./gateway-details.component.scss']
})
export class GatewayDetailsComponent implements OnInit {
  @Input() public id!: string;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();  
  gateway!: Gateway;
  peripherals!: PeripheralDevice[];
  peripheralStatus = Status;
  constructor(private readonly gatewayService: GatewaysService, 
              public activeModal: NgbActiveModal) {}

  ngOnInit(): void {    
    this.gatewayService.getGatewayById(this.id).subscribe(result =>{      
      this.gateway = result;
      this.peripherals = this.gateway.peripheralDevices;   
    })
  }
  
  close(){
    let modalData = 'closed' ;
    this.passEntry.emit(modalData);
    this.activeModal.dismiss();
  }

}
