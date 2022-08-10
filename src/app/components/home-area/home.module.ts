import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AddressComponent } from './address/address.component';

// ng g m components/home-area/home --flat

@NgModule({
    declarations: [
        HomeComponent,
        AddressComponent
    ],
    imports: [
        CommonModule
    ]
})
export class HomeModule { }
