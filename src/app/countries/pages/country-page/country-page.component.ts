import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { count, switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit {

  public country?: Country;

  constructor(
    private router:Router,
    private _activatedRoute:ActivatedRoute,
    private countriesServices:CountriesService,
  ){}

  ngOnInit(): void {
    this._activatedRoute.params
    .pipe(
       switchMap(({id})=> this.countriesServices.searchCountryAlphaCode(id))
    )
    .subscribe((country) =>{
      console.log({country})
      
      if(!country) return this.router.navigateByUrl('');
      console.log('Existe el país')
      return this.country = country;
    })
  }
  
}
