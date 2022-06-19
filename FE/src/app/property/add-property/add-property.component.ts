import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IProperty } from '../iproperty';

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

  propertyView: IProperty = {
    Id: null,
    SellRent: null,
    Name: "",
    Type: null,
    Price: null
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
