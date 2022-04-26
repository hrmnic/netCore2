import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBrand } from '../shared/models/brand';
import { IPagination } from '../shared/models/IPagination';
import { IType } from '../shared/models/productType';
import {map} from 'rxjs/operators';
import { ShopParams } from '../shared/models/shopParams';
import { IProduct } from '../shared/models/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ShopService {   //parametreler burada geçilir

  baseUrl="https://localhost:44376/api/";
  //aynı sorun olmaması lazım

  constructor(private http:HttpClient) { }

  getProducts(shopParams : ShopParams){

    let params= new HttpParams();  //brandId,typeId nin parametre olduğu anlaşılsın diye

    if(shopParams.brandId !== 0){
      params = params.append('brandId',shopParams.brandId.toString());
    }

    if(shopParams.typeId !==0){
      params=params.append('typeId',shopParams.typeId.toString());
    }

    if(shopParams.search){
      params=params.append('search',shopParams.search);
    }

    params=params.append('sort',shopParams.sort);
    params=params.append('pageIndex',shopParams.pageNumber.toString());
    params=params.append('pageIndex',shopParams.pageSize.toString());

    return this.http.get<IPagination>(this.baseUrl+'Products',{observe: 'response',params})
    .pipe(
      map(response =>{

        return response.body;
      })
    );
  }
  getProduct(id:number){
    return this.http.get<IProduct>(this.baseUrl + 'products/'+id);
  }
  getBrands(){
    return this.http.get<IBrand[]>(this.baseUrl+'products/brands')
  }
  getTypes(){
    return this.http.get<IType[]>(this.baseUrl+'products/types')
  }
}
