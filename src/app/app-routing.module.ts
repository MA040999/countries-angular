import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { CountryListComponent } from './country-list/country-list.component';

const routes: Routes = [
  { path: '', component: CountryListComponent },
  { 
    path: 'country', 
    children: [
      { path: ':countryName', component: CountryDetailsComponent },
      { path: 'code/:countryCode', component: CountryDetailsComponent },
    ] 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
