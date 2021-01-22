import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductCatalogComponent} from '@app/features/products/products.module';

const routes: Routes = [
    { path: '', redirectTo: '/products', pathMatch: 'full' },
    { path: 'products', component: ProductCatalogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
