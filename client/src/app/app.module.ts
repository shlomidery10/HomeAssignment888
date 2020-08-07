import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ContinentsGridComponent } from './homepage/continents-grid/continents-grid.component';
import { ContinentPageComponent } from './homepage/continents-grid/continent-page/continent-page.component';
import { ErrorComponent } from './error/error.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import { CountryComponent } from "../app/homepage/continents-grid/continent-page/country/country.component";
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ContinentsGridComponent,
    ContinentPageComponent,
    ErrorComponent,
    CountryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([]),
    BrowserAnimationsModule,
    MatCardModule,
    NgbModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
