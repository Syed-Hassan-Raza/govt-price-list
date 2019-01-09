import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Category } from "./models/category";
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategory() {
    return this.http.get(environment.apiBaseUrl + '/categories');
  }
  addCategory(name){
    const cat={
      Category_Name:name,

    };
    return this.http.post(environment.apiBaseUrl+'/categories/add',cat);
  }
  editCategory(id,name){
    const cat={
      Category_Name:name,

    };
    return this.http.post(`${environment.apiBaseUrl}/categories/update/${id}`,cat);
  }
  deleteCategory(id){
    return this.http.post(`${environment.apiBaseUrl}/categories/delete/${id}`,id);
  }
}
