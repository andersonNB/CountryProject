import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {

  public countries: Country[]=[];


  constructor(public countriesService:CountriesService){

  }

  searchByCountry(country:string):void{

    this.countriesService.searchCountry(country)
    .subscribe(countries=>{
      this.countries = countries;
    })
  }
}
