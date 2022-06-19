import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProperty } from 'src/app/model/iproperty';
import { Property } from 'src/app/model/property';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  id: number;
  property: Property = new Property();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private housingService: HousingService
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params["id"];

    this.route.params.subscribe((params) => {
      this.id = +params["id"];
      this.housingService.getProperty(this.id).subscribe(
        (p: IProperty) => { this.property = <Property>p; });

    })
  }
}
