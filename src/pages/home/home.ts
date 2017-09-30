import { Component } from '@angular/core';
import { MercadoLibreProvider } from '../../providers/mercado-libre/mercado-libre';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  searchQuery: string = '';
  resultApi: any = [];
  items:any = [];

  constructor(private _mercadoLibre: MercadoLibreProvider) {
    this.initializeSearch();
  }

  initializeSearch() {
    let query = 'fz';
    this._mercadoLibre.search(query).then((data) => {
      this.resultApi = data;
      this.items = this.resultApi.results;
    })
  }

  searchItems(evt: any) {
    let query = evt.target.value;
    this._mercadoLibre.search(query).then((data) => {
      this.resultApi = data;
      this.items = this.resultApi.results;
    });
  }


}
