import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCatalogComponent } from './components/product-catalog.component';
import { ProductCardComponent } from './components/product-card.component';
import { AppMaterialModule } from '@app/shared/app-material.module';
import { SharedModule } from '@app/shared/shared.module';
export {ProductCatalogComponent} from './components/product-catalog.component';

@NgModule({
  declarations: [ProductCatalogComponent, ProductCardComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    SharedModule
  ],
  exports: [ProductCatalogComponent,ProductCardComponent]
})
export class ProductsModule { }
