import { ListProduct } from "../models/ListProduct";
import { Product } from "../models/Product";
import { Category } from "../models/Category";

const PRODUCT_DATA: Product[] = [
  new Product("id1prod", "Apple", "Description Apple", "Fruits" ),
  new Product("id2prod", "Orange", "Description Orange", "Fruits" ),
];

export const LISTPRODUCT_DATA: ListProduct[] = [
  new ListProduct("id1","Fruits", PRODUCT_DATA),
  new ListProduct("id2","Vegetables", PRODUCT_DATA),
  new ListProduct("id3","Meat", []),
];

// Add product category stub
export const LISTCATEGORY_DATA: Category[] = [
  new Category("1", "Fruits"),
  new Category("2", "Vegetables"),
  new Category("3", "Meat"),
]