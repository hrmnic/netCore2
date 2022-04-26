import { BasketService } from './../../basket/basket.service';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { IProduct } from 'src/app/shared/models/IProduct';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductItemComponent implements OnInit {
  @Input() product: IProduct;

  constructor(private basketService:BasketService) {}

  ngOnInit(): void {}
  addItemToBasket(){
    this.basketService.addItemToBasket(this.product);
  }
}
