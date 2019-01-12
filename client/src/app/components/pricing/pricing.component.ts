import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/shared/item.service';
import { MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
  frm: FormGroup;
items:any;
itemdetails:any;

  constructor( private itemService: ItemService,
    private fb: FormBuilder,private snackbar: MatSnackBar) {
      this.frm = this.fb.group({
        id: [""],
        Item_Name: ["", Validators.required],

        fst: ["", Validators.required],
        scnd:["",Validators.required],
        thrd:["",Validators.required]

      })
     }

  ngOnInit() {
    this.fetchData();
    this.fetchItms();
  }
  fetchData() {
    this.itemService.todayPricing().subscribe( res => {
     this.itemdetails= res;
    });
  }
  fetchItms() {
    this.itemService.getOnlyItm().subscribe( res => {
     this.items= res;
    });
  }
  submitData(itmid,fst,scnd,trd){

    this.itemService.addPricing(itmid,fst,scnd,trd).subscribe(() => {
      this.snackbar.open(`${name} Added Successfully!`, "Ok", {
        duration: 3000
      });
      this.fetchData();

  })
  }
  delete(id){
    if (confirm("Are you sure you want to delete it..?")) {

    this.itemService.deleteItemDetail(id).subscribe(() => {
      this.snackbar.open(`Remove Successfully!`, "Ok", {
        duration: 3000
      });
      this.fetchData();

        });
      }
  }

}
