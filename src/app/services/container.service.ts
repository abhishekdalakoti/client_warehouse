import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ContainerService {

  constructor(private http: HttpClient,
    private router: Router) { }
  getcontainerslist() {
    return this
      .http
      .get(`${environment.apiURL}container`);
  }
  getcontainerslistbytype(type) {
    return this
      .http
      .get(`${environment.apiURL}movablecontainer/${type}`);
  }
  addContainer(data:any){
    var postData = new Object();
    postData["label"] = data.label;
    postData["hold_type"] = data.type;
    postData["parent"] = data.parent;
    var data_json = JSON.stringify(postData);  
    console.log(data_json);
    return this
            .http
            .post<any>(`${environment.apiURL}container`, data);
  }
  isdeletable(id:number){
    return this
      .http
      .get(`${environment.apiURL}getdeleteablecontainer/${id}`);
  }
  deletecontainer(id:any){
    return this
      .http
      .get(`${environment.apiURL}deletecontainer/${id}`);
  }
  
}
