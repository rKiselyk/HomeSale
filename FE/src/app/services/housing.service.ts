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
        const newProperties = JSON.parse(localStorage.getItem("newProperty"));

        if (newProperties) {
          for (const id in newProperties) {
            if (Object.prototype.hasOwnProperty.call(newProperties, id) && (newProperties as any)[id].SellRent === sellRent) {
              properties.push((newProperties as any)[id]);

            }
          }
        }

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
    let newProperty = [property]

    if (localStorage.getItem("newProperty")) {
      newProperty = [property, ...JSON.parse(localStorage.getItem("newProperty"))];
    }

    localStorage.setItem("newProperty", JSON.stringify(newProperty));
  }

  newPropId() {
    if (localStorage.getItem("PID")) {
      localStorage.setItem("PID", String(+localStorage.getItem("PID") + 1))

      return +localStorage.getItem("PID");
    } else {
      localStorage.setItem("PID", "101");
      return 101;
    }


  }
}
