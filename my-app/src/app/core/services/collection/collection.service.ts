import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { Item } from '../../../shared/interfaces/item.model';
import { State } from '../../../shared/enums/state.enum';

@Injectable()
export class CollectionService {
  private itemsCollection: AngularFirestoreCollection<Item>;
  collection: Observable<Item[]>;

  constructor(private _AngularFirestore: AngularFirestore) {
    this.setCollection(_AngularFirestore.collection<Item>('collection'));
  }

  getCollection(): Observable<Item[]> {
    return this.collection;
  }

  setCollection(collection: AngularFirestoreCollection<Item>): void {
    this.itemsCollection = collection;
    this.collection = this.itemsCollection.valueChanges();
  }

  addItem(item: Item) {
    item.id = this._AngularFirestore.createId();
    this.itemsCollection.doc(item.id).set(item);
  }

  updateItem(item: Item) {
    this.itemsCollection.doc(item.id).update(item);
  }

  deleteItem(item: Item) {
    this.itemsCollection.doc(item.id).delete();
  }
}
