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

const url = environment.APIEndpoint + "/api";

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient:HttpClient
  ) {}

  getProducts()
  {
      const headers = new HttpHeaders({ Authorization: sessionStorage.getItem('token') });
      return this.httpClient.get<Product[]>(url + '/products',{headers});
  }

  public deleteProduct(product) {
    const headers = new HttpHeaders({ Authorization: sessionStorage.getItem('token') });
    return this.httpClient.delete<Product>(url + "/products" + "/"+ product.empId,{headers});
  }

  public createProduct(product) {
    const headers = new HttpHeaders({ Authorization: sessionStorage.getItem('token') });
    return this.httpClient.post<Product>(url + "/products", product,{headers});
  }
}