import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private http: HttpClient,
    private router: Router) { }
  getinventorylist() {
    return this
      .http
      .get(`${environment.apiURL}inventory`);
  }
}