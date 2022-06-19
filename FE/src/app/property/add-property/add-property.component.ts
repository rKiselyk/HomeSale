import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IPropertyBase } from 'src/app/model/ipropertybase';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild("Form") propertyForm: NgForm;
  @ViewChild('formTabs', { static: false }) formTabs?: TabsetComponent;

  propertyTypes: string[] = ["House","Apartment","Duplex"]
  furnishTypes: string[] = ["Fully","Semi","Unfurnished"]

  propertyView: IPropertyBase = {
    Id: null,
    SellRent: null,
    Name: null,
    PropertyType: null,
    FurnitureType: null,
    Price: null,
    BHK: null,
    BuildArea: null,
    City: null,
    RTM: null
  }

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  submit() {
    console.log(this.propertyForm);

  }

  back() {
    this.router.navigate(["/"])
  }

  selectTab(tabId: number) {
    if (this.formTabs?.tabs[tabId]) {
      this.formTabs.tabs[tabId].active = true;
    }
  }

}
