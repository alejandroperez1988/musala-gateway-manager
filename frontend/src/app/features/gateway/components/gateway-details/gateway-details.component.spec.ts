import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { GatewayDetailsComponent } from './gateway-details.component';
import { GatewaysService } from 'src/app/core/services/gateways.service';
import { RouterTestingModule } from '@angular/router/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import { NgbActiveModal, NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EventEmitter, Input, Output } from '@angular/core';

describe('GatewayDetailsComponent', () => {
  let component: GatewayDetailsComponent;
  let fixture: ComponentFixture<GatewayDetailsComponent>;
  let ngbModal: NgbActiveModal;
  let service: GatewaysService;
  let httpMock: HttpTestingController;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [ GatewayDetailsComponent],
      providers: [ NgbModal, NgbActiveModal ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GatewayDetailsComponent);
    component = fixture.componentInstance;   
    service = TestBed.inject(GatewaysService); 
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
