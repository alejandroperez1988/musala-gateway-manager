import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Gateway } from '../models/gateway';

@Injectable({
  providedIn: 'root'
})
export class GatewaysService {
  public url: string = environment.backendUrl;
  constructor(public httpClient: HttpClient) { }

  public getGateways(): Observable<Gateway[]>{
    return this.httpClient.get<Gateway[]>(this.url+'gateways');
  }

  public getGatewayById(id:string): Observable<Gateway>{
    return this.httpClient.get<Gateway>(this.url+'gateways/gateway/'+id);
  }

  public addGateway(gateway: Gateway){
    return this.httpClient.post(this.url+'gateways', gateway)
  }

  public updateGateway(id:string, gateway: Gateway){  
    return this.httpClient.patch<Gateway>(this.url+'gateways/update/'+id, gateway)
  }

  public removeGatewayById(id:string): Observable<Gateway>{  
    return this.httpClient.delete<Gateway>(this.url+'gateways/gateway/'+id);
  }


}
