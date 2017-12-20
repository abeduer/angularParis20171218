import { Injectable } from '@angular/core';
import { COLLECTION } from '../../../items/collection';
import { Item } from '../../../shared/interfaces/item.model';

@Injectable()
export class CollectionService {
  collection: Item[];

  constructor() {
    this.setCollection(COLLECTION);
  }

  getCollection(): Item[] {
    return this.collection;
  }

  setCollection(collection: Item[]): void {
    this.collection = collection;
  }

  addItem() {

  }

  updateItem() {

  }

  deleteItem() {

  }

}
