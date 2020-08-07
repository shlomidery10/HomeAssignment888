import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ContinentPageComponent } from './homepage/continents-grid/continent-page/continent-page.component';
import { ContinentsGridComponent } from './homepage/continents-grid/continents-grid.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [

  { path: 'continentsGrid',children:
  [
    { path: '', component: ContinentsGridComponent,pathMatch:'full' }, 
    { path: 'continent/:id', component: ContinentPageComponent }, 
    // { path: '', component: ContinentsGridComponent},
    { path: '**', component: ErrorComponent },  // Wildcard route for a 404 page



  ]},
  
  // { path: 'second-component', component: ContinentPageComponent },
  { path: '',   redirectTo: '/continentsGrid', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: ErrorComponent },  // Wildcard route for a 404 page


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
