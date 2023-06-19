import uuid from 'react-native-uuid';
import { ListProduct } from "../models/ListProduct";
import { Product } from "../models/Product";
import { Category } from "../models/Category";

export const PRODUCT_DATA: Product[] = [
  new Product(uuid.v4(), "Apple", "Description Apple", "Fruits"),
  new Product(uuid.v4(), "Orange", "Description Orange", "Fruits"),
  new Product(uuid.v4(), "Banana", "Description Banana", "Fruits"),
  new Product(uuid.v4(), "Tomato", "Description Tomato", "Vegetables"),
  new Product(uuid.v4(), "Potato", "Description Potato", "Vegetables"),
  new Product(uuid.v4(), "Carrot", "Description Carrot", "Vegetables"),
  new Product(uuid.v4(), "Beef", "Description Beef", "Meat"),
  new Product(uuid.v4(), "Chicken", "Description Chicken", "Meat"),
  new Product(uuid.v4(), "Pork", "Description Pork", "Meat"),
  new Product(uuid.v4(), "Fish", "Description Fish", "Meat"),
  new Product(uuid.v4(), "Lamb", "Description Lamb", "Meat"),
  new Product(uuid.v4(), "Turkey", "Description Turkey", "Meat"),
  new Product(uuid.v4(), "Duck", "Description Duck", "Meat"),
  new Product(uuid.v4(), "Goose", "Description Goose", "Meat"),
  new Product(uuid.v4(), "Rabbit", "Description Rabbit", "Meat"),
  new Product(uuid.v4(), "Quail", "Description Quail", "Meat"),
  new Product(uuid.v4(), "Pheasant", "Description Pheasant", "Meat"),
  new Product(uuid.v4(), "Partridge", "Description Partridge", "Meat"),
  new Product(uuid.v4(), "Guinea fowl", "Description Guinea fowl", "Meat"),
];

export const LISTPRODUCT_DATA: ListProduct[] = [
  new ListProduct("id1","Fruits", getCopieAleatoireProduits([...PRODUCT_DATA], 4)),
  new ListProduct("id2","Vegetables", getCopieAleatoireProduits([...PRODUCT_DATA], 2)),
  new ListProduct("id3","Meat", []),
];

// Add product category stub
export const LISTCATEGORY_DATA: Category[] = [
  new Category("1", "Fruits"),
  new Category("2", "Vegetables"),
  new Category("3", "Meat"),
];

// Fonction pour récupérer une copie aléatoire des produits
function getCopieAleatoireProduits(produits: Product[], nombreElements: number) {
  var copieProduits = produits.slice(); // Crée une copie superficielle du tableau de produits
  
  // Algorithme de Fisher-Yates pour mélanger aléatoirement les éléments du tableau
  for (var i = copieProduits.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = copieProduits[i];
    copieProduits[i] = copieProduits[j];
    copieProduits[j] = temp;
  }
  
  // Retourne un sous-tableau avec le nombre d'éléments demandé
  return copieProduits.slice(0, nombreElements);
}
