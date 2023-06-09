import { ListProduct } from "../models/ListProduct";
import { Product } from "../models/Product";

const PRODUCT_DATA: Product[] = [
  new Product("id1prod", "Apple", "Description Apple", "Fruits" ),
  new Product("id2prod", "Orange", "Description Orange", "Fruits" ),
];

export const LISTPRODUCT_DATA: ListProduct[] = [
  new ListProduct("id1","Fruits", PRODUCT_DATA),
  new ListProduct("id2","Vegetables", PRODUCT_DATA),
  new ListProduct("id3","Meat", []),
];

