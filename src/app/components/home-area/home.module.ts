import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

// ng g m components/home-area/home --flat

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule
    ]
})
export class HomeModule { }
