import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ItemService } from 'src/app/shared/item.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  itemdetails:any;
  id: string;

  constructor(private itemService: ItemService,
    private snackbar: MatSnackBar,private router: Router,
    private route: ActivatedRoute

    ) {

    }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.fetchData(this.id);
    });
    //this.fetchData();
  }
  fetchData(item) {
    this.itemService.viewDetails(item).subscribe( res => {
     this.itemdetails= res;
    });
  }
  delete(id){
    this.itemService.deleteItemDetail(id).subscribe(() => {
      this.snackbar.open(`Remove Successfully!`, "Ok", {
        duration: 3000
      });
      this.fetchData(this.id);

        });
  }
}
