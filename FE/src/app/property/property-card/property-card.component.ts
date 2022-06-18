import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {
  property: any = {
    id: 1,
    type: "House",
    price: 1200,
    name: "my house"
  };

  constructor() { }

  ngOnInit() {
  }

}
