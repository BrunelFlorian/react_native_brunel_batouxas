import uuid from 'react-native-uuid';
import { ListProduct } from "../models/ListProduct";
import { Product } from "../models/Product";
import { Category } from "../models/Category";

export const PRODUCT_DATA: Product[] = [
  new Product(uuid.v4(), "Apple", "Description Apple", "Fruits"),
  new Product(uuid.v4(), "Orange", "Description Orange", "Fruits"),
];

export const LISTPRODUCT_DATA: ListProduct[] = [
  new ListProduct("id1","Fruits", [...PRODUCT_DATA]),
  new ListProduct("id2","Vegetables", [...PRODUCT_DATA]),
  new ListProduct("id3","Meat", []),
];

// Add product category stub
export const LISTCATEGORY_DATA: Category[] = [
  new Category("1", "Fruits"),
  new Category("2", "Vegetables"),
  new Category("3", "Meat"),
]
