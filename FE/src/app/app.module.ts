import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http"
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HousingService } from './services/housing.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { FormsModule } from '@angular/forms';

const appRoute: Routes = [
  { path: '', component: PropertyListComponent },
  { path: 'rent-property', component: PropertyListComponent },
  { path: 'add-property', component: AddPropertyComponent },
  { path: 'property-detail/:id', component: PropertyDetailComponent },
  { path: '**', component: PropertyListComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
    AddPropertyComponent,
    PropertyDetailComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [
    HousingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
