import { Category } from "./../../shared/models/category";
import { CategoryService } from "./../../shared/category.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { MatPaginator, MatTableDataSource, MatSort, MatSnackBar } from "@angular/material";
import { FormGroup, FormBuilder, Validator, Validators } from "@angular/forms";
import { from } from "rxjs";

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.css"]
})
export class CategoryComponent implements OnInit {
  frm: FormGroup;

  category: Category[];
  dataSource = new MatTableDataSource<Category>(this.category);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ["Category_Name", "actions"];

  constructor(
    private categoryService: CategoryService,
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
    this.categoryService.getCategory().subscribe((data: Category[]) => {
      this.category = data;
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
    this.categoryService.editCategory(id,name).subscribe(() => {
      this.snackbar.open(`Data Updated Successfully!`, "Ok", {
        duration: 3000
      });
      this.fetchData();

  })
}
  addData(name) {
    this.categoryService.addCategory(name).subscribe(() => {
      this.snackbar.open(`${name} Added Successfully!`, "Ok", {
        duration: 3000
      });
      this.fetchData();

  })
}
  deleteData(id) {
    if (confirm("Are you sure you want to delete it..?")) {

     this.categoryService.deleteCategory(id).subscribe(() => {
      this.snackbar.open(`Deleted Successfully!`, "Ok", {
        duration: 3000
      });
      this.fetchData();

        });
      }


}
}
