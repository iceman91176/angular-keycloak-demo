import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { NGXLogger } from 'ngx-logger';
import { AlertService } from '@full-fledged/alerts';
import { CatalogService } from '@core/services';
import {
    ProductItemDto,  NamedProductCatalogDto,
} from '@splapi/models';


@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.css']
})
export class ProductCatalogComponent implements OnInit {

  catalogs: NamedProductCatalogDto[];
  selectedCatalog:NamedProductCatalogDto=<NamedProductCatalogDto>{};
  productsInCategory:ProductItemDto[];

  constructor(

        private catalogService: CatalogService,

  ) { }

  ngOnInit() {

    this.catalogService.getAllNamedCatalogs().subscribe(res => {
      this.catalogs=res;
    });

  }

  changeCatalog(catalog:NamedProductCatalogDto){
    this.catalogService.getProductsByNamedCatalog(catalog).subscribe(res => {
      this.productsInCategory=res;
    });


  }

}