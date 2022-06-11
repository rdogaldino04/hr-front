import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Region } from '../model/region';
import { first, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor(private httpClient: HttpClient) { }

  public listByFilter(): Observable<Region[]> {
    return this.httpClient.get<Region[]>(`${environment.BASE_API}/regions`)
    .pipe(
      first(),
      // delay(5000),
      tap(regions => console.log(regions))
    );
  }

}
