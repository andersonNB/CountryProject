import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {


    private apiUrl: string = 'https://restcountries.com/v3.1';

    constructor(private http: HttpClient) { }



    searchCountryAlphaCode(code:string):Observable<Country | null>{
        return this.http.get<Country[]>(`${this.apiUrl}/alpha/${code}`)
        .pipe(
            map(countries => countries.length > 0 ? countries[0] : null),
            catchError(error=> of(null))
        )
    }

    searchCapital(term:string):Observable<Country[]> {
        return this.http.get<Country[]>(`${this.apiUrl}/capital/${term}`)
        .pipe(
            catchError(error =>{
                console.log('pipe service: ', error)
                return of([])
            } )
        )
    }

    searchCountry(country:string):Observable<Country[]>{
        return this.http.get<Country[]>(`${this.apiUrl}/name/${country}`)
        .pipe(
            catchError(error=> of([]))
        )
    }


    public searchRegion(region:string):Observable<Country[]>{
        return this.http.get<Country[]>(`${this.apiUrl}/region/${region}`)
        .pipe(
            catchError(error=> of([]))
        )
    }
}