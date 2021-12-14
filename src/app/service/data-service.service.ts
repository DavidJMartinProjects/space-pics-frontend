import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { LaunchRecord } from '../model/LaunchRecord';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService implements OnInit {

  ngOnInit(): void {    
  }
  
  baseUrl: string = 'https://run.mocky.io/v3/c5dc7de1-3ddb-4e0b-9285-a01bd243dd71';

  data: any;


  constructor(private httpClient: HttpClient) {   
  }

  // getCustomerPage(pageNumber: number, pageSize: number, sortKey: string, sortDirection: string): Observable<LaunchRecord.RootObject> {
  //   var query = `?pageNumber=${pageNumber}&pageSize=${pageSize}&sortKey=${sortKey}&sortDirection=${sortDirection}`;
  //   console.log("GET: " + this.baseUrl + query)
  //   return this.httpClient.get<LaunchRecord.RootObject>(this.baseUrl + query);
  // }

  getLaunchReport(): Observable<LaunchRecord.RootObject> {   
    console.log("GET: " + this.baseUrl)
    return this.httpClient.get<LaunchRecord.RootObject>(this.baseUrl);    
  }

  remove(id: string) {
    var uri = this.baseUrl + "/" + (id);
    return this.httpClient.delete(uri);
  }


}
