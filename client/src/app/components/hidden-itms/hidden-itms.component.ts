import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ItemService } from 'src/app/shared/item.service';

@Component({
  selector: 'app-hidden-itms',
  templateUrl: './hidden-itms.component.html',
  styleUrls: ['./hidden-itms.component.css']
})
export class HiddenItmsComponent implements OnInit {
  items:any ;
  displayedColumns: string[] = ["Category_Name","Item_Name","unit" ,"actions"];

  constructor( private itemService: ItemService,
   private snackbar: MatSnackBar,) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.itemService.hiddenItems().subscribe( res => {
     this.items= res;
    });
  }
  show(id){
    this.itemService.showItem(id).subscribe(() => {
      this.snackbar.open(`Show Successfully!`, "Ok", {
        duration: 3000
      });
      this.fetchData();

        });
  }
}
