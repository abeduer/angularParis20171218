import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CollectionService } from '../../../core/services/collection/collection.service';
import { Item } from '../../../shared/interfaces/item.model';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  collection: Item[];

  constructor(
    private _CollectionService: CollectionService,
    private _Router: Router
  ) {}

  ngOnInit() {
    this.collection = this._CollectionService.getCollection();
  }

  addItem(item: Item): void {
    this.collection.push(item);
    this._Router.navigate(['/list']);
  }
}
