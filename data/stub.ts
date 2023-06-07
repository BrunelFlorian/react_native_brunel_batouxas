import { ListProduct } from "../models/ListProduct";
import { Product } from "../models/Product";

const list = [
  new Product("id1prod", "Apple", "Description Apple", "Fruits" ),
  new Product("id2prod", "Orange", "Description Orange", "Fruits" ),
];

export const LISTPRODUCT_DATA: ListProduct[] = [
  new ListProduct("id1","Fruits", list),
  new ListProduct("id2","Vegetables", list),
  new ListProduct("id3","Meat", list),
];

