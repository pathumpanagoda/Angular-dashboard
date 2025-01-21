import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Lot } from '../models/lot.model';

@Injectable({
  providedIn: 'root',
})
export class LotService {
  private apiUrl = `${environment.apiUrl}/api/lots`;

  constructor(private http: HttpClient) {}

  getAllLots(): Observable<Lot[]> {
    return this.http.get<Lot[]>(this.apiUrl);
  }
}
