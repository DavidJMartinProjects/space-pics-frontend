import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @ViewChild(MatSidenav) sidenav!: MatSidenav ;
  events: string[] = [];  
  opened: boolean = false;
  shouldRun: boolean = true;
  
  constructor() { }

  ngOnInit(): void {
  }

}
