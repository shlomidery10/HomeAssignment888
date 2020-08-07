import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpRequestsService } from 'src/app/http-requests.service';
import { Location } from '@angular/common';
import { Country } from 'src/shared/models/country.model';

@Component({
  selector: 'app-continent-page',
  templateUrl: './continent-page.component.html',
  styleUrls: ['./continent-page.component.css']
})
export class ContinentPageComponent implements OnInit {
  countries:Array<Country>;
  id:any;
  constructor(private route: ActivatedRoute,private httpRequestsService:HttpRequestsService,private location: Location) {
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
       this.httpRequestsService.getCountriesByContinentCode(params.id).subscribe((res:Array<Country>)=>{
         this.countries=res
       });
   });
  }
  navigateHome()
  {
    this.location.back();
  }

}
