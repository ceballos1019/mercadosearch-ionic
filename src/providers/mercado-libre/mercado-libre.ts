import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MercadoLibreProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MercadoLibreProvider {

apiLink:any = "https://api.mercadolibre.com/sites/MCO/search?q=";

  constructor(public http: Http) {}

  search(product:string){
      return new Promise((resolve, reject)=> {
        var link:string = this.apiLink + product;
        this.http.get(link).map(res=>res.json()).subscribe(
          (data) => {
            resolve(data);
          },
          (error) => {
            reject("Error: " + error);
          })
  })}

}
