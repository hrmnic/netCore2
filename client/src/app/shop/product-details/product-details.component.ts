import { BreadcrumbService } from 'xng-breadcrumb';
import { Breadcrumb } from 'angular-crumbs';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/shared/models/IProduct';
import { ShopService } from '../shop.service';
import { BasketService } from 'src/app/basket/basket.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct;
  quantity=1;

  constructor(
    private shopService: ShopService,
    private activateRoute: ActivatedRoute,
    private BreadcrumbService: BreadcrumbService,
    private basketService: BasketService
  ) {}

  addItemToBasket(){
    this.basketService.addItemToBasket(this.product,this.quantity);
  }

  incrementQuantity(){
    this.quantity++;
  }
  decrementQuantity(){
    if(this.quantity>1){
      this.quantity--;
    }

  }

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct() {
    this.shopService
      .getProduct(+this.activateRoute.snapshot.paramMap.get('id'))
      .subscribe((pro) => {
        this.product = pro;
        this.BreadcrumbService.set('@shopDetail', this.product.name);
      }),
      (error) => {
        console.log(error);
      };
  }
}
