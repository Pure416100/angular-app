import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  // URL API ของคุณ
  private apiUrl = 'http://203.151.3.186:7073';

  constructor(private http: HttpClient) { }

  // ฟังก์ชันดึงข้อมูลรถ (หรือข้อมูลอื่นๆ)
  getVehicles() {
    return this.http.get(`${this.apiUrl}/vehicle/v1/show_detail`, {
      params: {
        id: 'feae4d98-80b1-4d2b-abd1-f81195b14f8d'
      }
    });
  }
}