
export class Category {
 _id:string;
  Category_Name: string;
}
export class Item{
  Item_Name:string;
  unit:string;
  category:{
    Category_Name:string;
  };
}
