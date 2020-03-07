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
    
  // url = "http://asellionproductsservice-env-1.eba-n74xmghk.us-east-2.elasticbeanstalk.com:8080/api"
  url = "http://192.168.100.4/api"
  
  KEY_TO_READ = environment.KEY_TO_READ;

  getProducts()
  {
    console.log(this.KEY_TO_READ)
    let token =sessionStorage.getItem('token')
    console.log(sessionStorage.getItem('token'))
       let headers = new HttpHeaders({ Authorization: sessionStorage.getItem('token') });
       return this.httpClient.get<Product[]>(this.url + '/products',{headers});
  }

  public deleteProduct(product) {
    let headers = new HttpHeaders({ Authorization: sessionStorage.getItem('token') });
    return this.httpClient.delete<Product>(this.url + "/products" + "/"+ product.empId,{headers});
  }

  public createProduct(product) {
    let headers = new HttpHeaders({ Authorization: sessionStorage.getItem('token') });
    return this.httpClient.post<Product>(this.url + "/products", product,{headers});
  }
}