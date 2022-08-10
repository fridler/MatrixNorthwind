import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';

// ng g m components/products-area/products --flat

@NgModule({
    declarations: [
        ProductListComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ProductsModule { }
