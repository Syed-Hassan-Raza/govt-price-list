import { Category,Item } from './../../shared/models/category';
import { CategoryService } from './../../shared/category.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatSnackBar, MatTableDataSource } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemService } from 'src/app/shared/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent implements OnInit {
  frm: FormGroup;

  items:any ;
  Category:Category[];

  dataSource = new MatTableDataSource<this.items>(this.items);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ["Category_Name","Item_Name","unit" ,"actions"];

  constructor(
    private itemService: ItemService,
    private router: Router,
    private fb: FormBuilder,private snackbar: MatSnackBar,
    private categoryService:CategoryService

  ) {
    this.frm = this.fb.group({
      id: [""],
      Item_Name: ["", Validators.required],

      Category_Name: ["", Validators.required],
      unit:["",Validators.required]
    });
  }

  ngOnInit() {
    this.fetchData();
    this. fetchCat();
    //this.dataSource.sort = this.sort;
  }

  fetchData() {
    this.itemService.getItem().subscribe( res => {
     this.items= res;
    });
  }
  fetchCat() {
    this.categoryService.getCategory().subscribe((data: Category[]) => {
      this.Category = data;
    });
  }
  openDialog(id,cname,iname,unit) {
    if (id != "") {
      this.frm.get("id").setValue(id);
      this.frm.get("Category_Name").setValue(cname);
      this.frm.get("Item_Name").setValue(iname);

      this.frm.get("unit").setValue(unit);

    } else {
      this.frm.get("id").setValue("");

      this.frm.get("Category_Name").setValue("");
      this.frm.get("Item_Name").setValue("");

      this.frm.get("unit").setValue("");

    }
  }
  submitData(id,cat, name,unit) {

    if (id=="") {
     this.addData(cat,name,unit);


    } else {
      this.editData(id,cat,name,unit);

    }
  }
  editData(id,cat,name,unit) {
    this.itemService.editItem(id,cat,name,unit).subscribe(() => {
      this.snackbar.open(`Updated Successfully!`, "Ok", {
        duration: 3000
      });
      this.fetchData();

   })
}
  addData(cat,name,unit) {
     this.itemService.addItem(cat,name,unit).subscribe(() => {
       this.snackbar.open(`${name} Added Successfully!`, "Ok", {
         duration: 3000
       });
       this.fetchData();

   })
}
itemDetail(id){
  this.router.navigate(['/Dashboard/item_details/' + id + '']);

}
  deleteData(id) {
    this.itemService.deleteItem(id).subscribe(() => {
      this.snackbar.open(`Deleted Successfully!`, "Ok", {
        duration: 3000
      });
      this.fetchData();

        });


}
hide(id){
  this.itemService.hideItem(id).subscribe(() => {
    this.snackbar.open(`hide Successfully!`, "Ok", {
      duration: 3000
    });
    this.fetchData();

      });
}
}
