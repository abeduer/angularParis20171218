import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CollectionService } from '../../../core/services/collection/collection.service';
import { Item } from '../../../shared/interfaces/item.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  collection$: Observable<Item[]>;
  page = 1;
  pageSize = 5;
  startIndex = 0;

  constructor(private _CollectionService: CollectionService) {}

  ngOnInit() {
    this.collection$ = this._CollectionService.getCollection();
  }

  changePage(page: number): void {
    this.startIndex = (page - 1) * this.pageSize;
    this.page = page;
  }
}
