import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatSnackBar, MatTableDataSource } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category, Item } from 'src/app/shared/models/category';
import { ItemService } from 'src/app/shared/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  frm: FormGroup;

  items: Item[];
  dataSource = new MatTableDataSource<Item>(this.items);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ["Item_Name", "actions"];

  constructor(
    private itemService: ItemService,
    private router: Router,
    private fb: FormBuilder,    private snackbar: MatSnackBar

  ) {
    this.frm = this.fb.group({
      id: [""],
      Category_Name: ["", Validators.required]
    });
  }

  ngOnInit() {
    this.fetchData();
    //this.dataSource.sort = this.sort;
  }

  fetchData() {
    this.itemService.getItem().subscribe((data: Item[]) => {
      this.items = data;
    });
  }
  openDialog(id, name) {
    if (id != null) {
      this.frm.get("id").setValue(id);
      this.frm.get("Category_Name").setValue(name);
    } else {
      this.frm.get("id").setValue("");

      this.frm.get("Category_Name").setValue("");
    }
  }
  submitData(id, name) {

    if (id=="") {
      this.addData(name);


    } else {
      this.editData(id, name);

    }
  }
  editData(id,name) {
  //   this.categoryService.editCategory(id,name).subscribe(() => {
  //     this.snackbar.open(`Data Updated Successfully!`, "Ok", {
  //       duration: 3000
  //     });
  //     this.fetchData();

  // })
}
  addData(name) {
  //   this.categoryService.addCategory(name).subscribe(() => {
  //     this.snackbar.open(`${name} Added Successfully!`, "Ok", {
  //       duration: 3000
  //     });
  //     this.fetchData();

  // })
}
  deleteData(id) {
    /*  this.categoryService.deleteCategory(id).subscribe(() => {
      this.snackbar.open(`Deleted Successfully!`, "Ok", {
        duration: 3000
      });
      this.fetchData();

        }); */


}
}
