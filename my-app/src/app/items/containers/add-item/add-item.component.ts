import { Component, OnInit } from '@angular/core';
import { Item } from '../../../shared/interfaces/item.model';
import { COLLECTION } from '../../collection';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  collection: Item[];

  constructor() { }

  ngOnInit() {
    this.collection = COLLECTION;
  }

  addItem(item: Item): void {
    this.collection.push(item);
  }

}
