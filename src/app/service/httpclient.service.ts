import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

     

  getProducts()
  {
    let token =sessionStorage.getItem('token')
    console.log(sessionStorage.getItem('token'))

    const headers = new HttpHeaders({ Authorization: sessionStorage.getItem('token') });
    
       return this.httpClient.get<Product[]>('http://localhost:8080/api/products',{headers});
  }

  public deleteProduct(product) {
    let username='javainuse'
    let password='password'
  
    const headers = new HttpHeaders({ Authorization: 'BEarer ' + btoa(username + ':' + password) });
    return this.httpClient.delete<Product>("http://localhost:8080/api/products" + "/"+ product.empId,{headers});
  }

  public createProduct(product) {
    let username='javainuse'
    let password='password'
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.post<Product>("http://localhost:8080/api/products", product,{headers});
  }
}