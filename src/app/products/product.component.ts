import { Component, OnInit } from '@angular/core';
import { HttpClientService, Product } from '../service/httpclient.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:Product[];
    
   
  constructor(
    private httpClientService:HttpClientService
  ) { }

  ngOnInit() {
     this.httpClientService.getProducts().subscribe(
      response =>this.handleSuccessfulResponse(response),
     );
  }

handleSuccessfulResponse(response)
{
    this.products=response;
}

deleteProductproducts(product: Product): void {
   this.httpClientService.deleteProduct(product)
     .subscribe( data => {
      this.products = this.products.filter(u => u !== product);
   })
};


}