import { Item, itemDetail } from './models/category';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }
getOnlyItm(){
  return this.http.get(environment.apiBaseUrl + '/items');

}
  getItem() {
    return this.http.get(environment.apiBaseUrl + '/items_category');
  }
  viewDetails(it){
    const itm={
item:it
    };
    return this.http.post(environment.apiBaseUrl + '/items_prices',itm);

  }
  //getCat(name: string): Observable<itemDetail> {
    //return this.http.get<itemDetail>(environment.apiBaseUrl + '/items_prices',name);
 // }
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
      unit:unit,
     // img:image,

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
  deleteItemDetail(id){
    return this.http.post(`${environment.apiBaseUrl}/items_prices/delete/${id}`,id);
  }
  hideItem(id){
    return this.http.post(`${environment.apiBaseUrl}/items_category/hide/${id}`,id);

  }
  showItem(id){
    return this.http.post(`${environment.apiBaseUrl}/items_category/show/${id}`,id);

  }
}
