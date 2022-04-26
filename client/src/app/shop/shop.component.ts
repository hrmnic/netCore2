import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { IBrand } from '../shared/models/brand';
import { IProduct } from '../shared/models/IProduct';
import { IType } from '../shared/models/productType';
import { ShopParams } from '../shared/models/shopParams';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class ShopComponent implements OnInit {
  @ViewChild('search', { static: true }) searchTerm: ElementRef;

  products: IProduct[];
  brands: IBrand[];
  types: IType[];

  shopParams = new ShopParams();
  totalCount: number = 0;

  sortOptions = [
    { name: 'Alphabetical', value: 'name' },
    { name: 'Price: Low to High', value: 'priceAsc' },
    { name: 'Price: High to Low', value: 'priceDesc' },
  ];

  constructor(private shopService: ShopService) {}

  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getTypes();
  }
  getProducts() {
    this.shopService.getProducts(this.shopParams).subscribe(
      (response) => {
        this.products = response!.data;
        this.shopParams.pageNumber = response!.pageIndex;
        this.shopParams.pageSize = response!.pageSize;
        this.totalCount = response!.count;
        console.log(this.products);
        console.log(response);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  getBrands() {
    this.shopService.getBrands().subscribe(
      (response) => {
        var firstItem = { id: 0, name: 'All', ...response };
        this.brands = [firstItem, ...response]; // başına All ekler,
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getTypes() {
    this.shopService.getTypes().subscribe(
      (response) => {
        var firstItem = { id: 0, name: 'All', ...response };
        this.types = [firstItem, ...response];
      },
      (err) => {
        console.log(err);
      }
    );
  }
  onBrandSelected(brandId: number) {
    //seçili brand leri gönderebilmek için
    this.shopParams.brandId = brandId;
    this.shopParams.pageNumber = 1;
    this.getProducts();
  }

  onTypeSelected(typeId: number) {
    this.shopParams.typeId = typeId;
    this.shopParams.pageNumber = 1;
    this.getProducts();
  }
  //seçim işlemi gerçekleştirilince tetiklenecek metot

  onPageChanged(event: any) {
    if (this.shopParams.pageNumber !== event) {
      this.shopParams.pageNumber = event.page+ 1;
      this.getProducts();
    }
  }
  onSearch() {
    this.shopParams.search = this.searchTerm.nativeElement.value;
    this.getProducts();
  }
  onReset() {
    this.searchTerm.nativeElement.value = undefined;
    this.shopParams = new ShopParams();
    this.getProducts();
  }
}
