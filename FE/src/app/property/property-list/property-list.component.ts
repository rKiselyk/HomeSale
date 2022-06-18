import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  properties: any[] = [
    {
      id: 1,
      type: "House",
      price: 1200,
      name: "my house"
    },
    {
      id: 2,
      type: "House",
      price: 1200,
      name: "my house"
    },
    {
      id: 3,
      type: "House",
      price: 1200,
      name: "my house"
    },
    {
      id: 3,
      type: "House",
      price: 1200,
      name: "my house"
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
