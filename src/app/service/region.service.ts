import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Region } from '../model/region';
import { first, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor(private httpClient: HttpClient) { }

  public listByFilter(): Observable<Region[]> {
    return this.httpClient.get<Region[]>('http://localhost:8080/regions')
    .pipe(
      first(),
      // delay(5000),
      tap(regions => console.log(regions))
    );
  }

}
