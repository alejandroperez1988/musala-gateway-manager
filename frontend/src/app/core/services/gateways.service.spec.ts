import { GatewaysService } from './gateways.service';
import { HttpClient } from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Gateway } from '../models/gateway';


describe('GatewaysService', () => {
  let service: GatewaysService; 
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [GatewaysService]
  });
   
    httpClientSpy = jasmine.createSpyObj<HttpClient>('HttpClient', [
      'get',
    ]);
    service = TestBed.inject(GatewaysService);
  });

  it('should create service', () => {
    expect(service).toBeDefined();
  });

  // describe('#getGateways', () => {
  //   it('should get gateways', () => {
  //     service.getGateways().subscribe(result =>{
  //       expect(result.length).toBeGreaterThan(0);
  //     })
  //   });
  // });


 
  // describe('#getGatewayById', () => {
  //   it('should do smth', () => {
  //     service.getGatewayById();
  //   });
  // });

  describe('#addGateway', () => {
    it('should add a gateway', () => {
       let testGateway = 
        {
          id: '42',
          name: 'Gateway Number:5',
          ipv4: '10.10.131.1',
          peripheralDevices: [
            {
              uid: 43,
              vendor: 'Huawei',
              createdDate: new Date('2022-02-22'),
              status: 1
            }
          ]
        };     
      service.addGateway(testGateway).subscribe(result =>{  
        expect(result).toBeTruthy();
      });
    });
  });

  
  // describe('#removeGatewayById', () => {
  //   const id = 'c87e063a-6309-40dd-8dd7-6e63455cbc38'
  //   it('should do smth', () => {
  //     service.removeGatewayById(id).subscribe(result =>{
  //       expect(result).toBeDefined();
  //     });
  //   });
  // });
});
