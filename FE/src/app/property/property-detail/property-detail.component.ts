import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProperty } from 'src/app/model/iproperty';
import { Property } from 'src/app/model/property';
import { HousingService } from 'src/app/services/housing.service';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  id: number;
  property: Property = new Property();

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private housingService: HousingService
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params["id"];
    this.route.data.subscribe((data) => {
      this.property = (data as any)["prp"];
    })

    this.galleryOptions = [
      {
          width: '100%',
          height: '465px',
          thumbnailsColumns: 4,
          imageAnimation: NgxGalleryAnimation.Slide,
          preview: true
      }
    ];

    this.galleryImages = [
      { small: "assets/images/internal-1.jpg", medium: "assets/images/internal-1.jpg", big: "assets/images/internal-1.jpg"},
      { small: "assets/images/internal-2.jpg", medium: "assets/images/internal-2.jpg", big: "assets/images/internal-2.jpg"},
      { small: "assets/images/internal-3.jpg", medium: "assets/images/internal-3.jpg", big: "assets/images/internal-3.jpg"},
      { small: "assets/images/internal-4.jpg", medium: "assets/images/internal-4.jpg", big: "assets/images/internal-4.jpg"}
    ]

    // this.route.params.subscribe((params) => {
    //   this.id = +params["id"];
    //   this.housingService.getProperty(this.id).subscribe(
    //     (p: Property) => { this.property = p; },
    //     error => { this.router.navigate(["/"])});

    // })
  }
}
