import { Item } from './models/category';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  getItem() {
    return this.http.get(environment.apiBaseUrl + '/items_category');
  }
  hiddenItems(){
    return this.http.get(environment.apiBaseUrl + '/items_category/hidden');

  }
  todayPricing(){
    return this.http.get(environment.apiBaseUrl + '/items/todayPrices');

  }
  addPricing(itmid,fst,scnd,trd){
    const itm={
      item:itmid,
      ratea:fst,
      rateb:scnd,
      ratec:trd

    };
    return this.http.post(`${environment.apiBaseUrl}/items/addPricing`,itm);

  }
  addItem(category,name,unit){
    const itm={
      category:category,
      Item_Name:name,
      unit:unit

    };
    return this.http.post(environment.apiBaseUrl+'/items/add',itm);
  }
  editItem(id,category,name,unit){
    const itm={
     category:category,
      Item_Name:name,
      unit:unit

    };
    return this.http.post(`${environment.apiBaseUrl}/items/update/${id}`,itm);
  }
  deleteItem(id){
    return this.http.post(`${environment.apiBaseUrl}/items/delete/${id}`,id);
  }
  hideItem(id){
    return this.http.post(`${environment.apiBaseUrl}/items_category/hide/${id}`,id);

  }
  showItem(id){
    return this.http.post(`${environment.apiBaseUrl}/items_category/show/${id}`,id);

  }
}
