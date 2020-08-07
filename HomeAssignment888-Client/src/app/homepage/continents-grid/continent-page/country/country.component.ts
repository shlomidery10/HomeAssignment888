import {  Country } from "../../../../../shared/models/country.model";
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  @Input() country:Country;

  srcImage:string;
  constructor() { }
  ngOnInit(): void {
    this.srcImage=`https://www.countryflags.io/${this.country.code}/flat/64.png`;
  }
  onError()
    {
      this.srcImage="https://www.countryflags.io/IL/shiny/64.png";
    }


}
