import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { count } from 'rxjs';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit {

  constructor(
    private _activatedRoute:ActivatedRoute,
    private countriesServices:CountriesService
  ){}

  ngOnInit(): void {
    this._activatedRoute.params
    .subscribe(params =>{
      console.log({params})
      this.countriesServices.searchCountryAlphaCode(params['id'])
      .subscribe(
        country => console.log({country}),
        error => console.log({error})
      )
    })
  }
  
}
