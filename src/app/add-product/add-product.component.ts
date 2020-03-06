import { Component, OnInit } from '@angular/core';
import { HttpClientService, Product } from '../service/httpclient.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  user: Product = new Product("","","","");

  constructor(
    private httpClientService: HttpClientService
  ) { }

  ngOnInit() {
  }

  createProduct(): void {
    this.httpClientService.createProduct(this.user)
        .subscribe( data => {
          alert("Product created successfully.");
        });

  };

}