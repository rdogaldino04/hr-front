import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { first, tap } from 'rxjs/operators';
import { Location } from '../model/location';
import { LocationFilter } from '../model/filter/location-filter';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private httpClient: HttpClient) { }

  public findByFilter(filter: LocationFilter): Observable<Location[]> {
    const params = new HttpParams()
      .append('city', filter.city);
    return this.httpClient.get<Location[]>(`${environment.BASE_API}/locations`, {params})
    .pipe(
      first(),
      tap(regions => console.log(regions))
    );
  }

}
