import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BasketService } from './basket/basket.service';
import { IPagination } from './shared/models/IPagination';
import { IProduct } from './shared/models/IProduct';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'E-ticaret';
  //products: IProduct[];

constructor(private basketService : BasketService){}

  ngOnInit(): void{

    const basketId=localStorage.getItem('basket_id');
    if(basketId){
      this.basketService.getBasket(basketId).subscribe(() =>{
        console.log("initiliaze basket");
      },error =>{
        console.log(error);

      });
    }
    /*this.http.get<IPagination>('https://localhost:44376/api/products').subscribe((response:IPagination)=>{
      servise get yapılınca sadece izlenir ama subscribe olunca datalar ele alınmış olur

      this.products=response.data;

  },error=>{
    console.log(error);
    });
    */
  }
}
