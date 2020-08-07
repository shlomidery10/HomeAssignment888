import { Component, OnInit } from '@angular/core';
import { HttpRequestsService } from "../../http-requests.service";
import { GridOptions } from 'ag-grid-community';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Continent } from "../../../shared/models/continent.model";
@Component({
  selector: 'app-continents-grid',
  templateUrl: './continents-grid.component.html',
  styleUrls: ['./continents-grid.component.css']
})
export class ContinentsGridComponent implements OnInit {
gridOptions:GridOptions;
rowSelection;
domLayout;

columnDefs = [{headerName: 'Code', field: 'code' },{headerName: 'Name', field: 'name' }];
rowData:Array<any>;
  constructor(private httpRequestsService:HttpRequestsService,private router:Router) {
  this.rowSelection = 'single';
  this.domLayout='autoHeight';
  this.gridOptions = <GridOptions>{
  rowData: this.rowData,
  columnDefs: this.columnDefs,
  onGridReady: () => {
  this.gridOptions.columnApi.autoSizeAllColumns();
  this.gridOptions.api.sizeColumnsToFit();
  }}}
  
  ngOnInit(): void {
    this.httpRequestsService.getContinents().subscribe((res:Array<Continent>)=>{
      this.rowData=res
    });


  }

  onDoubleClick(event)
  {
    this.router.navigate(['continentsGrid','continent',event.data.code]);
  }
  
}
