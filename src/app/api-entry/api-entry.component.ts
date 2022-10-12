import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-api-entry',
  templateUrl: './api-entry.component.html',
  styleUrls: ['./api-entry.component.css']
})
export class ApiEntryComponent implements OnInit {

  constructor(private api:ApiService) {
    this.fetch()
   }
  fetch=()=>{
    this.api.entry().subscribe(
      (data)=>{this.apiData=data}
    )
  }

  apiData:any={}

  ngOnInit(): void {
  }

}
