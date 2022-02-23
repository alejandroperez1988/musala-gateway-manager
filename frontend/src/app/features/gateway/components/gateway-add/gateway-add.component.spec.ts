import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { GatewayAddComponent } from './gateway-add.component';
import { GatewaysService } from 'src/app/core/services/gateways.service';
import { RouterTestingModule } from '@angular/router/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';


describe('GatewayAddComponent', () => {
  let component: GatewayAddComponent;
  let fixture: ComponentFixture<GatewayAddComponent>;
  let httpMock: HttpTestingController;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ReactiveFormsModule, RouterTestingModule],
      declarations: [ GatewayAddComponent ]
    }).compileComponents();
   
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GatewayAddComponent);
    component = fixture.componentInstance;   
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
