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
  constructor(
    private _CollectionService: CollectionService,
    private _Router: Router
  ) {}

  ngOnInit() {}

  addItem(item: Item): void {
    this._CollectionService.addItem(item);
    this._Router.navigate(['/list']);
  }
}
