import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IProperty } from '../property/iproperty';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(
    private http:HttpClient
  ) { }

  getAllProperties(): Observable<IProperty[]> {
    return this.http.get("data/properties.json").pipe(
      map(data => {
        const properties: IProperty[] = [];

        for (const id in data) {
          if (Object.prototype.hasOwnProperty.call(data, id)) {
            properties.push((data as any)[id]);

          }
        }

        return properties;
      })
    );
  }
}
