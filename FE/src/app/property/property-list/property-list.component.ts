import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../iproperty';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  properties: IProperty[] = [];

  constructor(
    private housingService: HousingService
  ) { }

  ngOnInit(): void {
    this.housingService.getAllProperties().subscribe((res) => {
      this.properties = res;
      console.log(res)
    })
  }
}
