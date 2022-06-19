import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IProperty } from '../model/iproperty';
import { Property } from '../model/property';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(
    private http:HttpClient
  ) { }

  getAllProperties(sellRent: number): Observable<IProperty[]> {
    return this.http.get("data/properties.json").pipe(
      map(data => {
        const properties: IProperty[] = [];

        for (const id in data) {
          if (Object.prototype.hasOwnProperty.call(data, id) && (data as any)[id].SellRent === sellRent) {
            properties.push((data as any)[id]);

          }
        }

        return properties;
      })
    );
  }

  addProperty(property: Property) {
    localStorage.setItem("newProperty", JSON.stringify(property));
  }
}
