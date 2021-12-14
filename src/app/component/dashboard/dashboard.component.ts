import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { DataServiceService } from 'src/app/service/data-service.service';
import { LaunchRecord } from 'src/app/model/LaunchRecord';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */
  
  _data: any;
  _featured: any;

  constructor(private breakpointObserver: BreakpointObserver, private dataService: DataServiceService) {
    this.dataService.getLaunchReport()
      .subscribe(data => {
        this._data = data
      });    
  }

  ngOnInit(): void {
    this._data = this.dataService.getLaunchReport();
    this._featured = this._data[0];
  }
}
