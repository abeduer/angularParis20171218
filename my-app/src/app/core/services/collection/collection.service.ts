import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { Item } from '../../../shared/interfaces/item.model';

@Injectable()
export class CollectionService {
  private itemsCollection: AngularFirestoreCollection<Item>;
  collection: Observable<Item[]>;

  constructor(private _AngularFirestore: AngularFirestore) {
    this.itemsCollection = _AngularFirestore.collection<Item>('collection');
    this.setCollection(this.itemsCollection.valueChanges());
  }

  getCollection(): Observable<Item[]> {
    return this.collection;
  }

  setCollection(collection: Observable<Item[]>): void {
    this.collection = collection;
  }

  getItem(id: string): Observable<Item> {
    return this._AngularFirestore.doc<Item>(`collection/${id}`).valueChanges();
  }

  addItem(item: Item): void {
    item.id = this._AngularFirestore.createId();
    this.itemsCollection.doc(item.id).set(item);
  }

  editItem(item: Item): void {
    this.itemsCollection.doc(item.id).set(item);
  }

  updateItem(item: Item): void {
    this.itemsCollection.doc(item.id).update(item);
  }

  deleteItem(item: Item): void {
    this.itemsCollection.doc(item.id).delete();
  }
}
