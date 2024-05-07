import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {



  public region:Country[]=[];


  constructor(public countriesServices:CountriesService ){}


  searchByRegion(nameRegion:string):void{
    this.countriesServices.searchRegion(nameRegion)
    .subscribe(region =>{
      this.region= region;
    })
  }
}
