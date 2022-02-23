import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Gateway } from 'src/app/core/models/gateway';
import { GatewaysService } from 'src/app/core/services/gateways.service';
import { GatewayDetailsComponent } from 'src/app/features/gateway/components/gateway-details/gateway-details.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  modalCloseResult: string | undefined;
  gateways!: Gateway[];
  apiNotFound = false;
  constructor(
    private readonly gatewayService: GatewaysService, 
    private readonly modalService: NgbModal,
    private readonly router: Router,
    ) { }

  ngOnInit(): void {
    this.gatewayService.getGateways().subscribe(result=>{
      this.gateways = result;        
    },(err: any)=>{
      this.apiNotFound = true;
    })
  }
  
  openGatewayDetails(id: string) {     
    const modalRef = this.modalService.open(GatewayDetailsComponent, {      
      size: 'xl',
      centered: true,      
      windowClass: 'dark-modal'
    });
    modalRef.componentInstance.id = id;  
    this.modalCloseResult = '';
    modalRef.componentInstance.passEntry.subscribe((data: any) => {
      this.modalCloseResult = data;         
    });
  }

  openGatewayEdit(id: string) {     
    this.router.navigate(['/gateway/add/',id]);
  }

  removeGateway(id: string){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.gatewayService.removeGatewayById(id).subscribe(result =>{
          Swal.fire(
            'Deleted!',
            'Your item has been deleted.',
            'success'
          ).then(result =>{         
            window.location.reload();
          })   
          
        });      
       
      }
    })
   
  }
}
