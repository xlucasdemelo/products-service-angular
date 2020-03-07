import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

export class Product{
  constructor(
    public empId:string,
    public name:string,
    public designation:string,
    public salary:string,
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient:HttpClient
  ) {}

  url = 'http://192.168.100.4:8080/api'     

  getProducts()
  {
      const headers = new HttpHeaders({ Authorization: sessionStorage.getItem('token') });
      return this.httpClient.get<Product[]>(this.url + '/products',{headers});
  }

  public deleteProduct(product) {
    const headers = new HttpHeaders({ Authorization: sessionStorage.getItem('token') });
    return this.httpClient.delete<Product>(this.url + "/products" + "/"+ product.empId,{headers});
  }

  public createProduct(product) {
    const headers = new HttpHeaders({ Authorization: sessionStorage.getItem('token') });
    return this.httpClient.post<Product>(this.url + "/products", product,{headers});
  }
}