import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Gateway } from 'src/app/core/models/gateway';
import { PeripheralDevice, Status } from 'src/app/core/models/peripheral-device';
import { GatewaysService } from 'src/app/core/services/gateways.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gateway-add',
  templateUrl: './gateway-add.component.html',
  styleUrls: ['./gateway-add.component.scss']
})
export class GatewayAddComponent implements OnInit {
  peripherals: PeripheralDevice[]; 
  peripheralStatus = Status;
  gateway!: Gateway;  
  peripheralForm!: FormGroup;  
  gatewayForm!: FormGroup; 
  gatewayId: string;
  isNew: boolean; 
  constructor(private readonly formBuilder: FormBuilder,
              private actRoute: ActivatedRoute,
              private readonly gatewayService: GatewaysService,
              private readonly router: Router) { 
                this.peripherals = [];
                this.isNew = true;     
                this.gatewayId = this.actRoute.snapshot.params['id'];           
              }

  ngOnInit(): void {  
    this.gatewayForm = this.formBuilder.group({
      gateway:['', Validators.required],
      ipv4:['', [Validators.required,  Validators.pattern('(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)')]]
    })
    this.peripheralForm = this.formBuilder.group({
      uid:['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      vendor:['', Validators.required],
      createdDate:['', Validators.required],
      status:['Select status', [Validators.required, Validators.pattern("^[0-1]*$")]],      
    })
    
    if(this.gatewayId){
      this.isNew = false;
      this.fillInfo(this.gatewayId)
    }  
  }



  fillInfo(gatewayId:string){
    this.gatewayService.getGatewayById(gatewayId).subscribe(result =>{
      this.gateway = result;       
      this.peripherals = this.gateway.peripheralDevices;      
      this.gatewayForm.controls['gateway'].setValue(this.gateway.name);       
      this.gatewayForm.controls['ipv4'].setValue(this.gateway.ipv4);       
    })  
  }

  submit() {
    if (this.gatewayForm.valid) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (result.isConfirmed) {
          this.gateway = {
            id: this.gatewayId,
            name: this.gatewayForm.controls['gateway'].value,
            ipv4: this.gatewayForm.controls['ipv4'].value,
            peripheralDevices: this.peripherals
          }
          if(this.isNew){
            this.gatewayService.addGateway(this.gateway).subscribe(result => {
              Swal.fire(
                'Added!',
                'Your item has been added.',
                'success'
              ).then(result => {
                this.router.navigate(['']);
              })
            })
          }else{     
            this.gatewayService.updateGateway(this.gatewayId, this.gateway).subscribe(result => {
              Swal.fire(
                'Updated!',
                'Your item has been updated.',
                'success'
              ).then(result => {
                this.router.navigate(['']);
              })
            })
          }
        
        }
      })
    }
  }
 

  addPeripheral(){     
    if(this.peripheralForm.valid){ 
      if(this.peripherals.length+1 < 11){     
        let date: Date = new Date(this.peripheralForm.controls['createdDate'].value);    
        const peripheral = {
          uid: this.peripheralForm.controls['uid'].value,
          vendor: this.peripheralForm.controls['vendor'].value,
          createdDate: date,
          status: this.peripheralForm.controls['status'].value,
        }    
        this.peripherals.push(peripheral)
        this.peripheralForm.reset();
        this.status.setValue('Select status');
      }else{
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'You can not add more than 10 devices ',
          showConfirmButton: false,
          timer: 1500
        })
      }      
    }
  }
  //---- Controls Getters

  //---- Gateway Form
  get gatewayC(){
    return this.gatewayForm.controls['gateway'];
  }
  get ipv4C(){
    return this.gatewayForm.controls['ipv4'];
  }

  //---- Peripherals Form
  get uid(){
    return this.peripheralForm.controls['uid'];
  }
  get vendor(){
    return this.peripheralForm.controls['vendor'];
  }
  get createdDate(){
    return this.peripheralForm.controls['createdDate'];
  }
  get status(){
    return this.peripheralForm.controls['status'];
  }
  //----
 
  remove(id: any) {   
    this.peripherals.splice(id, 1);
  }

}
